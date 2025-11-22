import { useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import ToDoList from "./ToDoList";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);

  const inputRef = useRef();
  const add = () => {
    let inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    let newTask = {
      id: Date.now(),
      text: inputText,
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
    inputRef.current.value = "";
  };
  return (
    <div className=" bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* -----------title--------------  */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To Do List</h1>
      </div>

      {/* -----------form --------------------- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none h-14 flex-1  pl-12 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>

      {/* -----------todo list ------------------  */}
      <div>
        {tasks.map((item, index) => {
          return (
            <ToDoList
              key={index}
              text={item.text}
              id={item.id}
              done={item.done}
            />
          );
        })}
      </div>
    </div>
  );
}
