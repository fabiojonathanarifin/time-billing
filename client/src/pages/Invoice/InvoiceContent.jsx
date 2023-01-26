import "./Invoice.css";
import { DocumentIcon } from "@heroicons/react/24/solid";

function InvoiceContent() {
  return (
    <div className="invoice-bar invoice-card font-medium text-sm">
      <div className="client">
        <div className="font-semibold text-base">Skitraw Tech</div>
        <div>TimeBilling</div>
      </div>
      <div>Fabio Jonathan</div>
      <div>Dec, 25/11</div>
      <div>$27,300</div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="group relative flex w-32 justify-center rounded-md border border-transparent bg-rose-600 py-2 px-1 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          <div>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <DocumentIcon
                className="h-5 w-5 text-rose-500 group-hover:text-rose-400"
                aria-hidden="true"
              />
            </span>
            Print PDF
          </div>
        </button>
      </div>
    </div>
  );
}
export default InvoiceContent;
