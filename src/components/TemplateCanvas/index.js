import React, { useState } from 'react';
import DroppableContainer from '../DroppableContainer';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background: #fafafa;
`;

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  background: #fafafa;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover .delete-button {
    opacity: 1;
    visibility: visible;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  &:hover {
    background: rgba(255, 0, 0, 1);
  }
`;

function TemplateCanvas() {
  const [items, setItems] = useState([]);

  const handleDrop = (item) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...item, width: 150, height: 100 }, // Initial size for each item
    ]);
  };

  const updateItemSize = (index, width, height) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], width, height };
    setItems(updatedItems);
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <DroppableContainer onDrop={handleDrop}>
      <h3>Template</h3>
      <FlexContainer>
        {items.map((item, index) => (
          <ResizableBox
            key={index}
            width={item.width}
            height={item.height}
            minConstraints={[100, 50]}
            maxConstraints={[1200, 800]}
            resizeHandles={['se']}
            onResizeStop={(e, data) => updateItemSize(index, data.size.width, data.size.height)}
          >
            <ItemWrapper>
              {item.type}
              <DeleteButton className="delete-button" onClick={() => deleteItem(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </DeleteButton>
            </ItemWrapper>
          </ResizableBox>
        ))}
      </FlexContainer>
    </DroppableContainer>
  );
}

export default TemplateCanvas;
