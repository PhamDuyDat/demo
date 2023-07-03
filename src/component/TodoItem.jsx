import React, { useState } from "react";

function TodoItem({ Todo2 }) {
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <div className="listOne" onClick={() => setShowItem(!showItem)}>
        <div className="icon-right"></div>
        <div className="icon-page"></div>
        <h1>{Todo2.name}</h1>
      </div>
      <div
        className="listTwo1"
        style={{ display: `${showItem ? "block" : "none"}` }}
      >
        {Todo2.child?.map((data) => (
          <div className="listTwo">
            <div className="icon-page"></div>
            <h1>{data}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoItem;
