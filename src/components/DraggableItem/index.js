import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

const DraggableWrapper = styled.div`
  padding: 10px;
  margin-bottom: 8px;
  background: #e0e0e0;
  border: 1px solid #ccc;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
`;

function DraggableItem({ type, label }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <DraggableWrapper ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {label}
    </DraggableWrapper>
  );
}

export default DraggableItem;
