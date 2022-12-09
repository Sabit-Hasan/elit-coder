import { contestList } from "../../data/contestData";

const ContestCard = ({ img, text }) => {
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
        <div className="contest-body my-5 py-2">
          {
            contestList.map(data => <ContestCard img={data.img} text={data.text} />)
          }
        </div>
      </div>
    </>
  );
}