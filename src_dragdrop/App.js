import logo from "./logo.svg";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

function App() {
  const [items] = useState([
    { id: 0, text: "item0" },
    { id: 1, text: "item1" },
    { id: 2, text: "item2" },
  ]);

  const onDragEnd = (result) => {
    console.log(result.source.index);
    console.log(result.destination.index);

    const remove = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, remove[0]);
  };

  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <dev {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((items, index) => (
                <Draggable
                  draggableId={items.text}
                  index={index}
                  key={items.id}
                >
                  {(provided) => (
                    <div
                      className="item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {items.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </dev>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
