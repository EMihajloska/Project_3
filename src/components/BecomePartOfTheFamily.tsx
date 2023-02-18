import Button from "./Button";
import { Link } from "react-router-dom";

export default function BecomePartOfTheFamily() {
  return (
    <div className="container text-center py-5">
      <p className="text-shadow f-40">
        Стани дел од семејството{" "}
        <span className="text-orange"> Јади Домашно</span>{" "}
      </p>
      <div className="row">
        <div className="col-md-6 ">
          <img src="../images/Group 132.png" alt="" className="icons-lg" />
          <p className="text-center text-shadow">Сакам да нарачувам храна</p>
          <hr className="hr-orange" />
          <div className="row">
            <div className="col-md-2 d-flex flex-column ">
              <img
                src="../images/carbon_user-favorite-alt.png"
                alt=""
                className="icons mb-3"
              />
              <img src="../images/image 41.png" alt="" className="icons mb-3" />
              <img src="../images/image 42.png" alt="" className="icons mb-3" />
              <img src="../images/image 43.png" alt="" className="icons" />
            </div>
            <div className="col-md-10 text-left">
              <p>Регистрирај се на платформата како клиент!</p>
              <p>
                Одбери дали сакаш веќе подготвена храна или одбери датум на кој
                што сакаш да ти биде подготвена.
              </p>
              <p>Нарачај брзо и лесно преку нашата платформа!</p>
              <p>Подигни ја нарачката и уживај во вкусот на домашната храна.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src="../images/Group 135.png" alt="" className="icons-lg" />
          <p className="text-center text-shadow">Сакам да станам готвач</p>
          <hr className="hr-orange" />
          <div className="row">
            <div className="col-md-2 d-flex flex-column">
              <img
                src="../images/carbon_user-favorite-alt.png"
                alt=""
                className="icons mb-3"
              />
              <img src="../images/image 41.png" alt="" className="icons mb-3" />
              <img src="../images/image 42.png" alt="" className="icons mb-3" />
              <img src="../images/image 43.png" alt="" className="icons" />
            </div>
            <div className="col-md-10 text-left my-auto">
              <p>Регистрирај се на платформата како готвач!</p>
              <p>Пополни го целосно твојот профил.</p>
              <p>Примај нарачки и готви вкусни јадења!</p>
              <p>Испорачувај ги твоите нарачки и заработи.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <Link to="/howitworks">
          <Button
            name={"Стани клиент"}
            bgColor="btn-orange"
            color="text-light"
          />
        </Link>
        <Link to="/howitworks">
          <Button
            name={"Стани готвач"}
            bgColor="btn-orange"
            color="text-light"
          />
        </Link>
      </div>
    </div>
  );
}
