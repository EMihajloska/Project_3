import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

type props = {
  title: string;
  content: string;
};

let iconStyles = { color: "#FE724D" };

const Accordion = ({ title, content }: props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <FaArrowCircleUp style={iconStyles} />
          ) : (
            <FaArrowCircleDown style={iconStyles} />
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
