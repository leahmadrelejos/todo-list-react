import { useEffect, useMemo, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import Instructions from "./components/Instructions";

const starterTasks = [
  { id: 1, text: "Review React components", done: false },
  { id: 2, text: "Practice useState and events", done: true },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("taskflow-tasks");
      return saved ? JSON.parse(saved) : starterTasks;
    } catch {
      return starterTasks;
    }
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false,
    };
    setTasks((current) => [newTask, ...current]);
  };

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((current) => current.filter((task) => !task.done));
  };

  const resetTasks = () => {
    setTasks(starterTasks);
    setFilter("all");
  };

  const filteredTasks = useMemo(() => {
    if (filter === "done") return tasks.filter((task) => task.done);
    if (filter === "active") return tasks.filter((task) => !task.done);
    return tasks;
  }, [tasks, filter]);

  const completed = tasks.filter((task) => task.done).length;
  const remaining = tasks.length - completed;

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-black text-white shadow-lg shadow-indigo-200">
            ✓
          </div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            DCIT 26 • React Laboratory
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            TaskFlow
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            A clean and responsive To-Do List built with React, React State,
            Event Handling, and Tailwind CSS.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-7">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold">My Tasks</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {remaining} {remaining === 1 ? "task" : "tasks"} remaining •{" "}
                  {completed} completed
                </p>
              </div>
              <button
                onClick={clearCompleted}
                disabled={completed === 0}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Clear completed
              </button>
            </div>

            <TaskForm onAddTask={addTask} />

            <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-100 pb-5">
              {[
                ["all", "All"],
                ["active", "Not Done"],
                ["done", "Done"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    filter === value
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))
              ) : (
                <div className="rounded-2xl border-2 border-dashed border-slate-200 px-6 py-12 text-center">
                  <div className="text-4xl">📝</div>
                  <h3 className="mt-3 font-extrabold">No tasks here</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Add a task or choose another filter.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <Instructions />

            <div className="rounded-3xl bg-indigo-600 p-6 text-white shadow-xl shadow-indigo-200">
              <h2 className="text-lg font-extrabold">React Features Used</h2>
              <ul className="mt-4 space-y-3 text-sm text-indigo-100">
                <li>✓ useState for task and filter state</li>
                <li>✓ Event handlers for every button</li>
                <li>✓ Dynamic task rendering with map()</li>
                <li>✓ Conditional rendering and filtering</li>
                <li>✓ localStorage for task persistence</li>
              </ul>
              <button
                onClick={resetTasks}
                className="mt-6 w-full rounded-xl bg-white px-4 py-3 font-extrabold text-indigo-700 transition hover:bg-indigo-50"
              >
                Reset Demo Tasks
              </button>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-slate-500">
          Built with React + Tailwind CSS • Responsive and user-friendly
        </footer>
      </div>
    </main>
  );
}

export default App;