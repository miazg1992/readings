import React, { useState } from 'react';
import { Wrapper } from './ItemCard.styles';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import debounce from 'lodash.debounce';
import { SyllableWrapper } from 'components/molecules/SyllableWrapper';

const ItemCard = ({ item }) => {
  const { id, content } = item;
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    data: {
      type: 'item',
      item,
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  if (isDragging) {
    return (
      <SyllableWrapper ref={setNodeRef} style={style}>
        {' '}
      </SyllableWrapper>
    );
  }
  // const handlePlaySound = () => {
  //   const sound = new Audio(`${process.env.PUBLIC_URL}assets/data/d.mp3`);
  //   sound.play();
  // };

  const handlePlaySound = debounce((soundName) => {
    if (soundName) {
      const sound = new Audio(
        `${process.env.PUBLIC_URL}assets/data/${soundName}.mp3`,
      );
      sound.play();
    } else return;
  }, 500);

  return (
    <SyllableWrapper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onMouseMove={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      onMouseDown={(content) => handlePlaySound(item.content)}
    >
      {content}
    </SyllableWrapper>
  );
};

export default ItemCard;
