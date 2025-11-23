import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import ToDoList from "./ToDoList";

export default function ToDo() {
  const [tasks, setTasks] = useState(localStorage.getItem("tasks")?
JSON.parse(localStorage.getItem("tasks")) : []);
  const inputRef = useRef();

  // ----------------------- Add --------------------
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

  // ----------------------- Delete --------------------
  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  };

  // ----------------------- Update --------------------
  const isDone = (id) => {
    setTasks((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  };

  // ----------------------- Update --------------------
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
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
              deleteTask={deleteTask}
              isDone={isDone}
            />
          );
        })}
      </div>
    </div>
  );
}
