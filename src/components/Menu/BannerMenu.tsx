import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MenuTags } from "../../data/menutags";
import { Dates } from "../../data/dates";

export default function BannerMenu() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-center text-center my-5">
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
        <div className="col-md-2">
          <h2 className="text-shadow">Мени</h2>
        </div>
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
      </div>
      <div className="col-md-8 offset-2 mb-5 ">
        <Carousel responsive={responsive}>
          {Dates.map((el) => (
            <div className="text-grey bg-white mr-3 cursor border-radius-10 box-shadow">
              <div>{el.day}</div>
              <div>{el.date}</div>
              <div>{el.month}</div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="col-md-10 offset-1 ">
      <Carousel responsive={responsive}>
        {MenuTags.map((el) => (
          <div className="d-flex align-items-center ">
            <img src={el.img} alt="" className="icons mr-2 " />
            <div>{el.tag}</div>
          </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
}
