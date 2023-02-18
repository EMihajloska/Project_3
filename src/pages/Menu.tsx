import BannerMenu from "../components/Menu/BannerMenu";
import FilterMenu from "../components/Menu/FilterMenu";
import FoodMenu from "../components/Menu/FoodMenu";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { Context as cooksContext } from "../context/pageContext";
import { CookType } from "../types/types";

export default function Menu() {
  const { cooks } = useContext(cooksContext);

  const [filteredCooks, setFilteredCooks] = useState<CookType[]>([]);
  const [availableNow, setAvailableNow] = useState<boolean>(false);
  const [availableTomorrow, setAvailableTomorrow] = useState<boolean>(false);
  const [availableByOrder, setAvailableByOrder] = useState<boolean>(false);
  const [filterByPrice, setFilterByPrice] = useState<number>(99);
  const [byAllergens, setByAllergens] = useState<string[]>([]);
  const [byRating, setByRating] = useState<number>(2);

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 3600 * 1000 * 24)
    .toISOString()
    .split("T")[0];

  console.log(today, tomorrow);

  const filterByAvailability = () => {
    cooks.forEach((el) =>
      el.recipes.forEach((recipe) => {
        availableNow
          ? setFilteredCooks(
              filteredCooks.filter((el) =>
                el.recipes.forEach((recipe) =>
                  recipe.dates.forEach((date) => date !== today)
                )
              )
            )
          : recipe.dates.includes(today) &&
            setFilteredCooks(
              filteredCooks.includes(el)
                ? [...filteredCooks]
                : [...filteredCooks, el]
            );

        // Tuka treba samo da ja ischistish nizata pred da pochne da ja polni i dopolnitelno da gi ja dodadesh funkcijava vo onClick na vtoriot input element

        availableTomorrow
          ? setFilteredCooks(
              filteredCooks.filter((el) =>
                el.recipes.forEach((recipe) =>
                  recipe.dates.forEach((date) => date !== tomorrow)
                )
              )
            )
          : recipe.dates.includes(tomorrow) &&
            setFilteredCooks(
              filteredCooks.includes(el)
                ? [...filteredCooks]
                : [...filteredCooks, el]
            );

        // ______________________ Ovoj del ne ti e gotov, treba da filtrirash spored boolean vo db.json isOrderable?

        // availableByOrder
        //   ? setFilteredCooks(
        //       filteredCooks.filter((el) =>
        //         el.recipes.forEach((recipe) =>
        //           recipe.dates.forEach((date) => date !== today)
        //         )
        //       )
        //     )
        //   : recipe.dates.includes(today) &&
        //     setFilteredCooks(
        //       filteredCooks.includes(el)
        //         ? [...filteredCooks]
        //         : [...filteredCooks, el]
        //     );
      })
    );
  };
  console.log(filteredCooks);

  return (
    <>
      <BannerMenu />
      <hr />
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <FilterMenu
              availableNow={availableNow}
              setAvailableNow={setAvailableNow}
              availableTomorrow={availableTomorrow}
              filterByAvailability={filterByAvailability}
              setAvailableTomorrow={setAvailableTomorrow}
              availableByOrder={availableByOrder}
              setAvailableByOrder={setAvailableByOrder}
              filterByPrice={filterByPrice}
              setFilterByPrice={setFilterByPrice}
              byAllergens={byAllergens}
              setByAllergens={setByAllergens}
              byRating={byRating}
              setByRating={setByRating}
            />
          </div>
          <div className="col-md-9">
            <div className="row ">
              {filteredCooks.length === 0
                ? cooks
                    .slice(0, 20)
                    .map((cook) =>
                      cook.recipes.map((recipe) => (
                        <FoodMenu
                          key={recipe.id}
                          cardContent={cook}
                          recipe={recipe}
                        />
                      ))
                    )
                : filteredCooks
                    .slice(0, 20)
                    .map((cook) =>
                      cook.recipes.map((recipe) => (
                        <FoodMenu
                          key={recipe.id}
                          cardContent={cook}
                          recipe={recipe}
                        />
                      ))
                    )}
            </div>
            <div className="text-center my-5">
              <Button
                name={"Прикажи повеќе"}
                bgColor="btn-orange"
                color="text-light"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
