import "./layout.css";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
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
    <div className="sub-sidebar bg-gray-900 flex flex-col">
      <div>
        <div className="font-bold text-white">
          <img
            className="block h-10 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
        </div>
        <div className="mt-7 flex flex-col h-full justify-between">
          <div className="space-y-6 text-left font-normal text-white">
            <div>
              <Link to="/dashboard">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <HomeIcon className="wide-bar-icon" />
                  <div>Dashboard</div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/activity">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <ClockIcon className="wide-bar-icon" />
                  <div>Activity</div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/report">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <ChartBarIcon className="wide-bar-icon" />
                  <div>Report</div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/manage">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <BriefcaseIcon className="wide-bar-icon" />
                  <div>Manage</div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/tasks">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <ClipboardDocumentListIcon className="wide-bar-icon" />{" "}
                  <div>Tasks</div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/projects">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <FolderIcon className="wide-bar-icon" />
                  <div>Projects</div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/teams">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <UsersIcon className="wide-bar-icon" />
                  <div>Teams</div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/tags">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <TagIcon className="wide-bar-icon" />
                  <div>Tags</div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/settings">
                <div className="wide-bar-items space-x-2 flex items-center">
                  <Cog6ToothIcon className="wide-bar-icon" />
                  <div>Settings</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
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
            <div className="flex wide-bar-items space-x-2 items-center">
              <FlagIcon className="wide-bar-icon" />
              <div>Feedback</div>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-8 menu justify-between"></div>
      </div>
    </div>
  );
}
export default SubSidebar;
