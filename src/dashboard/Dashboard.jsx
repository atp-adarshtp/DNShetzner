import AllZones from "./AllZones";
import AllRecords from "./AllRecords";
import SingleRecord from "./SingleRecord";
import UpdateRecord from "./UpdateRecord";

function Dashboard() {
  console.log("Rendering Dashboard component");

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">DNS Management Dashboard</h1>
      <div className="dashboard-sections">
        <div className="box">
          <AllZones />
        </div>
        <div className="box">
          <AllRecords />
        </div>
        <div className="box">
          <SingleRecord recordId="cc33f4b28738649f1547b89c2c17fe3d" />
        </div>
        <div className="box">
          <UpdateRecord recordId="cc33f4b28738649f1547b89c2c17fe3d" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
