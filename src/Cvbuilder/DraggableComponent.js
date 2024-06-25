import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableComponent = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="draggable-item"
        >
          <h3>{item.content}</h3>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableComponent;
