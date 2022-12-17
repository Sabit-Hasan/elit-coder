import Sidebar from "./Sidebar";
import { leaderList } from "../../data/leaderboardData";
import './LeaderBoard.css';


export default function LeaderBoard() {

    return (
        <>
            <div className="leaderBoard">
                <div className="container">
                    <div className="inner-leaderBoard">
                        <div className="side-nav">
                            <Sidebar />
                        </div>
                        <div className="table-section">
                            <h3>Leader Board</h3>
                            <table className="table" >
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Point</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    <tbody>
                                        {/* <tr>
                                            <th>Hello</th>
                                            <td>World</td>
                                            <td>500</td>
                                            <td><button className="btn btn-danger">Paid</button></td>
                                        </tr> */}
                                    </tbody>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}