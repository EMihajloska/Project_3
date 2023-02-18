import Button from "./Button";

export default function Banner() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center text-center">
        <div className="col-lg-6 text-center">
          <div className="d-flex align-items-center justify-content-center ">
            <img
              src="../images/logo-jadi-domasno 1.png"
              alt=""
              className="icons-md img-fluid"
            />
            <h1 className="text-orange">Јади домашно</h1>
          </div>
          <div className="row d-flex justify-content-center my-3">
            <div className="col-md-3">
              <hr className="hr-orange" />
            </div>
            <div className="col-md-6">
              <h4 className="text-shadow">Вкусот на твоето соседство</h4>
            </div>
            <div className="col-md-3">
              <hr className="hr-orange" />
            </div>
          </div>
          <div className="side-img"></div>
          <div className="d-flex justify-content-center">
            <div className="btn-grey  btn-shape  ">
              <img
                src="../images/Location-pin.png"
                alt=""
                className="pr-3 py-2"
              />
              <select className="text-muted text-center border-light bg-transparent">
                <option value="chooseLocation" selected className="d-none px-3">
                  Внеси адреса
                </option>
                <option value="location1" className=" text-dark">
                  Скопје
                </option>
              </select>
            </div>
            <Button
              name={"Погледни резултати"}
              margin={5}
              bgColor="btn-orange"
              color="text-light"
            />
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="../images/tavce gravce.png"
            alt=""
            className="img-fluid w-75"
          />
        </div>
      </div>
    </div>
  );
}
