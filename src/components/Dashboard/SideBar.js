import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";

export default function SideBar() {
  const [popup, setPopup, authentication, setAuthentication] = useContext(UserContext);
  return (
    <>
      <div className="sidebar">
        <div className="side-nav-header">
          <img className="side-profile-img" src={authentication.photoUrl} alt="" />
          <h5 className="side-profile-name">{authentication.displayName}</h5>
          <span className="side-profile-email">{authentication.email}</span>
        </div>
        <div className="side-nav-body">
          <ul className="side-nav-links">
            <li className="side-nav-link">
              <Link className="side-nav-item" to="">Question Upload</Link>
            </li>
            <li className="side-nav-link">
              <Link className="side-nav-item" to="">User Management</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
