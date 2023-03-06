import React, { useState } from "react";

import Final from "../pages/Final";
import AddOns from "../pages/AddOns";
import SelectPlan from "../pages/SelectPlan";
import PersonalInfo from "../pages/PersonalInfo";
import Stepper from "../pages/Stepper";
import Card from "./Card";

const Form = (props) => {
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Personal Info",
    "Select your plan",
    "Pick add-ons",
    "Finishing Up",
  ];

  const FormSubTitles = [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
  ];

  const nextStepHandler = () => {
    setPage((curPage) => curPage + 1);
  };

  const GoBackHandler = () => {
    setPage((curPage) => curPage - 1);
  };

  const PageDisplay = (page) => {
    switch (page) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <SelectPlan />;
      case 2:
        return <AddOns />;
      case 3:
        return <Final />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <Card className="w-[60%] flex mt-4 mx-auto">
      <Stepper />
      
      <div className="flex flex-col w-[63%] p-10">
        <div className="">
          <h1 className="text-Marine-blue text-3xl font-bold">
            {FormTitles[page]}
          </h1>
          <p className="text-Cool-gray text-sm mb-[1rem]">
            {FormSubTitles[page]}
          </p>
        </div>

        <div className="">{PageDisplay(page)}</div>

        <div className="footer flex justify-between">
          <button
            className="font-bold text-Cool-gray hover:text-Marine-blue"
            disabled={page === 0}
            onClick={GoBackHandler}
          >
            Go back
          </button>
          <button
            className="bg-Marine-blue hover:bg-Purplish-blue p-2 rounded-[5px] text-White font-bold"
            disabled={page === FormTitles.length - 1}
            onClick={nextStepHandler}
          >
            Next Step
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Form;
