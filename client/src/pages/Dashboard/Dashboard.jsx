import SelectProject from "../../components/Buttons/SelectProject";
import AddActivity from "./SubItem/AddActivity";
import AddClient from "./SubItem/AddClient";
import AddExpenses from "./SubItem/AddExpenses";

function Dashboard() {
  return (
    <div className="space-y-6">
      <AddActivity />
      <AddExpenses />
      <AddClient />
    </div>
  );
}
export default Dashboard;
