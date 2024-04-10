import React, { useContext, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'components/atoms/Button/Button';
// import NextIcon from 'components/atoms/Icons/CorrectIcon/NextIcon/NextIcon';
import ContainerWrapper from './ContainerWrapper';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import ItemCard from './ItemCard/ItemCard';
import { Wrapper } from './DnD.styles';
import { TasksContext } from 'providers/TasksProvider';

const DnD = ({ activeTask }) => {
  const firstContainerId = 'TODO';
  const [items, setItems] = useState([]);
  const [containers, setContainers] = useState([
    {
      id: firstContainerId,
      title: `todo`,
    },
  ]);
  const containersId = useMemo(
    () => containers.map((container) => container.id),
    [containers],
  );
  // const itemsId = useMemo(() => items.map((item) => item.id), [items]);
  const [activeContainer, setActiveContainer] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const { result, updateResult } = useContext(TasksContext);

  const checkAnswer = () => {
    let isCorrect = false;
    items.map((item) => {
      console.log(item.content);
      console.log(item.containerId);
      containers.forEach((container) => {
        if (container.id === firstContainerId) return;
        if (container.id === item.containerId) {
          console.log('kontenery ID się zgadzają');
          if (container.title === item.content) {
            console.log('OK', container.title, item.content);
            isCorrect = true;
          }
          // } else {
          //   console.log('ZLe', container.title, item.content);
          //   updateResult(isCorrect);
          // }
        }
      });
    });
    updateResult(isCorrect);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
  );

  const generateContainers = (syllables) => {
    if (syllables) {
      const newContainerToDo = {
        id: firstContainerId,
        title: `todo`,
      };
      const newConatiners = syllables.map((syllable, index) => {
        const newContainer = {
          id: uuidv4(),
          title: `${syllable}`,
        };
        return newContainer;
      });
      setContainers([newContainerToDo, ...newConatiners]);
    } else return;
  };

  const generateItems = (syllables) => {
    if (syllables) {
      const newItems = syllables.map((syllable) => {
        const newItem = {
          id: uuidv4(),
          content: syllable,
          containerId: firstContainerId,
        };
        return newItem;
      });
      setItems(newItems);
    }
  };
  const initTask = (activeTask) => {
    if (activeTask) {
      const { syllables } = activeTask;
      generateContainers(syllables);
      generateItems(syllables);
    }
  };

  useEffect(() => {
    initTask(activeTask);
  }, [activeTask]);

  const updateItem = (e, id) => {
    const content = e.target.value;
    const newItems = items.map((item) => {
      if (item.id !== id) return item;
      return { ...item, content };
    });
    setItems([...newItems]);
  };
  const handleDragStart = ({ active }) => {
    if (active.data.current.type === 'container') {
      setActiveContainer(active.data.current.container);
      return;
    }
    if (active.data.current.type === 'item') {
      setActiveItem(active.data.current.item);
      return;
    }
  };

  const handleDragEnd = (e) => {
    setActiveContainer(null);
    setActiveItem(null);
    const { active, over } = e;
    if (!over) return;

    if (active.data.current.type === 'item') {
      setItems((items) => {
        const activeItemIndex = items.findIndex(
          (item) => item.id === active.id,
        );
        const overItemIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, activeItemIndex, overItemIndex);
      });
    }
  };
  //if the container is not empty, add the old item to the TODO container
  const prepareContainer = (id) => {
    const filtredItems = items.filter((item) => item.containerId === id);
    if (filtredItems.length > 0) {
      const updateItems = filtredItems.map((item) => {
        item.containerId = firstContainerId;
        return item;
      });
      setItems(updateItems);
    }
  };
  const handleDragOver = (e) => {
    const { active, over } = e;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const isActiveAItem = active.data.current?.type === 'item';
    const isOverAItem = over.data.current?.type === 'item';
    const isOverAContainer = over.data.current?.type === 'container';

    if (!isActiveAItem) return;

    if (activeId === overId) return;
    //dragging a Item over another Item
    if (isActiveAItem && isOverAItem) {
      setItems((items) => {
        const activeIndex = items.findIndex((item) => item.id === activeId);
        const overIndex = items.findIndex((item) => item.id === overId);

        if (items[activeIndex].containerId !== items[overIndex].containerId) {
          items[activeIndex].containerId = items[overIndex].containerId;
        }
        return arrayMove(items, activeIndex, overIndex);
      });
    }
    //dragging a Item over another Container
    if (isActiveAItem && isOverAContainer) {
      console.log(active, over, 'act i over');
      setItems((items) => {
        const activeIndex = items.findIndex((item) => item.id === activeId);
        prepareContainer(overId);
        items[activeIndex].containerId = overId;

        return arrayMove(items, activeIndex, activeIndex);
      });
    }
  };
  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <Wrapper>
        <SortableContext items={containersId}>
          {containers.map((container, index) => (
            <ContainerWrapper
              key={container.id}
              container={container}
              items={items.filter((item) => item.containerId === container.id)}
              isFirst={index === 0 ? true : false}
            />
          ))}
        </SortableContext>
        <Button onClick={checkAnswer}> Sprawdź</Button>
        <div> {result ? 'Brawo udało Ci się!' : 'rozwiąż zadanie'}</div>
      </Wrapper>
      {createPortal(
        <DragOverlay>
          {activeContainer && (
            <ContainerWrapper
              key={activeContainer.id}
              container={activeContainer}
              items={items.filter(
                (item) => item.containerId === activeContainer.id,
              )}
            />
          )}
          {activeItem && <ItemCard item={activeItem} />}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};

export default DnD;
