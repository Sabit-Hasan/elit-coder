import { Button } from "react-bootstrap";
import human1 from "../../assets/images/human1.jpg";
import human2 from "../../assets/images/human2.jpg";
import human3 from "../../assets/images/human3.jpg";

const Trophy = ({ points }) => {
  return (
    <div className="d-flex align-items-center">
      <i class="fa-solid fa-trophy"></i>
      <span className="ms-1 fw-bold">{points}</span>
    </div>
  );
}

const Leaders = ({ image, position, name, points }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column position-relative m-3">
        <img src={image} alt="" />
        <span className="leader-bronze">{position}</span>
        <h2>{name}</h2>
        <Trophy points={points} />
      </div>
    </>
  );
}

export default function Leaderboard() {
  return (
    <>
      <div className="container py-5 my-5">
        <h2 className="section-header">Leaderbord</h2>
        <div className="leaderboard d-flex justify-content-around my-5 py-5 flex-wrap align-items-center">
          <Leaders image={human1} position={"2"} name={"Cliffin Richard"} points={"23488"} />
          <Leaders image={human2} position={"1"} name={"Aurora Smith"} points={"73408"} />
          <Leaders image={human3} position={"3"} name={"Parker White"} points={"13588"} />
        </div>
        <div className="d-flex justify-content-center pt-3">
          <Button size="lg" variant="dark">View all</Button>
        </div>
      </div>
    </>
  );
}