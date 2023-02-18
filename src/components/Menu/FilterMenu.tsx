import { AllerginesArr } from "../../data/allergines";

type Props = {
  availableNow: boolean;
  availableTomorrow: boolean;
  availableByOrder: boolean;
  filterByPrice: number;
  byAllergens: string[];
  byRating: number;
  setAvailableNow: (availableNow: boolean) => void;
  setAvailableTomorrow: (availableTomorrow: boolean) => void;
  setAvailableByOrder: (availableByOrder: boolean) => void;
  setFilterByPrice: (filterByPrice: number) => void;
  setByAllergens: (byAllergens: string[]) => void;
  setByRating: (byRating: number) => void;
  filterByAvailability: () => void;
};

export default function FilterMenu({
  availableNow,
  availableTomorrow,
  availableByOrder,
  filterByPrice,
  byAllergens,
  byRating,
  setAvailableNow,
  setAvailableTomorrow,
  setAvailableByOrder,
  filterByAvailability,
}: Props) {
  console.log(availableNow);

  return (
    <div className="container bg-card">
      <div className="row">
        <div className="col-md-12 my-3">
          <div className="btn-select ">
            <img src="../images/Location-pin.png" alt="" className=" py-2" />
            <select className="text-muted text-center border-light w-75">
              <option value="chooseLocation" selected className="d-none  ">
                Одбери локација
              </option>
              <option value="location1" className=" text-dark">
                Скопје
              </option>
            </select>
          </div>
          <div className="filter-1">
            <div className=" d-flex justify-content-between">
              <label htmlFor="one" className="form-check-label">
                Достапно веднаш
              </label>
              <input
                type="radio"
                name="1"
                id="one"
                checked={availableNow}
                onClick={() => {
                  setAvailableNow(!availableNow);
                  setAvailableTomorrow(false);
                  setAvailableByOrder(false);
                  filterByAvailability();
                }}
              />
            </div>
            <div className=" d-flex justify-content-between">
              <label className="form-check-label">Достапно утре </label>
              <input type="radio" name="1" />
            </div>
            <div className=" d-flex justify-content-between">
              <label className="form-check-label"> Достапно по нарачка </label>
              <input type="radio" name="1" />
            </div>
          </div>
          <hr />
          <div className="filter-2">
            <label htmlFor="">Филтрирај по цена :</label>
            <input type="range" />
            <div className="d-flex  justify-content-between font-sm">
              <span>100 ден </span>
              <span>999 ден</span>
            </div>
          </div>
          <hr />
          <div className="filter-3">
            <p>Алергени</p>
            {AllerginesArr.map((el) => (
              <button className="btn btn-filter text-orange">{el}</button>
            ))}
          </div>
          <hr />
          <div className="filter-4">
            <p>Покажи по рејтинг:</p>
            <div className=" d-flex justify-content-between">
              <img src="../images/Group 13937.png" alt="" />
              <span className="pl-6">3+</span>
              <input type="radio" name="3" />
            </div>
            <div className=" d-flex justify-content-between">
              <img src="../images/Group 13938.png" alt="" />
              <span className="pl-5">4+</span>
              <input type="radio" name="3" />
            </div>
            <div className=" d-flex justify-content-between">
              <img src="../images/Group 13939.png" alt="" />
              <span className="pl-5">5</span>
              <input type="radio" name="3" />
            </div>
          </div>
          <hr />
          <div className="filter-5 ">
            <div className=" d-flex justify-content-between mb-1">
              <label className="form-check-label"> Достава</label>
              <img
                src="../images/Group 221.png"
                alt=""
                className="icons ml-3"
              />
              <input type="radio" name="2" />
            </div>
            <div className=" d-flex justify-content-between">
              <label className="form-check-label">Подигање </label>
              <img
                src="../images/Group 221 (1).png"
                alt=""
                className="icons "
              />
              <input type="radio" name="2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
