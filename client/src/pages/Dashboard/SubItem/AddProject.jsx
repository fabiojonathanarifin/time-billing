import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ProjectTypeTab from "../../../components/Buttons/ProjectTypeTab";
import SelectProject from "../../../components/Buttons/SelectProject";

export default function AddProject() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Add Project
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Project
                  </Dialog.Title>
                  <form className="mt-2 space-y-2">
                    <div>
                      <label
                        htmlFor="projectname"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Name
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="projectname"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="client"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Client
                      </label>
                      <div className="flex flex-col items-start">
                        <SelectProject />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Date
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="website"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Project Code (optional)
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="website"
                          placeholder="A1"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="notes"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Project Notes
                      </label>
                      <div className="flex flex-col items-start">
                        <textarea
                          name="notes"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="notes"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Project Notes
                      </label>
                      <div className="flex flex-col items-start">
                        <ProjectTypeTab />
                      </div>
                    </div>{" "}
                  </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
