import { Link } from "react-router-dom";
import { CookType } from "../../types/types";

type Props = {
  cardContent: CookType;
  recipe: {
    id: number;
    isOrderable?: boolean | undefined;
    img: string;
    title: string;
    price: string;
    raiting: string;
    desc: string;
    prepTime: string;
    dates: string[];
  };
};

export default function FoodMenu({ cardContent, recipe }: Props) {
  return (
    <div className="col-md-4 mb-4 d-flex align-content-stretch">
      <div className="row">
        <div className="col-md-12">
          <div className="card bg-card ">
            <img
              className="card-img-top"
              src={cardContent.thumbnailImageUrl}
              alt=""
            />
            <div className="row p-2">
              <div className="col-md-3 ">
                <Link to={`/menu/${cardContent.id}`}>
                  <img
                    className="card-img-top rounded border-grey"
                    src={cardContent.imageUrl}
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-md-5 pr-0">
                <p className="card-title font-sm">{recipe.title}</p>
                <p className="m-0">
                  {cardContent.rating} <img src="../images/icon.png" alt="" />
                </p>
                <p className="m-0">
                  <img src="../images/Vector.png" alt="" />{" "}
                  {cardContent.location}
                </p>
              </div>
              <div className="col-md-4 pl-0 text-right align-self-end">
                <p>{recipe.price}</p>
                <button className="btn-shop border-0">
                  Во кошничка <img src="../images/Vecto-kolicka.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
