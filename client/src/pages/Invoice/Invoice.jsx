import React from "react";
import "./Invoice.css";
import { DocumentIcon } from "@heroicons/react/24/solid";

function Invoice() {
  return (
    <div>
      <div className="mt-16">Invoice</div>
      <div className="invoice-bar">
        <div>Client</div>
        <div>Author</div>
        <div>Issue Date</div>
        {/* <div>Due Date</div> */}
        {/* <div>Date Range</div> */}
        <div>Billable</div>
        <div>PDF</div>
      </div>
      <div className="invoice-bar card">
        <div className="client">
          <div className="font-semibold text-sm">Skitraw Tech</div>
          <div>TimeBilling</div>
        </div>
        <div>Fabio Jonathan</div>
        <div>Dec, 25/11</div>
        <div>$27,300</div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="group relative flex w-32 justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <DocumentIcon
                className="h-5 w-5 text-rose-500 group-hover:text-rose-400"
                aria-hidden="true"
              />
            </span>
            Print PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
