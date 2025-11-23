import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
export default function ToDoList({ text, id, done , deleteTask , isDone }) {
  return (
    <div className="flex items-center my-3 gap-2 ">
      <div onClick={()=>{isDone(id)}} className="flex flex-1 items-center cursor-pointer">
        <img  className="2-7" src={done ? tick : not_tick} alt="" />
        <p className={ `text-slate-700 ml-4 text-[17px] ${done ? "line-through" : ""}`}>{text}</p>
      </div>
      <img onClick={()=>{deleteTask(id)}} className="w-4 cursor-pointer" src={delete_icon} alt="" />
    </div>
  );
}
