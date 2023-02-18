import React, { useContext, useEffect, useState } from "react";
import BannerSingleCook from "../components/SingleCook/BannerSingleCook";
import MenuSingleCook from "../components/SingleCook/MenuSingleCook";
import { Context as cooksContext } from "../context/pageContext";
import ReactPaginate from "react-paginate";
import { TestimonialType } from "../types/types";

type Props = {
  items: TestimonialType[];
};

export default function SingleCook({ items }: Props) {
  const [itemstest, setItems] = useState<any[]>([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 3;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://fancy-savory-casquette.glitch.me/testimonials?_page=1&_limit=${limit}`
      );
      console.log(res);
      const data = await res.json();
      const total: any = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage: number) => {
    const res = await fetch(
      `https://fancy-savory-casquette.glitch.me/testimonials?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data: { selected: number }) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchComments(currentPage);
    setItems(commentsFormServer);
  };

  const { cooks } = useContext(cooksContext);

  return (
    <>
      <BannerSingleCook />
      <div className="bg-darkerOrange py-5">
        <div className="container ">
          <h6 className="text-orange">ДОСТАПНИ ЈАДЕЊА ЗА НЕДЕЛА</h6>
          <div className="row mb-4">
            {cooks.slice(0, 3).map((el) => (
              <MenuSingleCook menu={el.recipes?.[0]} />
            ))}
          </div>
          <h6 className="text-orange">
            ПРЕДЛОГ ДОДАТОЦИ КОН ЈАДЕЊАТА ЗА НЕДЕЛА
          </h6>
          <div className="row mb-4">
            {cooks.slice(3, 6).map((el) => (
              <MenuSingleCook menu={el.recipes?.[0]} />
            ))}
          </div>
          <h6 className="text-orange">ПРЕДЛОГ ДЕСЕРТИ ЗА НЕДЕЛА</h6>
          <div className="row mb-4">
            {cooks.slice(6, 9).map((el) => (
              <MenuSingleCook menu={el.recipes?.[0]} />
            ))}
          </div>
          <h6 className="text-orange">
            ПРЕПОРАКИ ЗА ЈАДЕЊАТА НА ГОТВАЧОТ ОД ПРЕТХОДНИ КОРИСНИЦИ (20)
          </h6>
          <div className="row mb-4 justify-content-center">
            {itemstest.map((item) => {
              console.log(itemstest);
              return (
                <div className="col-md-4  align-self-stretch d-flex my-2">
                  <div className="card shadow-sm ">
                    <div className="card-body text-center">
                      <p className="card-text text-shadow">{item.name}</p>
                      <i className="card-text font-sm">{item.desc}</i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item "}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
}
