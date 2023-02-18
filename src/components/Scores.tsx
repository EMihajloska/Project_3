import { ScoresData } from "../data/scores";

export default function Scores() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center text-center">
        {ScoresData.map((el) => (
          <div className="col-lg-4">
            <img src={el.img} alt="" />
            <p className="f-40 text-orange">{el.number}</p>
            <h4>{el.desc}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
