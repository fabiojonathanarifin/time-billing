function DashProgressBar() {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <div className="min-h-max py-20 px-10">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
          <div
            className="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
            x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }"
          >
            <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
              <svg
                className="w-32 h-32 transform translate-x-1 translate-y-1"
                x-cloak
                aria-hidden="true"
              >
                <circle
                  className="text-gray-300"
                  stroke-width="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="60"
                  cy="60"
                />
                <circle
                  className="text-blue-600"
                  stroke-width="10"
                  stroke-dasharray="circumference"
                  stroke-dashoffset="circumference - percent / 100 * circumference"
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="60"
                  cy="60"
                />
              </svg>
              <span
                className="absolute text-2xl text-blue-700"
                x-text="`${percent}%`"
              ></span>
            </div>
            <p className="ml-10 font-medium text-gray-600 sm:text-xl">
              Performance
            </p>
            <span className="ml-auto text-xl font-medium text-blue-600 hidden sm:block">
              +25%
            </span>
          </div>

          <div
            className="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
            x-data="{ circumference: 50 * 2 * Math.PI, percent: 90 }"
          >
            <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
              <svg
                className="w-32 h-32 transform translate-x-1 translate-y-1"
                x-cloak
                aria-hidden="true"
              >
                <circle
                  className="text-gray-300"
                  stroke-width="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="60"
                  cy="60"
                />
                <circle
                  className="text-red-600"
                  stroke-width="10"
                  stroke-dasharray="circumference"
                  stroke-dashoffset="circumference - percent / 100 * circumference"
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="60"
                  cy="60"
                />
              </svg>
              <span
                className="absolute text-2xl text-red-700"
                x-text="`${percent}%`"
              ></span>
            </div>
            <p className="ml-10 font-medium text-gray-600 sm:text-xl">
              Storage
            </p>
            <span className="ml-auto text-xl font-medium text-red-600 hidden sm:block">
              20GB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashProgressBar;
