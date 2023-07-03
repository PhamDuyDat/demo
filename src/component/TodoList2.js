import React from "react";
import TodoItem from "./TodoItem";

function TodoList2() {
  const list2 = [
    // {
    //   name: "Đề cap 1",
    //   child: [{ name: "de cap 2", child: [{ name: "Đề cap 3" }] }],
    // },
    {
      name: "Đề toán lớp 9",
      child: ["Bộ câu hỏi Toán ôn thi Đại học năm 2022"],
    },
    {
      name: "Đề toán lớp 8",
      child: ["Bộ câu hỏi Toán ôn thi Đại học năm 2022"],
    },
    {
      name: "Đề toán lớp 7",
      child: ["Bộ câu hỏi Toán ôn thi Đại học năm 2022"],
    },

    {
      name: "Bộ câu hỏi Toán ôn thi Đại học năm 2022",
      child: ["Bộ câu hỏi Toán ôn thi Đại học năm 2022"],
    },
    {
      name: "Bộ câu hỏi Toán ôn thi Đại học năm 2021",
      child: ["Bộ câu hỏi Toán ôn thi Đại học năm 2022"],
    },
  ];

  return (
    <>
      {list2.map((Todo2, index) => {
        return <TodoItem key={index} Todo2={Todo2} />;
      })}
    </>
  );
}
export default TodoList2;
