import { OurValuesData } from "../data/cards";
import Button from "./Button";

export default function OurValues() {
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
        <div className="col-md-4">
          <h2 className="text-shadow">Нашите вредности</h2>
        </div>
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
      </div>
      <div className="row justify-content-center align-items-center text-center">
        {OurValuesData.map((el) => (
          <div className="col-lg-4">
            <img src={el.img} alt="" />
            <h2 className="font-BS ">{el.title}</h2>
            <p className="text-shadow">{el.desc}</p>
          </div>
        ))}
        <Button
          name="Дознај повеќе за нас"
          bgColor="btn-orange"
          color="text-light"
        />
      </div>
    </div>
  );
}
