import React from "react";

import Button from "../UI/Button";
import Card from "../components/Card";
import classes from "../css/MainPage.module.css";

const Page1 = (props) => {
  return (
    <Card className="w-[60%] flex mt-4 mx-auto">
      <div className={classes.stepsContainer}>
        <div className="flex items-center p-3.5">
          <p className={classes.stepsNumber}>1</p>
          <span className={classes.stepTexts}>
            <p className="text-red-400">STEP 1</p>
            <p>YOUR INFO</p>
          </span>
        </div>

        <div className="flex items-center p-3.5">
          <p className={classes.stepsNumber}>2</p>
          <span className={classes.stepTexts}>
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
          </span>
        </div>

        <div className="flex items-center p-3.5">
          <p className={classes.stepsNumber}>3</p>
          <span className={classes.stepTexts}>
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </span>
        </div>

        <div className="flex items-center p-3.5">
          <p className={classes.stepsNumber}>4</p>
          <span className={classes.stepTexts}>
            <p>STEP 4</p>
            <p>SUMMARY</p>
          </span>
        </div>
      </div>

      {/* Personal Info */}
      <div className="w-[63%] p-10">
        <h1 className="text-Marine-blue text-3xl font-bold">Personal info</h1>
        <p className="text-Cool-gray text-sm mb-[1rem]">
          Please provide your name, email address, and phone number.
        </p>

        <form className="flex flex-col">
          <label htmlFor="name" className="text-Marine-blue font-semibold">
            Name
          </label>
          <input
            className="mt-2 mb-4 px-4 py-2 rounded-[5px] border-2 border-Light-gray focus:outline-Marine-blue text-Marine-blue font-semibold"
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
          />

          <label htmlFor="name" className="text-Marine-blue font-semibold">
            Email Address
          </label>
          <input
            className="mt-2 mb-4 px-4 py-2 rounded-[5px] border-2 border-Light-gray focus:outline-Marine-blue text-Marine-blue font-semibold"
            id="name"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />

          <label htmlFor="name" className="text-Marine-blue font-semibold">
            Phone Number
          </label>
          <input
            className="mt-2 mb-[5rem] px-4 py-2 rounded-[5px] border-2 border-Light-gray focus:outline-Marine-blue text-Marine-blue font-semibold"
            id="name"
            type="number"
            placeholder="e.g. +1 234 567 890"
          />

          <Button>Next Step</Button>
        </form>
      </div>
    </Card>
  );
};

export default Page1;
