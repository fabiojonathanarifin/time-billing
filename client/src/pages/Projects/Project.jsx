import "./Projects.css";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
function Project() {
  return (
    <div className="project-bar card font-medium text-sm">
      <div className="client">
        <div className="font-boldcd text-base">Skitraw Tech</div>
        <div>TimeBilling</div>
      </div>
      <div className="project-content">
        <div>40 hours 20 minutes</div>
        <div>80 hours</div>
        <div className="spent-bar-grid ">
          <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="spent-bar bg-sky-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full">
              {/* 72% */}
            </div>
          </div>
          53%
        </div>
        <div>39 hours 40 minutes</div>
        <div>$400</div>
        <div>
          <PencilSquareIcon className="h-5 w-5 text-blue-500" />
        </div>
      </div>
    </div>
  );
}
export default Project;
