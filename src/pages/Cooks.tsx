import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context as cooksContext } from "../context/pageContext";
import { OurCooksSidebar } from "../components/Cooks/OurCookSidebar";
import Button from "../components/Button";

export const Cooks = () => {
  const { cooks } = useContext(cooksContext);

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-9 offset-2">
          <div className="text-center">
            <div className="row d-flex justify-content-center text-center my-5">
              <div className="col-md-3">
                <hr className="hr-orange" />
              </div>
              <div className="col-md-3">
                <h2 className="text-shadow">Нашите Готвачи</h2>
              </div>
              <div className="col-md-3">
                <hr className="hr-orange" />
              </div>
            </div>
            <p className="text-shadow">
              Јади Домашно поврзува талентирани готвачи со локални клиенти.
            </p>
            <small>
              Ние веруваме во обезбедувањето на шефовите во нашата заедница -
              поединци кои отсекогаш сонувале да градат сопствен бизнис со храна
              - можност да заработат значаен приход правејќи го она што го
              сакаат! Ние, исто така, веруваме дека секој човек треба да има
              пристап до здрав, домашен оброк по прифатлива цена. Градење
              заедница посветена на економско зајакнување и културна
              инклузивност - затоа почнавме да го <br /> градиме нашето
              семејство <br /> Јади Домашно.
            </small>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-2 ">
          <OurCooksSidebar />
        </div>
        <div className="col-md-9">
          <div className="row ">
            {cooks.map((cook) => (
              <div className="col-4 mb-4 ">
                <div className="bg-card ">
                  <img
                    className="card-img-top img-fluid"
                    src={cook.imageUrl}
                    alt=""
                  />
                  <div className="">
                    <div className="row px-3">
                      <div className="col-6 d-flex flex-wrap ">
                        <small className="card-title mb-0 ">{cook.name}</small>
                        <p className="mb-0 w-100 ">{cook.rating}</p>
                        <div className="align-self-end  w-100">
                          <p className="mb-0 py-2 ">
                            {" "}
                            <img src="../images/Vector.png" alt="" />{" "}
                            {cook.location}
                          </p>
                        </div>
                      </div>
                      <div className="col-6 pl-5">
                        <ul className="p-0 text-left text-orange mb-0 font-sm ">
                          {cook.cuisines.map((e) => (
                            <li className="text-capitalize">{e}</li>
                          ))}
                        </ul>
                        <Link to="/menu/:singleCook" className="btn f-5">
                          <u className="font-weight-bold">Види повеќе</u>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              name="Покажи повеќе"
              bgColor="btn-orange"
              color="text-white"
              mb="my-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
