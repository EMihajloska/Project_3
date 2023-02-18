import { AccordionData } from "../../data/accordion";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-center text-center my-5">
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
        <div className="col-md-4">
          <h3 className="text-shadow">Најчесто поставувани прашања</h3>
        </div>
        <div className="col-md-3">
          <hr className="hr-orange" />
        </div>
      </div>
      <div className="accordion">
        {AccordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
