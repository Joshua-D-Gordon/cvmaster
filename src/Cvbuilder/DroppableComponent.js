import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const DroppableComponent = ({ children }) => {
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="droppable-container"
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableComponent;
