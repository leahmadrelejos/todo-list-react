import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const cleanText = text.trim();

    if (!cleanText) return;

    onAddTask(cleanText);
    setText("");
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="task-input" className="sr-only">
        New task
      </label>
      <input
        id="task-input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="What do you need to do?"
        className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />
      <button
        type="submit"
        className="rounded-xl bg-indigo-600 px-6 py-3.5 font-extrabold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.98]"
      >
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;