import "./layout.css";
import { Menu } from "@headlessui/react";
import {
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <div className="sidebar bg-gray-800 flex flex-col justify-between">
      <div>
        <div className="mt-3">
          <img
            className="block h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div className="mt-12 space-y-8 menu justify-between">
          <div className="icon-color">
            <HomeIcon className="" />
          </div>
          <div className="icon-color">
            <ChartBarIcon className="" />
          </div>
          <div className="icon-color">
            <Cog6ToothIcon className="" />
          </div>
        </div>
      </div>
      <div className="p-1 mb-3 icon-color">
        <FlagIcon className="" />
      </div>
    </div>
  );
}
export default Sidebar;
