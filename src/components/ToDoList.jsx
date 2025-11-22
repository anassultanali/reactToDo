import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
export default function ToDoList() {
  return (
    <div className="flex items-center my-3 gap-2 ">
      <div>
        <img src={tick} alt="" />
        <p>Learn coding ...</p>
      </div>
    </div>
  );
}
