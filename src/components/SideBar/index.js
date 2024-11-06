import React from 'react';
import DraggableItem from '../DraggableItem';

const items = [
  { id: 1, type: 'text', label: 'Text' },
  { id: 2, type: 'image', label: 'Image' },
  { id: 3, type: 'link', label: 'Link' },
  { id: 4, type: 'block', label: 'Block' },
];

function Sidebar() {
  return (
    <div>
      <h3>Elements</h3>
      {items.map((item) => (
        <DraggableItem key={item.id} type={item.type} label={item.label} />
      ))}
    </div>
  );
}

export default Sidebar;
