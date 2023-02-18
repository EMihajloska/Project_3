import Button from "./Button";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-darkgrey py-5">
      <div className="container text-light">
        <div className="row">
          <div className="col-md-3 text-grey">
            <div className="d-flex cursor">
              <Link to="/">
                <div className="col-md-3">
                  <img
                    src="../images/logo-jadi-domasno 1.png"
                    alt=""
                    className="icons-md"
                  />
                </div>
              </Link>
              <div className="col-md-9 ">
                <Link to="/" className="text-grey text-format">
                  <h1>
                    Јади <br /> домашно
                  </h1>
                  <p className="f-5 ">Јадете здраво. Јадете подобро.</p>
                </Link>
                <br />
                <Link to="https://www.facebook.com" target="_blank">
                  <img src="../images/et_facebook.png" alt="" />
                </Link>
                <Link to="https://www.twitter.com" target="_blank">
                  <img src="../images/twitter.png" alt="" />
                </Link>
                <Link to="https://www.linkedin.com" target="_blank">
                  <img src="../images/lingedin.png" alt="" />
                </Link>
                <Link to="https://www.youtube.com" target="_blank">
                  <img src="../images/youtube.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <ul className="ml-5 py-4 text-underline font-l cursor text-grey">
              <Link to="/" className="text-grey">
                <li className="mb-1">За нас</li>
              </Link>
              <Link to="/menu" className="text-grey">
                <li className="mb-1">Мени</li>
              </Link>
              <Link to="/howitworks" className="text-grey">
                <li className="mb-1">Стани готвач</li>
              </Link>
              <Link to="/" className="text-grey">
                <li className="mb-1">Најави се</li>
              </Link>
              <Link to="howitworks" className="text-grey">
                <li>FAQ</li>{" "}
              </Link>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="text-format font-l cursor ">
              <li className="text-grey">Правни</li>
              <li className="mb-1 text-grey">Политки за приватност</li>
              <li className="mb-1 text-grey">Услови за веб-страна</li>
              <li className="mb-1 text-grey">
                Прифатлива политика за користење
              </li>
              <li className="mb-1 text-grey">Политика за колачиња</li>
              <li>Општи услови</li>
            </ul>
          </div>
          <div className="col-md-3 text-center mx-auto">
            <p>Пратете ги новостите</p>
            <div className="d-flex flex-column ">
              <img
                src="../images/bx_mail-send.png"
                alt=""
                className="icons-md mx-auto"
              />
              <div className="mx-auto mb-3">
                <Button
                  name="Електронска пошта"
                  bgColor="btn-grey-footer"
                  color="text-muted"
                  mb="mb-3"
                />
                <Button
                  name="ПРЕТПЛАТИ СЕ"
                  bgColor="btn-orange"
                  color="text-light"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
