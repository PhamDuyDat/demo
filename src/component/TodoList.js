import React, { Children } from "react";

function TodoList() {
  const Todo = [
    {
      name: "Đề toán lớp 10",
      children: [
        {
          name: "Đề toán lớp 9",
        },
      ],
    },
  ];

  return (
    <>
      {Todo.map((List, index) => {
        return (
          <div key={index}>
            <div className="listOne">
              <div className="icon-right"></div>
              <div className="icon-page"></div>
              <h1>{List.name}</h1>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default TodoList;
