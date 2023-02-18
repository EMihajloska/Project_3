import Button from "../Button";

export default function Welcome() {
  return (
    <>
      <div className="container my-5">
        <div className="row mx-auto align-items-center text-center">
          <div className="col-md-5">
            <hr className="hr-orange" />
          </div>
          <div className="col-md-2">
            <img src="../images/домат 1.png" alt="" className="icons-md" />
          </div>
          <div className="col-md-5">
            <hr className="hr-orange" />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h2>Ви благодариме и добредојдовте!</h2>
        <p>
          Ви посакуваме успешна работа, многу готвење и споделување убави
          моменти со храната!
        </p>
        <Button
          name={"Регистрирај се"}
          bgColor="btn-orange"
          color="text-light"
        />
      </div>
      <div className="container my-5">
        <div className="row mx-auto align-items-center text-center">
          <div className="col-md-5">
            <hr className="hr-orange" />
          </div>
          <div className="col-md-2">
            <img src="../images/livche 1.png" alt="" className="icons-lg" />
          </div>
          <div className="col-md-5">
            <hr className="hr-orange" />
          </div>
        </div>
      </div>
    </>
  );
}
