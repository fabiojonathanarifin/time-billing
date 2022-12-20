import "./layout.css";
import { Menu } from "@headlessui/react";
import {
  ClockIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  UsersIcon,
  tagIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

function SubSidebar() {
  return (
    <div className="subsidebar bg-gray-700 flex justify-end flex-col justify-between">
      <div className="pl-16 justify-end">
        <div className="mt-3 flex justify-start font-bold text-white">
          <h1>Manage</h1>
        </div>
        <div className="mt-5 space-y-3 pl-3 text-left font-normal text-white">
          <div className="space-x-2 flex items-center">
            <ClockIcon className="sub-icon" />
            <div>Time</div>
          </div>
          <div className="space-x-2 flex items-center">
            <ClipboardDocumentListIcon className="sub-icon" /> <div>Tasks</div>
          </div>
          <div className="space-x-2 flex items-center">
            <FolderIcon className="sub-icon" />
            <div>Projects</div>
          </div>
          <div className="space-x-2 flex items-center">
            <UsersIcon className="sub-icon" />
            <div>Users</div>
          </div>
          <div className="space-x-2 flex items-center">
            <TagIcon className="sub-icon" />
            <div>Tags</div>
          </div>
        </div>
        <div className="mt-12 space-y-8 menu justify-between"></div>
      </div>
    </div>
  );
}
export default SubSidebar;
