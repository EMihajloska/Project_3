import { WhyToBecomeCook } from "../../data/reasonstobecomecook";

export default function WhyToBecomeCookAtJadiDomashno() {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center text-center my-5">
        <div className="col-md-2">
          <hr className="hr-orange" />
        </div>
        <div className="col-md-6">
          <h2 className="text-shadow">
            Зошто да станете готвач на Јади домашно?
          </h2>
        </div>
        <div className="col-md-2">
          <hr className="hr-orange" />
        </div>
      </div>
      <div className="row justify-content-center  text-center">
        {WhyToBecomeCook.map((el) => (
          <div className="col-lg-4">
            <img src={el.img} alt="" className="img-fluid"/>
            <h4 className="pt-3">{el.title}</h4>
            <p className="f-5">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
