import Button from "./Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context as cooksContext } from "../context/pageContext";

export default function MeetOurCooks() {
  const { cooks } = useContext(cooksContext);
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
        <div className="col-md-4">
          <h3 className="text-shadow"> Запознајте ги нашите готвачи</h3>
        </div>
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
      </div>
      <div className="row justify-content-center align-items-center text-center">
        {cooks.slice(0, 3).map((el) => (
          <div className="col-md-4 d-flex align-self-stretch my-5">
            <div className=" bg-card">
              <img className="card-img-top " src={el.imageUrl} alt="" />
              <div className="card-body d-flex py-0 ">
                <div className="col-md-6 text-left">
                  <h6 className="card-title text-shadow">{el.name}</h6>
                  {el.cuisines.map((e) => (
                    <small className="card-text text-orange">{e} </small>
                  ))}
                </div>
                <div className="col-md-6 text-right ">
                  <small>
                    {el.rating} <img src="../images/icon.png" alt="" />
                  </small>
                  <p>
                    <img src="../images/Vector.png" alt="" /> {el.location}
                  </p>
                  <Link to="/cooks" className="btn btn-transparent py-0">
                    <small> Дознај повеќе</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Link to="/cooks">
          <Button name="Кон готвачи" bgColor="btn-orange" color="text-light" />
        </Link>
      </div>
    </div>
  );
}
