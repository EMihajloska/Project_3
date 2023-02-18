import React, { useContext, useEffect, useState } from "react";
import { CookType } from "../../types/types";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { FaArrowsAltV } from "react-icons/fa";
import { TestimonialArr } from "../../data/testimonials";
import { Context as cooksContext } from "../../context/pageContext";
import { useParams } from "react-router-dom";

type Props = {
  menu: any;
};

function MyVerticallyCenteredModal(props: any) {
  const { cooks } = useContext(cooksContext);

  const { singleCook } = useParams();
  console.log(singleCook);
  const [oneCook, setOneCook] = useState<CookType>();

  useEffect(() => {
    singleCook &&
      setOneCook(cooks.find((el) => el.id === parseInt(singleCook)));
  }, [oneCook, singleCook, cooks]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="p-0">
        <img src={oneCook?.recipes[0].img} alt="" className="w-100" />
      </Modal.Header>
      <Modal.Body className="bg-beige container ">
        <div className="d-flex justify-content-between align-items-center px-5">
          <div>
            <h1>Тетовско тавче гравче</h1>
            <p>По рецептот на Баба...</p>
          </div>
          <div>
            <button className="btn-orange text-light btn-shape border-0  ">
              Прати порака
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center px-5  ">
          <img src="../images/curry.png" alt="" className="icons-md " />
          <p className=" my-auto mr-3">Традиционално </p>
          <div className="d-flex justify-content-start align-items-center border-left">
            <img src="../images/Group 16.png" alt="" className="icons ml-3" />
            <img src="../images/Group 16.png" alt="" className="icons" />
            <img src="../images/Group 18.png" alt="" className="icons" />
            <p className="my-auto ml-3">Малку љуто </p>
          </div>
        </div>
        <div className="d-flex bg-grey p-2 w-75 mx-auto border-radius">
          <div className="mr-5">
            <img src="../images/Ellipse 2 (1).png" alt="" />
          </div>
          <div>
            <p className="mb-0">
              <b>Тетка Верка </b> <br />
              Специјализирана по традиционални оброци <br />
              +389 78 55-0-13
            </p>
            <button className="btn-yellow btn-shape font-sm mr-2">
              <img src="../images/star.png" alt="" /> 4,2 (38)
            </button>
            <button className="btn-yellow btn-shape font-sm py-1">
              23 коментари
            </button>
          </div>
        </div>
        <hr className="w-80" />
        <div className="px-5 d-flex justify-content-between">
          <div>
            <p className="font-bolder f-20">Одбери датум и време на нарачка:</p>
          </div>
          <div className="">
            <div className="mb-2">
              <button className="btn-shape bg-beige border-grey">
                Понеделник, 25ти
              </button>
            </div>
            <div>
              <button className="btn-shape bg-beige border-grey">
                16.00 часот
              </button>
            </div>
          </div>
        </div>
        <hr className="w-80" />
        <div className="px-5 d-flex  justify-content-between align-items-center">
          <div>
            <p className="font-bolder f-20 mb-0">Одбери количина</p>
            <p className="p-0 font-sm text-muted">Достапни 4-ри порции </p>
          </div>
          <div>
            <button className="btn-shape bg-beige border-grey"> - 1 + </button>
          </div>
        </div>
        <div>
          <hr className="w-80" />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="f-20">
                Опис на јадењето <FaArrowsAltV />
              </Accordion.Header>
              <Accordion.Body className="px-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                ipsam dignissimos aliquid harum. At deleniti quas debitis
                asperiores nesciunt vitae veniam tenetur deserunt totam
                provident corporis, eveniet culpa fugit fugiat!
              </Accordion.Body>
            </Accordion.Item>
            <hr className="w-100" />
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Главни состојки
                <FaArrowsAltV />
              </Accordion.Header>
              <Accordion.Body className="px-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                ipsam dignissimos aliquid harum. At deleniti quas debitis
                asperiores nesciunt vitae veniam tenetur deserunt totam
                provident corporis, eveniet culpa fugit fugiat!
              </Accordion.Body>
            </Accordion.Item>
            <hr />
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Нутритивни вредности
                <FaArrowsAltV />
              </Accordion.Header>
              <Accordion.Body className="px-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                ipsam dignissimos aliquid harum. At deleniti quas debitis
                asperiores nesciunt vitae veniam tenetur deserunt totam
                provident corporis, eveniet culpa fugit fugiat!
              </Accordion.Body>
            </Accordion.Item>
            <hr />
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Можни алергиски појави <FaArrowsAltV />
              </Accordion.Header>
              <Accordion.Body className="px-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                ipsam dignissimos aliquid harum. At deleniti quas debitis
                asperiores nesciunt vitae veniam tenetur deserunt totam
                provident corporis, eveniet culpa fugit fugiat!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <hr className="w-80" />
        <div className="px-5 d-flex justify-content-between">
          <div>
            <p className="font-bolder mb-0">
              Локација за преземање на нарачка:
            </p>
            <p className="p-0 font-sm text-muted">300m одалечено од тебе</p>
          </div>
          <div>
            <img src="../images/Rectangle 396.png" alt="" />
          </div>
        </div>
        <hr className="w-80" />
        <div className="">
          <p className="font-bolder f-20 px-5">
            Што кажаа другите за ‘’Тетовското тавче гравче’’:
          </p>
          <div className="row justify-content-center">
            <div className="col-md-9">
              {TestimonialArr.slice(0, 2).map((el) => (
                <div className="d-flex">
                  <div>
                    <img src={el.img} alt="" className="pr-4" />
                  </div>
                  <div className=" align-items-center">
                    <div className=" d-flex justify-content-between">
                      <p className="mb-0">
                        <span className="text-muted pr-2"> {el.date}</span>{" "}
                        <b> {el.name} </b>
                      </p>
                      <p className="mb-0"> {el.stars}</p>
                    </div>
                    <p className="mt-0">{el.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="w-80" />
        <div className="px-5">
          <p className="font-bolder f-20">Повеќе од Тетка Верка</p>
          <div className="col-md-10 offset-1 d-flex  ">
            {cooks.slice(0, 4).map((m) => (
              <div className="mx-2 ">
                <img src={m.recipes?.[0].img} alt="" className="img-fluid" />
                <p>{m.recipes?.[0].title}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="p-0 m-0">
        <Button
          className="btn-orange w-100 m-0 py-3 text-white"
          onClick={props.onHide}
        >
          Додади во кошничка - 150 ден
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function MenuSingleCook({ menu }: Props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={menu.img} alt="" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title text-shadow">{menu.title}</h5>
            <span className="text-orange">{menu.price}</span>
          </div>
          <img src={menu.raiting} alt="" />
          <p className="card-text text-justify font-sm py-1">{menu.desc}</p>
          <div>
            <img src="../images/Clock.png" alt="" className="pr-2" />
            {menu.prepTime}
          </div>
        </div>
        <div className="text-center pb-3">
          <button className="btn-orange btn-shape text-white border-0 outline-0">
            <Button variant="" onClick={() => setModalShow(true)}>
              <p className="text-white p-0 m-0"> Додај во кошничка</p>
            </Button>
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
}
