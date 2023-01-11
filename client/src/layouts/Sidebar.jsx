import "./layout.css";
import {
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FlagIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar bg-gray-800 flex flex-col justify-between">
      <div className="w-full">
        <div className="mt-3  inline-block">
          <img
            className="block h-10 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
        </div>
        <div className="w-full pb-5 mt-12 space-y-8 bg-gray-800">
          <div className="relative">
            <Link to="/dashboard">
              <HomeIcon className="sidebar-button" />
              <div className="sidebar-button-content bg-gray-700 rounded-md">
                <div className="sub font-semibold">Dashboard</div>
              </div>
            </Link>
          </div>
          <div className="relative">
            <ChartBarIcon className="sidebar-button" />
            <div className="sidebar-button-content bg-gray-700 rounded-md">
              <div className="sub font-semibold">Report</div>
            </div>
          </div>
          <div className="relative">
            <BriefcaseIcon className="sidebar-button" />
            <div className="sidebar-button-content bg-gray-700 rounded-md">
              <div className="sub font-semibold">Manage</div>
            </div>
          </div>
          <div className="relative">
            <Cog6ToothIcon className="sidebar-button" />
            <div className="sidebar-button-content bg-gray-700 rounded-md">
              <div className="sub font-semibold">Settings</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <FlagIcon className="p-1 mb-3 sidebar-button" />
          <div className="sidebar-button-content bg-gray-700 rounded-md">
            <div className="sub font-semibold">Feedback</div>
          </div>
        </div>
        <div>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
