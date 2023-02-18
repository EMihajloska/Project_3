import Banner from "../components/Banner";
import OurValues from "../components/OurValues";
import MeetOurCooks from "../components/MeetOurCooks";
import Scores from "../components/Scores";
import CustomersCards from "../components/CustomersCards";
import BecomePartOfTheFamily from "../components/BecomePartOfTheFamily";

export default function Homepage() {
  return (
    <>
      <Banner />
      <OurValues />
      <MeetOurCooks />
      <hr className="hr-orange" />
      <Scores />
      <hr className="hr-orange" />
      <CustomersCards />
      <div className="container">
        <div className="row mx-auto align-items-center text-center">
          <div className="col-md-5">
            <hr className="hr-orange" />
          </div>
          <div className="col-md-2">
            <img src="../images/домат 1.png" alt="" className="icons-md" />
          </div>
          <div className="col-md-5">
            <hr className="hr-orange" />
          </div>
        </div>
      </div>
      <BecomePartOfTheFamily />
    </>
  );
}
