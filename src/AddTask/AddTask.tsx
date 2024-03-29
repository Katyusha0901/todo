import { useState } from "react";
import "./AddTask.css";

interface Props {
  onAddTask: (text: string) => void;
}

export const AddTask: React.FC<Props> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  function AddTask() {
    setText("");
    onAddTask(text);
  }

  return (
    <div className="add-task">
      <input
        placeholder="Add task"
        className="add-task__input-task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && text.length >= 1) {
            AddTask();
          }
        }}
      />
      <button
        className="add-task__button-add"
        onClick={() => {
          if (text.length >= 1) {
            AddTask();
          }
        }}
      >
        Add Task
      </button>
    </div>
  );
};
