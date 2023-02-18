import { useContext } from "react";
import { Context as cooksContext } from "../../context/pageContext";

export const OurCooksSidebar = () => {
  const { cooks } = useContext(cooksContext);

  let cooksCuisines: string[] = [];
  cooks.forEach((el) => el.cuisines.forEach((el) => cooksCuisines.push(el)));
  cooksCuisines = Array.from(new Set(cooksCuisines));
  console.log(cooksCuisines);

  return (
    <>
      <div className="container py-4 bg-card ">
        <div className="btn-select ">
          <img src="../images/Location-pin.png" alt="" className=" py-2" />
          <select className="text-muted text-center border-light">
            <option value="chooseLocation" selected className="d-none  ">
              Одбери локација
            </option>
            <option value="location1" className=" text-dark">
              Скопје
            </option>
          </select>
        </div>
        <p className="m-0">Покажи по рејтинг:</p>
        <div className=" d-flex justify-content-between">
          <div>
            <img src="../images/star.png" alt="" />
            <span className="ml-2">3+</span>
          </div>
          <input type="radio" name="3" />
        </div>
        <div className=" d-flex justify-content-between">
          <div>
            <img src="../images/star.png" alt="" />
            <span className="ml-2">4+</span>
          </div>
          <input type="radio" name="3" />
        </div>
        <div className=" d-flex justify-content-between">
          <div>
            <img src="../images/star.png" alt="" />
            <span className="ml-2">5+</span>
          </div>
          <input type="radio" name="3" />
        </div>
        <hr />
        <p className="m-0">Вид на кујна:</p>
        <div className="d-flex flex-wrap">
          {cooksCuisines.map((el) => (
            <button className=" btn-filter">{el}</button>
          ))}
        </div>
      </div>
    </>
  );
};
