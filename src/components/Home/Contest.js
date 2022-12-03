import c from "../../assets/images/c.png";
import mysql from "../../assets/images/mysql.png";
import python from "../../assets/images/python.png";
import js from "../../assets/images/js.png";

const ContestCard = ({img, text}) => {
  return (
    <div className="contest-card">
      <img className="contest-icons" src={img} alt="" />
      <h3 className="text-center">{text}</h3>
    </div>
  );
}

export default function Contest() {
  return (
    <>
      <div className="container py-5 my-5">
        <h2 className="section-header">Explore Contest</h2>
        <div className="d-flex justify-content-around my-5 py-2">
          <ContestCard img={c} text={"C++"} />
          <ContestCard img={mysql} text={"MySQL"} />
          <ContestCard img={js} text={"Javascript"} />
          <ContestCard img={python} text={"Python"} />
        </div>
      </div>
    </>
  );
}