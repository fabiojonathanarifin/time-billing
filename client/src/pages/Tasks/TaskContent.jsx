function TaskContent() {
  return (
    <div className="task-bar task-card font-medium text-sm">
      <div className="flex gap-3 items-center">
        <div>Icon</div>
        <div className="font-large text-base">Front-End Development</div>
      </div>
      <div className="flex gap-3 justify-self-end">
        <div>
          <button className="group relative flex w-32 justify-center rounded-md border border-transparent bg-sky-600 py-2 px-1 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
            Assigned To
          </button>
        </div>
        <div>
          <button className="group relative flex w-32 justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-1 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
            Assign
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaskContent;
