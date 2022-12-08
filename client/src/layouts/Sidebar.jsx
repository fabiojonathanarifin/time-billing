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
          <div>
            <HomeIcon className="icon-color" />
          </div>
          <div>
            <ChartBarIcon className="icon-color" />
          </div>
          <div>
            <Cog6ToothIcon className="icon-color" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <FlagIcon className="p-1 mb-3 icon-color" />
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
