import React, { useState } from "react";

const DraggableList = () => {
  // Initial list of items
  const [items, setItems] = useState([
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);

  // Handle the drag start event
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
  };

  // Handle the drag over event
  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow the drop
  };

  // Handle the drop event
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    // const draggedItemIndex = e.dataTransfer.getData("draggedItemIndex");
    const draggedItem = items[draggedIndex];

    const newItems = [...items];
    newItems.splice(draggedIndex, 1); // Remove the dragged item
    newItems.splice(targetIndex, 0, draggedItem); // Insert it at the new position

    setItems(newItems); // Update the state with the new item order
  };

  // Handle deleting an item
  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Handle adding a new item
  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      content: `Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <h1>Draggable List</h1>

      <button onClick={handleAddItem}>Add Item</button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              padding: "10px",
              margin: "5px 0",
              backgroundColor: "#f4f4f4",
              border: "1px solid #ccc",
              cursor: "move",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {item.content}
            <button
              onClick={() => handleDelete(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraggableList;
