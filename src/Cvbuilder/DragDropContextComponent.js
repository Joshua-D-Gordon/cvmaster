import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableComponent from './DroppableComponent';
import DraggableComponent from './DraggableComponent';

const DragDropContextComponent = ({ cvData, setCvData }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(cvData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCvData(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <DroppableComponent>
        {cvData.map((item, index) => (
          <DraggableComponent key={item.id} item={item} index={index} />
        ))}
      </DroppableComponent>
    </DragDropContext>
  );
};

export default DragDropContextComponent;
