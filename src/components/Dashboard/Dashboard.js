import SideBar from "./SideBar";
import QuesUpload from "./QuesUpload";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="container d-flex">
        <SideBar />
        <QuesUpload />
      </div>
    </>
  );
}
