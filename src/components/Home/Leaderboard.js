import { Button } from "react-bootstrap";
import human1 from "../../assets/images/human1.jpg";
import human2 from "../../assets/images/human2.jpg";
import human3 from "../../assets/images/human3.jpg";

export default function Leaderboard() {
  return (
    <>
      <div className="container py-5 my-5">
        <h2 className="section-header">Leaderbord</h2>
        <div className="leaderboard d-flex justify-content-around my-5 py-5">
          <div className="d-flex justify-content-center align-items-center flex-column position-relative">
            <img src={human1} alt="" />
            <span className="leader-bronze">2</span>
            <h2>Cliffin Richard</h2>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column position-relative">
            <img src={human2} alt="" />
            <span className="leader-top">1</span>
            <h2>Steven Smith</h2>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column position-relative">
            <img src={human3} alt="" />
            <span className="leader-bronze">3</span>
            <h2>Parker White</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-3">
          <Button size="lg" variant="dark">View all</Button>
        </div>
      </div>
    </>
  );
}