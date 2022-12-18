import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AccessLevel from "../../../components/Buttons/AccessLevel";
import HideCostCheckbox from "../../../components/Buttons/HideCostChecbox";
import RadioBtnType from "../../../components/Buttons/RadioBtnType";
import SelectProject from "../../../components/Buttons/SelectProject";
import ProjectTable from "../../../components/ProjectTable";

export default function AddMember() {
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
          Add Member
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
                    Invite Member
                  </Dialog.Title>
                  <p className="text-red-700">
                    Your monthly fee will be adjusted to the amount of member
                  </p>
                  <form className="mt-2 space-y-2">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        First name
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="firstname"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last name"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Last name
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="last name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="email"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Email
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="email"
                          name="email"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col items-start">
                        <RadioBtnType />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col items-start">
                        <AccessLevel />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col items-start">
                        <HideCostCheckbox />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last name"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Weekly Working Capacity
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="last name"
                          placeholder="40 hour/week"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last name"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Days
                      </label>
                      <div className="flex flex-col items-start">
                        <HideCostCheckbox />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last name"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Default Billable Rate
                      </label>
                      <p>
                        Set custom rates for projects that support "individual
                        rates"
                      </p>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="last name"
                          placeholder="30 $/hour"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last name"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Cost Rate
                      </label>
                      <p>Set hourly labor cost for this individual</p>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="last name"
                          placeholder="30 $/hr"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last name"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Project and Hourly Rates
                      </label>
                      <div className="flex flex-col items-start">
                        <SelectProject id="project-selection" />

                        <SelectProject id="type-filter(Fixed rate, Hourly Billable, Non-Billable)" />
                      </div>
                      <div>
                        <ProjectTable />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last name"
                        className="block flex items-start text-sm font-medium text-gray-700 undefined"
                      >
                        Teams Assignment
                      </label>
                      <div className="flex flex-col items-start">
                        <SelectProject />
                      </div>
                    </div>
                  </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Invite Member
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
