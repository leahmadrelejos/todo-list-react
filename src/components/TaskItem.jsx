function TaskItem({ task, onToggle, onDelete }) {
  return (
    <article
      className={`flex items-center gap-3 rounded-2xl border p-4 transition ${
        task.done
          ? "border-emerald-100 bg-emerald-50/70"
          : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-sm"
      }`}
    >
      <button
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? "Mark task as not done" : "Mark task as done"}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black transition ${
          task.done
            ? "border-emerald-500 bg-emerald-500 text-white"
            : "border-slate-300 text-transparent hover:border-indigo-500"
        }`}
      >
        ✓
      </button>

      <span
        className={`min-w-0 flex-1 break-words text-sm font-semibold sm:text-base ${
          task.done ? "text-slate-400 line-through" : "text-slate-700"
        }`}
      >
        {task.text}
      </span>

      <span
        className={`hidden rounded-full px-3 py-1 text-xs font-bold sm:block ${
          task.done
            ? "bg-emerald-100 text-emerald-700"
            : "bg-amber-100 text-amber-700"
        }`}
      >
        {task.done ? "Done" : "Not Done"}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="rounded-lg px-3 py-2 text-sm font-bold text-slate-400 transition hover:bg-red-50 hover:text-red-600"
        aria-label={`Delete ${task.text}`}
      >
        Delete
      </button>
    </article>
  );
}

export default TaskItem;