import { HowToBecomeGuestArr } from "../../data/howtobecomeguest";

export default function HowToBePartOfJadiDomashno() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center my-5">
        <div className="col-md-2">
          <hr className="hr-orange" />
        </div>
        <div className="col-md-6">
          <h2 className="text-shadow">Како да станете дел од Јади домашно?</h2>
        </div>
        <div className="col-md-2">
          <hr className="hr-orange" />
        </div>
      </div>
      {HowToBecomeGuestArr.map((el) => (
        <>
          <div className="row mb-5">
            <div className="col-md-8 d-flex mx-auto">
              <div className="col-lg-2 d-flex justify-content-end text-center">
                <img src={el.img} alt="" className="icons-md" />
              </div>
              <div className="col-lg-10 ">
                <b>{el.title}</b>
                <p>{el.desc}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
