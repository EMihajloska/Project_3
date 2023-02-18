import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context as cooksContext } from "../../context/pageContext";
import { useParams } from "react-router-dom";
import { CookType } from "../../types/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Dates } from "../../data/dates";

export default function BannerSingleCook() {
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

  const { cooks } = useContext(cooksContext);

  const { singleCook } = useParams();
  console.log(singleCook);
  const [oneCook, setOneCook] = useState<CookType>();

  useEffect(() => {
    singleCook &&
      setOneCook(cooks.find((el) => el.id === parseInt(singleCook)));
  }, [oneCook, singleCook, cooks]);

  return (
    <>
      {oneCook && (
        <>
          <div className="banner-singlecook"></div>
          <div className="container-fluid py-5">
            <div className="row mt-3">
              <div className="col-md-3 text-right">
                <img src={oneCook?.imageUrl} alt="" className="rounded-2" />
              </div>
              <div className="col-md-6 ">
                <div className="d-flex justify-content-between">
                  <h1>{oneCook?.name}</h1>
                  <p className="btn pr-5 my-auto">
                    <img src="../images/Share.png" alt="" className="icons" />
                    <span className="pl-2 text-center">сподели</span>
                  </p>
                </div>
                <div className="d-flex align-items-center my-auto justify-content-between">
                  
                  <div className="d-flex my-auto align-items-center">
                    <h5 className="mb-0 pr-4">Традиционални оброци</h5>
                    <img src="../images/curry.png" alt="" className="icons-xs " />
                   <div className="pl-5 pr-2"> <img src="../images/House.png" alt="" className="icons " /></div>
                    <span  >{oneCook.location}</span>
                    
                  </div>

                  <div>
                    <img
                      src="../images/entypo_location-pin.png"
                      alt=""
                      className="icons"
                    />
                    <u>Види точна адреса</u>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn   mr-2 btn-yellow">
                    <img src="../images/star.png" alt="" /> 4.2
                  </button>
                  <button className="btn  mr-2 btn-yellow">
                    <img src="../images/message.png" alt="" /> 38 прегледи
                  </button>
                  <button className="btn  mr-2 btn-yellow">
                    <img src="../images/plate.png" alt="" /> 25 достави
                  </button>
                </div>
                <div>
                  <p className="text-justify my-4">
                    Израснав со традиционалната храна која секојдневно ни ја
                    приготвуваше мајка ми во семејството. Оттаму и мојата љубов
                    и желба да ја продолжам фамилијарната традиција, притоа
                    додавајќи намирници и зачини кои доловуваат уникатен вкус на
                    секој оброк кој го приготвувам...
                    <span className="text-orange">дознај повеќе</span>
                  </p>
                </div>
                <div className="text-center">
                  <h5>Одбери датум</h5>
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
              </div>
              <div className="col-md-3 ">
                <p className="text-uppercase text-shadow">имате прашања?</p>
                <div className="d-flex  align-items-center">
                  <p className="btn btn-filter">
                    <img
                      src="../images/Group 287.png"
                      alt=""
                      className="icons pr-1"
                    />
                    Прати порака на Готвачот
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
