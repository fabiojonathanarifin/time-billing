import TaskContent from "./TaskContent";
import "./Tasks.css";

function Tasks() {
  return (
    <div className="mt-12 w-4/6 mx-auto">
      <div className="task-bar py-2.5 px-6 text-gray-600">
        <div>Task Name</div>
        <div className="flex justify-self-end">Assigned to</div>
      </div>
      <div className="grid gap-y-3">
        <TaskContent />
        <TaskContent />
        <TaskContent />
      </div>
    </div>
  );
}
export default Tasks;
