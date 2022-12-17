import { Link } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div >
                    <div className="sidebar-menu">
                        <ul>
                            <li><Link to="/">Upload Question</Link></li>
                            <li><Link to="/contestManage">Contest Manage</Link></li>
                            <li><Link to="/leaderBoard">Leader Board</Link></li>
                            <li><Link to="/payment">Payment</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}