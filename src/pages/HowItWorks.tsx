import WhyToBecomeCookAtJadiDomashno from "../components/HowItWorks/WhyToBecomeCookAtJadiDomashno";
import CriteriaForCooks from "../components/HowItWorks/CriteriaForCooks";
import HowToBecomeCook from "../components/HowItWorks/HowToBecomeCook";
import CustomersCards from "../components/CustomersCards";
import Welcome from "../components/HowItWorks/Welcome";
import FAQ from "../components/HowItWorks/FAQ";
import { useState } from "react";
import MissionAndVision from "../components/HowItWorks/MissionAndVision";
import HowToBePartOfJadiDomashno from "../components/HowItWorks/HowToBePartOfJadiDomashno";
import MeetOurCooks from "../components/MeetOurCooks";

export default function HowItWorks() {
  const [customer, setCustomer] = useState(true);

  return (
    <>
      <div className="container text-center py-5">
        <img
          src="../images/logo-jadi-domasno 1.png"
          alt=""
          className="icons-md"
        />
        <div className="row d-flex justify-content-center text-center mt-2">
          <div className="col-md-3">
            <hr className="hr-orange" />
          </div>
          <div className="col-md-4">
            <h2 className="text-shadow">Како функционира ?</h2>
          </div>
          <div className="col-md-3">
            <hr className="hr-orange" />
          </div>
        </div>
        <label className="switch my-5">
          <input
            type="checkbox"
            onClick={() => {
              setCustomer(!customer);
            }}
          />
          <span className="slider round pt-3 p-4 text-light text-shadow d-flex justify-content-between">
            Готвачи <span> Гурмани</span>
          </span>
        </label>
        <p className="text-left ">
          Јади Домашно поврзува талентирани готвачи со локални клиенти. <br />
          Ние веруваме во обезбедувањето на шефовите во нашата заедница -
          поединци кои отсекогаш сонувале да градат сопствен бизнис со храна -
          можност да заработат значаен приход правејќи го она што го сакаат!
          Ние, исто така, веруваме дека секој човек треба да има пристап до
          здрав, домашен оброк по прифатлива цена. Градење заедница посветена на
          економско зајакнување и културна инклузивност - затоа го започнавме
          Јади Домашно.
        </p>
      </div>
      {customer && (
        <>
          <WhyToBecomeCookAtJadiDomashno />
          <CriteriaForCooks />
          <HowToBecomeCook />
          <CustomersCards title="Што рекоа нашите задоволни гурмани?" />
          <Welcome />
          <FAQ />
        </>
      )}
      {!customer && (
        <>
          <MissionAndVision />
          <HowToBePartOfJadiDomashno />
          <MeetOurCooks />
          <Welcome />
          <FAQ />
        </>
      )}
    </>
  );
}
