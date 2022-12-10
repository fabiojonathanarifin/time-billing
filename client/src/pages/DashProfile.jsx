import { EnvelopeIcon } from "@heroicons/react/24/solid";

function DashProfile() {
  return (
    // <div className="flex flex-col items-center mb-6 pb-6 pt-6 sm:justify-center bg-gray-100">
    //   <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-xl">
    //     <h1>black</h1>
    //   </div>
    // </div>

    <div className="flex flex-col items-center pt-6 w-full justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg py-1">
        <div className="photo-wrapper p-3 px-12">
          <img
            className="h-20 rounded-full mx-auto"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="John Doe"
          />
        </div>
        <div className="p-3">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            John Smith
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>Web Developer</p>
          </div>
          <div className="px-2 py-2 text-gray-500 font-semibold">
            <p>Full-Time</p>
          </div>

          <div className="text-center px-6">
            <button className="w-full px-11 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              <EnvelopeIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashProfile;
