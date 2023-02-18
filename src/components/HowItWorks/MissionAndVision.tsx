import { MissonAndVisionData } from "../../data/missonandvision";

export default function MissionAndVision() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center my-5">
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
        <div className="col-md-4">
          <h2 className="text-shadow">Нашата мисија и визија</h2>
        </div>
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
      </div>
      <div className="row justify-content-center align-items-center text-center">
        {MissonAndVisionData.map((el) => (
          <div className="col-lg-4 ">
            <img src={el.img} alt="" className="img-fluid" />
            <h4 className="mt-3">{el.title}</h4>
            <p className="f-5">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
