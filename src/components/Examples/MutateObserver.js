import React, { useState, useEffect, useRef } from "react";

const MutateObserver = () => {
  const [items, setItems] = useState([
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
  ]);

  const listRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          alert("Task added or removed");
        }
      });
    });

    if (listRef.current) {
      observer.observe(listRef.current, { childList: true });
    }

    return () => observer.disconnect();
  }, []);

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      content: `Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Draggable List</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <ul ref={listRef}>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.content}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MutateObserver;
