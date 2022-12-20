import React from "react";
import RadialProgressBar from "./RadialProgressBar/RadialProgressBar";
import "./Users.css";

function Users() {
  return (
    <div className="">
      <div className="mt-2 users-table">
        <div>Name</div>
        <div className="users-7days">
          <div className="day">1</div>
          <div className="day">2</div>
          <div className="day">3</div>
          <div className="day">4</div>
          <div className="day">5</div>
          <div className="day">6</div>
          <div>7</div>
        </div>
        <div>Status</div>
      </div>
      <div className="mt-2 users-table">
        <div className="card">
          <div className="test w-10 h-10">
            <img
              class="avatar rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="user-profile">
            <div className="font-semibold" id="user-info-name">
              Fabio Jonathan
            </div>
            <div id="user-info-status">Admin | Full-Time | 40 h/wk</div>
          </div>
        </div>
        <div className="card users-7days">
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="progress-bar bg-sky-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full">
              {/* 72% */}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="progress-bar bg-sky-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full">
              {/* 72% */}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="progress-bar bg-sky-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full">
              {/* 72% */}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="progress-bar bg-sky-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full">
              {/* 72% */}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="progress-bar bg-sky-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full">
              {/* 72% */}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="progress-bar bg-sky-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full">
              {/* 72% */}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="progress-bar bg-sky-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full">
              {/* 72% */}
            </div>
          </div>
        </div>
        <div className="billing-status card">
          <div className="flex flex-col px-2 items-center">
            Billable:
            <div className="mt-1">
              <RadialProgressBar />
            </div>
          </div>
          <div className="flex flex-col px-2 items-center">
            <div>Non-Billable:</div>
            <div className="mt-1 ">
              <RadialProgressBar />
            </div>
          </div>
          <div>Capacity Left: 7 hr/wk</div>
        </div>
      </div>

      <div className="mt-2 users-table">
        <div>ban</div>
        <div>ben</div>
        <div>ble</div>
      </div>
    </div>
  );
}

export default Users;
