import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-grey box-shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <Link to="/" className="navbar-brand text-center">
            <img
              src="../images/logo-jadi-domasno 1.png"
              alt=""
              className="icons"
            />
            <h6 className="text-orange ">Јади домашно</h6>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto align-items-center">
              <li className="nav-item active  text-center ">
                <Link to="/howitworks" className="nav-link ">
                  <img
                    src="../images/Group 13934.png"
                    alt=""
                    className="icons"
                  />
                  <h6 className="font-sm hovereffect"> Како функционира </h6>
                </Link>
              </li>
              <li className="nav-item text-center">
                <Link to="/cooks" className="nav-link">
                  <img src="../images/mdi_cook.png" alt="" className="icons" />
                  <h6 className="font-sm hovereffect"> Готвачи </h6>
                </Link>
              </li>
              <li className="nav-item  text-center">
                <Link to="/" className="nav-link">
                  <img
                    src="../images/Group 13930.png"
                    alt=""
                    className="icons"
                  />
                  <h6 className="font-sm hovereffect"> Побарај понуда </h6>
                </Link>
              </li>
              <li className="nav-item  text-center">
                <Link to="/menu" className="nav-link">
                  <img src="../images/Group.png" alt="" className="icons" />
                  <h6 className="font-sm hovereffect">Мени </h6>{" "}
                </Link>
              </li>
              <li className="nav-item  text-center">
                <Link to="/" className="nav-link">
                  <img
                    src="../images/Vector (1).png"
                    alt=""
                    className="icons"
                  />
                  <h6 className="font-sm hovereffect">Форум</h6>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto justify-content-center">
              <li className="nav-item text-center my-auto mr-4">
                <form className="m-0 p-0">
                  <input type="search" placeholder="Search..." />
                  {/* <Search/> */}
                  <button type="submit">Search</button>
                </form>
              </li>
              <li className="nav-item  text-center mr-2">
                <Link to="/" className="nav-link ">
                  <img
                    src="../images/mdi_user-alert-outline.png"
                    alt=""
                    className="icons"
                  />
                  <h6 className="font-sm hovereffect">Мој профил </h6>
                </Link>
              </li>
              <li className="nav-item  text-center my-auto">
                <Link to="/" className="nav-link ">
                  <img src="../images/korpa.png" alt="" className="icons" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
