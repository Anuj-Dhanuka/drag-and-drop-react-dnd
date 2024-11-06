import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const DropZone = styled.div`
  min-height: 400px;
  border: 2px dashed #999;
  padding: 20px;
  background: #fafafa;
`;

function DroppableContainer({ onDrop, children }) {
  const [, drop] = useDrop(() => ({
    accept: ['text', 'image', 'link', 'block'],
    drop: (item) => onDrop(item),
  }));

  return <DropZone ref={drop}>{children}</DropZone>;
}

export default DroppableContainer;
