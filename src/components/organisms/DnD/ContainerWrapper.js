import React, { useState } from 'react';

import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ItemCard from './ItemCard/ItemCard';
import { SyllableWrapper } from 'components/molecules/SyllableWrapper';

import { Wrapper } from './ContainerWrapper.styles';
const ContainerWrapper = ({ container, items = [], isFirst }) => {
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
    margin: '0 10px',
  };
  const styleIsFirst = {
    transition,
    transform: CSS.Translate.toString(transform),
    alignSelf: 'end',
    justifySelf: 'center',
    padding: '10px',
    width: '100%',
    // minHeight: '100px',
    minHeight: '15vh',
    position: 'absolute',
    button: '0px',
    left: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    cursor: 'auto',
  };
  const styleDragging = {
    transition,
    transform: CSS.Translate.toString(transform),
    border: ` solid 2px ${({ theme }) => theme.colors.primary}`,
    margin: '10px',
    minWidth: '200px',
    height: '100px',
    opacity: '0.4',
  };

  return (
    <SyllableWrapper ref={setNodeRef} style={isFirst ? styleIsFirst : style}>
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
