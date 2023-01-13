import "./Projects.css";
import { DocumentIcon } from "@heroicons/react/24/solid";

function Project() {
  return (
    <div className="invoice-bar card font-medium text-sm">
      <div className="client">
        <div className="font-semibold text-base">Skitraw Tech</div>
        <div>TimeBilling</div>
      </div>
      <div>40 hours 20 minutes</div>
      <div>80 hours</div>
      <div>Progress bar - 53%</div>
      <div>39 hours 40 minutes</div>
      <div>$400</div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="group relative flex w-32 justify-center rounded-md border border-transparent bg-rose-600 py-2 px-1 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          <div>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <DocumentIcon
                className="h-5 w-5 text-rose-500 group-hover:text-rose-400"
                aria-hidden="true"
              />
            </span>
            Print PDF
          </div>
        </button>
      </div>
    </div>
  );
}
export default Project;
