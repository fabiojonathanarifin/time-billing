import AddActivity from "./SubItem/AddActivity";
import AddClient from "./SubItem/AddClient";
import AddContact from "./SubItem/AddContact";
import AddExpenses from "./SubItem/AddExpenses";
import AddMember from "./SubItem/AddMember";
import AddProject from "./SubItem/AddProject";
import AddRole from "./SubItem/AddRole";
function Dashboard() {
  return (
    <div className="space-y-6">
      <AddActivity />
      <AddExpenses />
      <AddClient />
      <AddContact />
      <AddRole />
      <AddMember />
      <AddProject />
    </div>
  );
}
export default Dashboard;
