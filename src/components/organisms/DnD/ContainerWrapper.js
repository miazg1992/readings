import React, { useState } from 'react';

import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ItemCard from './ItemCard/ItemCard';
import { SyllableWrapper } from 'components/molecules/SyllableWrapper';

import { Wrapper } from './ContainerWrapper.styles';
const ContainerWrapper = ({ container, createItem, items = [], isFirst }) => {
  const [editMode, setEditMode] = useState(false);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: container.id,
    data: {
      type: 'container',
      container,
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    // padding: '10px',
    // border: 'solid 2px black',
    // margin: '10px',
    // minWidth: '200px',
    // height: '100px',
  };
  const styleIsFirst = {
    transition,
    transform: CSS.Translate.toString(transform),
    alignSelf: 'end',
    justifySelf: 'center',
    padding: '10px',
    width: '100%',
    height: '100px',
    position: 'absolute',
    button: '0px',
    left: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  };
  const styleDragging = {
    transition,
    transform: CSS.Translate.toString(transform),
    border: 'solid 2px black',
    margin: '10px',
    minWidth: '200px',
    height: '100px',
    opacity: '0.4',
  };

  if (isDragging) {
    return <div ref={setNodeRef} style={styleDragging}></div>;
  }

  return (
    <SyllableWrapper
      ref={setNodeRef}
      style={isFirst ? styleIsFirst : style}
      {...attributes}
      {...listeners}
    >
      {/*item container */}
      <SortableContext items={items}>
        {items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </SortableContext>
    </SyllableWrapper>
  );
};

export default ContainerWrapper;
