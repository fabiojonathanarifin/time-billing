import React from "react";
import "./Users.css";

function Users() {
  return (
    <div className="">
      <div className="users-table">
        <div className="card">
          <div className="test w-10 h-10">
            <img
              class="avatar rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="user-profile">
            <div className="font-semibold" id="user-info">
              Fabio Jonathan
            </div>
            <div id="user-info">Admin | Full-Time | 40 h/wk</div>
          </div>
        </div>
        <div className="card">ben</div>
        <div className="card">ble</div>
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
