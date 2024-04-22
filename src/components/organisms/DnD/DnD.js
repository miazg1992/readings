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
import { DnDWrapper, Wrapper } from './DnD.styles';
import { TasksContext } from 'providers/TasksProvider';
import { includes } from 'lodash';

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

  const [isSolved, setIsSolved] = useState(false);

  const { result, changeTaskStatus, updateActiveIndex } =
    useContext(TasksContext);

  const checkIsCompleted = () => {
    console.log('sprawdzam czy uzupełnione');
    const checkedContainers = containers.slice(1);
    console.log(checkedContainers, 'checkedContainers');

    const containersCompleted = checkedContainers.map((container) => {
      const filtredItem = items.filter((item) => {
        if (item.containerId === container.id) return item;
      });
      if (filtredItem.length > 0) return true;
      else return false;
    });
    if (containersCompleted.includes(false)) {
      // setIsCompleted(false);
      return;
    } else {
      // setIsCompleted(true);
      checkAnswer();
      setIsSolved(true);
    }
  };
  const checkAnswer = () => {
    let isCorrect = false;
    console.log(items, 'items chA');
    console.log(containers, 'conntainers chA');
    const checkedContainers = containers.slice(1);

    const answers = checkedContainers.map((container) => {
      let isCorrectItem;

      const filtredItems = items.filter((item) => {
        if (item.containerId === container.id) {
          if (item.content === container.title) {
            return item;
          } else return;
        }
      });
      console.log(filtredItems, 'filtredItems');
      if (filtredItems.length > 0) {
        isCorrectItem = true;
      } else isCorrectItem = false;
      console.log(isCorrectItem, 'isCorrectItem');
      return isCorrectItem;
    });
    console.log(answers, 'answers');
    const containIncorrectAnswer = answers.includes(false);
    isCorrect = !containIncorrectAnswer;
    console.log(containIncorrectAnswer, 'containIncorrectAnswer');
    console.log(isCorrect, 'isCorrect');
    changeTaskStatus(isCorrect);
  };

  // const checkAnswer = () => {
  //   let isCorrect = false;
  //   let error = null;
  //   console.log('sprawdzam odp');

  //   const test = containers.map((container) => {
  //     const y = items.indexOf((item) => item.containerId === container.id);
  //     console.log(y, 'y');
  //     return y;
  //   });
  //   console.log(test, 'test');
  //   changeTaskStatus(isCorrect);
  // };

  //   const checkAnswer = () => {
  //   let isCorrect = false;

  //   console.log('sprawdzam odp');
  //   items.map((item) => {
  //     const isCorrectItems = containers.map((container) => {
  //       let isCorrectItem = false;
  //       if (container.id === firstContainerId) return;
  //       if (container.id === item.containerId) {
  //         if (container.title === item.content) {
  //           isCorrectItem = true;
  //         }
  //         console.log(isCorrectItem, 'w forEach');
  //         return isCorrectItem;
  //       }
  //     });
  //     console.log(isCorrectItems, 'niby tablica');
  //     return isCorrect;
  //   });
  //   changeTaskStatus(isCorrect);
  // };

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
      setIsSolved(false);
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
    checkIsCompleted();
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
    console.log(active, over);
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const isActiveAItem = active.data.current?.type === 'item';
    const isOverAItem = over.data.current?.type === 'item';
    const isOverAContainer = over.data.current?.type === 'container';

    if (!isActiveAItem) return;

    if (activeId === overId) return;
    //dragging a Item over another Item
    console.log(active, over, 'nadinnym Itemem');
    console.log(items, 'items');
    console.log(active, 'active');
    console.log(over, 'over');
    if (isActiveAItem && isOverAItem) {
      return;
      // setItems((items) => {
      //   const activeIndex = items.findIndex((item) => item.id === activeId);
      //   const overIndex = items.findIndex((item) => item.id === overId);

      //   if (items[activeIndex].containerId !== items[overIndex].containerId) {
      //     items[activeIndex].containerId = items[overIndex].containerId;
      //   }
      //   return arrayMove(items, activeIndex, overIndex);
      // });
    }
    //dragging a Item over another Container
    if (isActiveAItem && isOverAContainer) {
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
        <DnDWrapper>
          <SortableContext items={containersId}>
            {containers.map((container, index) => (
              <ContainerWrapper
                key={container.id}
                container={container}
                items={items.filter(
                  (item) => item.containerId === container.id,
                )}
                isFirst={index === 0 ? true : false}
              />
            ))}
          </SortableContext>
        </DnDWrapper>
        {isSolved ? (
          <Button onClick={() => initTask(activeTask)}> Ponownie</Button>
        ) : null}
        {isSolved ? (
          <Button onClick={updateActiveIndex}> Następne</Button>
        ) : null}
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
