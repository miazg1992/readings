import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

const DnD = ({ activeTask }) => {
  const [items, setItems] = useState([]);
  const [containers, setContainers] = useState([]);
  const containersId = useMemo(
    () => containers.map((container) => container.id),
    [containers],
  );
  const firstContainerId = 'TODO';
  // const itemsId = useMemo(() => items.map((item) => item.id), [items]);
  const [activeContainer, setActiveContainer] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
  );

  const generateContainers = (syllables) => {
    if (syllables) {
      const newConatiners = syllables.map((syllable, index) => {
        let containerId = '';
        if (index === 0) containerId = firstContainerId;
        const newContainer = {
          id: containerId || uuidv4(),
          title: `title ${syllable}${containers.length + 1}`,
        };
        return newContainer;
      });

      setContainers(newConatiners);
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
  // const deleteContainer = (id) => {
  //   const filteredContainers = containers.filter(
  //     (container) => container.id !== id,
  //   );
  //   setContainers(filteredContainers);

  //   const newItems = items.filter((item) => item.containerId !== id);
  //   setItems(newItems);
  // };
  // const updateContainer = (id, e) => {
  //   const title = e.target.value;
  //   const newContainers = containers.map((container) => {
  //     if (container.id !== id) return container;
  //     return { ...container, title };
  //   });
  //   setContainers(newContainers);
  // };
  const createItem = (containerId) => {
    const newItem = {
      id: uuidv4(),
      containerId: containerId,
      content: `zadanie ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

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

    const activeContainerId = active.id;
    const overContainerId = over.id;

    if (activeContainerId === overContainerId) return;

    if (active.data.current.type === 'item') {
      setItems((items) => {
        const activeItemIndex = items.findIndex(
          (item) => item.id === active.id,
        );
        const overItemIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, activeItemIndex, overItemIndex);
      });
    } else {
      setContainers((container) => {
        const activeContainerIndex = containers.findIndex(
          (container) => container.id === activeContainerId,
        );
        const overContainerIndex = containers.findIndex(
          (container) => container.id === overContainerId,
        );

        return arrayMove(containers, activeContainerIndex, overContainerIndex);
      });
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
      setItems((items) => {
        const activeIndex = items.findIndex((item) => item.id === activeId);

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
              createItem={createItem}
              items={items.filter((item) => item.containerId === container.id)}
              isFirst={index === 0 ? true : false}
            />
          ))}
        </SortableContext>
      </Wrapper>
      {createPortal(
        <DragOverlay>
          {activeContainer && (
            <ContainerWrapper
              key={activeContainer.id}
              container={activeContainer}
              createItem={createItem}
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
