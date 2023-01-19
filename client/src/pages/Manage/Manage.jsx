import "./Manage.css";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
function Manage() {
  return (
    <div className="mt-12 mx-auto gap-x-10 flex">
      <div>
        <div className="flex py-2.5 gap-3 px-6 text-gray-600 text-light">
          <div>Client</div>
          <button
            type="button"
            className="px-3 py-1 tracking-wide text-white transition-colors duration-200 transform bg-sky-700 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
          >
            Add Client
          </button>
        </div>
        <div className="manage-card">
          <div className="flex justify-between">
            <div className="font-semibold text-base">Skitraw Tech</div>
            <div className="flex gap-3 items-center">
              <div>button</div>
              <PencilSquareIcon className="h-4 w-4 text-sky-700" />
            </div>
          </div>
          <div>Blueband</div>
          <div>Malboro</div>
          <div>OneConcern</div>
        </div>
      </div>
    </div>
  );
}
export default Manage;
