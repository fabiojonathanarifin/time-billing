import React from "react";
import "./Invoice.css";
import InvoiceContent from "./InvoiceContent";

function Invoice() {
  return (
    <div className="mt-12 w-4/6 mx-auto">
      <div className="invoice-bar py-2.5 px-6 text-gray-600">
        <div>Client</div>
        <div>Author</div>
        <div>Issue Date</div>
        {/* <div>Due Date</div> */}
        {/* <div>Date Range</div> */}
        <div>Billable</div>
        <div>PDF</div>
      </div>
      <div className="grid gap-y-3">
        <InvoiceContent />
        <InvoiceContent />
        <InvoiceContent />
        <InvoiceContent />
      </div>
    </div>
  );
}

export default Invoice;
