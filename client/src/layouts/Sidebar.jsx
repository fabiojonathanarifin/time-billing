import "./layout.css";
import {
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FlagIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

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
        <div className="w-full mt-12 space-y-8 relative bg-gray-800">
          <div>
            <HomeIcon className="sidebar-button" />
            <div className="sidebar-button-content bg-gray-700 rounded-md">
              <div className="sub font-bold">Dashboard</div>
              <div className="sub mt-2 space-y-1 pl-3 font-semibold">
                <p>Activity</p>
                <p>Timer</p>
                <p>Toggle</p>
              </div>
            </div>
          </div>
          <div>
            <ChartBarIcon className="sidebar-button" />
          </div>
          <div>
            <BriefcaseIcon className="sidebar-button" />
          </div>
          <div>
            <Cog6ToothIcon className="sidebar-button" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <FlagIcon className="p-1 mb-3 sidebar-button" />
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
