import AddActivity from "./SubItem/AddActivity";
import AddClient from "./SubItem/AddClient";
import AddContact from "./SubItem/AddContact";
import AddExpenses from "./SubItem/AddExpenses";
import AddRole from "./SubItem/AddRole";
function Dashboard() {
  return (
    <div className="space-y-6">
      <AddActivity />
      <AddExpenses />
      <AddClient />
      <AddContact />
      <AddRole />
    </div>
  );
}
export default Dashboard;
