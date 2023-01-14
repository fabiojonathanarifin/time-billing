import "./Projects.css";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
function Project() {
  return (
    <div className="project-bar card font-medium text-sm">
      <div className="client">
        <div className="font-bold text-base">Skitraw Tech</div>
        <div>TimeBilling</div>
      </div>
      <div className="project-content">
        <div>40 hours 20 minutes</div>
        <div>80 hours</div>
        <div>Progress bar - 53%</div>
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
