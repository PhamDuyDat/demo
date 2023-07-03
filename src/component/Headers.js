import React from "react";
import "./Header.css";
import "./repon.css";
import ListTodo from "./ListTodo";
import TodoList2 from "./TodoList2";
import TodoList from "./TodoList";

function Headers() {
  return (
    <div className="Headers">
      <div className="all">
        <div className="listFolder">
          <div className="first">
            <h1>Thư mục</h1>
            <div className="icon-plus"></div>
          </div>
          <div className="changeList">
            {/* <TodoList />
            <TodoList2 /> */}

            {/* <MenuTree />
            <div className="listOne">
                <div className="icon-right"></div>
                <div className="icon-page"></div>
                <h1>Đề toán lớp 10</h1>
              </div>
              <ul className="children">
                <div className="listTwo">
                  <div className="icon-page"></div>
                  <h1>Đề toán 10</h1>
                </div>
              </ul>
            </div> */}

            <TodoList2 />
          </div>
        </div>
        <div className="adder">
          <div className="header">
            <div className="headerOne">
              <input
                id="search"
                type="text"
                placeholder="Nhập tên đề thi / ID"
              />
              <div className="icon-search" htmlFor="search"></div>
            </div>
            <div className="headerTwo">
              <select>
                <span>Môn</span>
                <option value="">Toán</option>
                <option value="">Văn</option>
                <option value="">Anh</option>
              </select>
            </div>

            <div className="headerTwo">
              <select>
                <span>Khối</span>
                <option value="">Khối 10</option>
                <option value="">Khối 11</option>
                <option value="">Khối 12</option>
              </select>
            </div>

            <div className="headerTwo">
              <select>
                <span>Loại đề</span>
                <option value="">Loại đề khó</option>
                <option value="">Loại đề dễ</option>
                <option value="">Loại đề TB</option>
              </select>
            </div>

            <div className="headerThere">
              <h1>Lọc</h1>
            </div>
          </div>
          <div className="footer">
            <div className="footerOne">
              <h1>Đề toán lớp 10</h1>
              <div className="addText">
                <div className="add-text"></div>
                <h1>Thêm đề thi</h1>
              </div>
            </div>
            <div className="footerTo">
              <ListTodo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
