import React from "react";

function ListTodo() {
  var list = [
    {
      name: "Đề thi thử THPT quốc gia môn Địa lý năm học 2021-2022_đề 9",
      buttom: "Giao bài",
      ID: "103983957837680640",
      time: "Thời gian làm bài: 60 phút",
      question: "Số câu: 16",
      change: "Lần cuối chỉnh sửa: 29/12/2022 14:00",
    },
    {
      name: "Đề thi thử THPT quốc gia môn Địa lý năm học 2021-2022_đề 9",
      buttom: "Giao bài",
      ID: "103983957837680640",
      time: "Thời gian làm bài: 60 phút",
      question: "Số câu: 16",
      change: "Lần cuối chỉnh sửa: 29/12/2022 14:00",
    },
    {
      name: "Đề thi thử THPT quốc gia môn Địa lý năm học 2021-2022_đề 9",
      buttom: "Giao bài",
      ID: "103983957837680640",
      time: "Thời gian làm bài: 60 phút",
      question: "Số câu: 16",
      change: "Lần cuối chỉnh sửa: 29/12/2022 14:00",
    },
    {
      name: "Đề thi thử THPT quốc gia môn Địa lý năm học 2021-2022_đề 9",
      buttom: "Giao bài",
      ID: "103983957837680640",
      time: "Thời gian làm bài: 60 phút",
      question: "Số câu: 16",
      change: "Lần cuối chỉnh sửa: 29/12/2022 14:00",
    },
    {
      name: "Đề thi thử THPT quốc gia môn Địa lý năm học 2021-2022_đề 9",
      buttom: "Giao bài",
      ID: "103983957837680640",
      time: "Thời gian làm bài: 60 phút",
      question: "Số câu: 16",
      change: "Lần cuối chỉnh sửa: 29/12/2022 14:00",
    },
    {
      name: "Đề thi thử THPT quốc gia môn Địa lý năm học 2021-2022_đề 9",
      buttom: "Giao bài",
      ID: "103983957837680640",
      time: "Thời gian làm bài: 60 phút",
      question: "Số câu: 16",
      change: "Lần cuối chỉnh sửa: 29/12/2022 14:00",
    },
    {
      name: "Đề thi thử THPT quốc gia môn Địa lý năm học 2021-2022_đề 9",
      buttom: "Giao bài",
      ID: "103983957837680640",
      time: "Thời gian làm bài: 60 phút",
      question: "Số câu: 16",
      change: "Lần cuối chỉnh sửa: 29/12/2022 14:00",
    },
    {
      name: "Đề thi thử THPT quốc gia môn Địa lý năm học 2021-2022_đề 9",
      buttom: "Giao bài",
      ID: "103983957837680640",
      time: "Thời gian làm bài: 60 phút",
      question: "Số câu: 16",
      change: "Lần cuối chỉnh sửa: 29/12/2022 14:00",
    },
  ];
  return (
    <>
      {list.map((lists, index) => {
        return (
          <div key={index} className="footerTwo">
            <div className="footerTwo1">
              <div className="footerTwo1-1">
                <div className="icon-note1"></div>
                <h1>{lists.name}</h1>
              </div>
              <div className="footerr">
                <div className="footerTwo1-2">
                  <h1>{lists.buttom}</h1>
                </div>
                <div className="addMore">
                  <div className="icon-option"></div>
                </div>
              </div>
            </div>

            <div className="footerTwo2">
              <div className="footerTwo2-1">
                <div className="ID"></div>
                <h1>{lists.ID}</h1>
              </div>
              <div className="footerTwo2-1">
                <div className="icon-time"></div>
                <h1>{lists.time}</h1>
              </div>
            </div>

            <div className="footerTwo2">
              <div className="footerTwo2-1">
                <div className="icon-number"></div>
                <h1 className="change">{lists.question}</h1>
              </div>
              <div className="footerTwo2-1">
                <div className="icon-date"></div>
                <h1>{lists.change}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ListTodo;
