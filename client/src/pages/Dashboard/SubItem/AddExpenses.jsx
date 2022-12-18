import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UploadFile from "../../../components/Buttons/UploadFile";

export default function AddExpenses() {
  let [isOpen, setIsOpen] = useState(false);

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
          className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-700 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
        >
          Add Expenses
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
                    Expenses
                  </Dialog.Title>
                  <form className="mt-2 space-y-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Date
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="date"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                          placeholder="01/01/2022"
                        />
                      </div>
                    </div>
                    {/* Change to dropdown button */}
                    <div className="mt-4">
                      <label
                        htmlFor="project"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Project
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="project"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="Category"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Category
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="Category"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="description"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Decription
                      </label>
                      <div className="flex flex-col items-start">
                        <textarea
                          type="description"
                          name="description"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex w-full p-7 items-center justify-center bg-grey-lighter">
                      <UploadFile />
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
