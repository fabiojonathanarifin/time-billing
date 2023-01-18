import { UsersIcon } from "@heroicons/react/20/solid";
import "./Teams.css";

function TeamsDashboard() {
  return (
    <div className="mt-12 mx-auto flex">
      <div className="teams-card">
        <div className="teams-card-head flex justify-between items-center">
          <div className="py-3 space-x-2 teams-card-content border-b-2  border-slate-300">
            <img
              className="h-12 w-12 rounded-lg"
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
              alt=""
            />
            <div>
              <div>
                <div className="flex font-semibold text-lg">Brown Team</div>
                <div className="flex font-semibold">Development</div>
              </div>
            </div>
          </div>
          <div className="flex justify-items-center">
            <div className="text-lg">2</div>
            <UsersIcon className="h-5 w-5 zinc-700" />
          </div>
        </div>
        <div>
          <div>
            <div className="teams-card-head">
              <div className="py-3 space-x-2 teams-card-content">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
                <div className="">
                  <div className="flex font-semibold text-base">Milo</div>
                  <div className="flex">Developer | Full-Time</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="teams-card-head">
              <div className="py-3 space-x-2 teams-card-content">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=526&q=80"
                  alt=""
                />
                <div className="">
                  <div className="flex font-semibold text-base">Lola</div>
                  <div className="flex">UI/UX Designer | Contractor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamsDashboard;
