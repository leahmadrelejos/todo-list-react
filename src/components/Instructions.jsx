function Instructions() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70">
      <h2 className="text-lg font-extrabold">Instructions / User Guide</h2>

      <div className="mt-5 space-y-5 text-sm text-slate-600">
        <div>
          <h3 className="font-bold text-slate-800">1. How to add a task</h3>
          <p className="mt-1">
            Type a task in the input field, then click <b>Add Task</b>.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-800">
            2. How to mark a task
          </h3>
          <p className="mt-1">
            Click the circle beside a task to switch between <b>Done</b> and{" "}
            <b>Not Done</b>.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-800">3. How to delete a task</h3>
          <p className="mt-1">
            Click <b>Delete</b> on the task you want to remove.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-800">4. Filter your tasks</h3>
          <p className="mt-1">
            Use <b>All</b>, <b>Not Done</b>, or <b>Done</b> to view specific
            tasks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Instructions;