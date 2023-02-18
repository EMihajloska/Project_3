import { CriteriaForCooksArr } from "../../data/criteriaforcooks";

export default function CriteriaForCooks() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center my-5">
        <div className="col-md-2">
          <hr className="hr-orange" />
        </div>
        <div className="col-md-8">
          <h2 className="text-shadow">
            Кои критериуми треба да ги исполнува еден готвач?
          </h2>
        </div>
        <div className="col-md-2">
          <hr className="hr-orange" />
        </div>
      </div>
      <div className="row ">
        {CriteriaForCooksArr.map((el) => (
          <div className="col-lg-6 d-flex p-2">
            <img src={el.img} alt="" className="image-sm" />
            <p className="p-2">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
