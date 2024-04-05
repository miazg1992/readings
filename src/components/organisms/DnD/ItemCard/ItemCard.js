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
      <Wrapper ref={setNodeRef} style={style}>
        {' '}
      </Wrapper>
    );
  }
  // const handlePlaySound = () => {
  //   const sound = new Audio(`${process.env.PUBLIC_URL}assets/data/d.mp3`);
  //   sound.play();
  // };

  const handlePlaySound = debounce(() => {
    const sound = new Audio(`${process.env.PUBLIC_URL}assets/data/d.mp3`);
    sound.play();
  }, 500);

  return (
    <SyllableWrapper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onMouseMove={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      onMouseDown={() => handlePlaySound()}
    >
      {content}
    </SyllableWrapper>
  );
};

export default ItemCard;
