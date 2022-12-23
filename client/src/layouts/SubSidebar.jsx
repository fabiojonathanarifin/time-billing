import "./layout.css";
import { Menu } from "@headlessui/react";
import {
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  UsersIcon,
  FlagIcon,
  TagIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

function SubSidebar() {
  return (
    <div className="subsidebar bg-gray-900 flex flex-col">
      <div className="pl-1">
        <div className="mt-3 font-bold text-white">
          <img
            className="block h-10 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
        </div>
        <div className="flex flex-col h-full justify-between">
          <div className="mt-8 space-y-6 text-left font-normal text-white">
            <div className="wide-bar-items space-x-2 flex items-center">
              <HomeIcon className="wide-bar-icon" />
              <div>Dashboard</div>
            </div>
            <div className="wide-bar-items space-x-2 flex items-center">
              <ClockIcon className="wide-bar-icon" />
              <div>Activity</div>
            </div>
            <div className="wide-bar-items space-x-2 flex items-center">
              <ChartBarIcon className="wide-bar-icon" />
              <div>Report</div>
            </div>
            <div className="wide-bar-items space-x-2 flex items-center">
              <BriefcaseIcon className="wide-bar-icon" />
              <div>Manage</div>
            </div>
            <div className="wide-bar-items space-x-2 flex items-center">
              <ClipboardDocumentListIcon className="wide-bar-icon" />{" "}
              <div>Tasks</div>
            </div>
            <div className="wide-bar-items space-x-2 flex items-center">
              <FolderIcon className="wide-bar-icon" />
              <div>Projects</div>
            </div>
            <div className="wide-bar-items space-x-2 flex items-center">
              <UsersIcon className="wide-bar-icon" />
              <div>Users</div>
            </div>
            <div className="wide-bar-items space-x-2 flex items-center">
              <TagIcon className="wide-bar-icon" />
              <div>Tags</div>
            </div>
            <div className="wide-bar-items space-x-2 flex items-center">
              <Cog6ToothIcon className="wide-bar-icon" />
              <div>Settings</div>
            </div>
          </div>
          <div>
            <div className="py-3 space-x-2 wide-bar-bottom">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="wide-bar-user-profile">
                <div className="flex font-semibold">Fabio Jonathan</div>
                <div className="flex">Manager</div>
              </div>
            </div>
            <div className="py-3 ">
              <div className="wide-bar-items space-x-2 flex items-center">
                <FlagIcon className="wide-bar-icon" />
                <div>Feedback</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-8 menu justify-between"></div>
      </div>
    </div>
  );
}
export default SubSidebar;
