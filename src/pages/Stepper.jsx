import React from "react";

const Stepper = () => {
  return (
    <div className="bg-step-bg h-[35rem] w-[33%] m-4 rounded-[10px] p-4">
      <div className="flex items-center p-3.5">
        <p className="text-White font-bold p-4 border-2 border-White rounded-full w-6 h-6 flex justify-center items-center mr-5 cursor-pointer">
          1
        </p>
        <span>
          <p className="text-Light-gray text-sm">STEP 1</p>
          <p className="text-White text-sm font-bold">YOUR INFO</p>
        </span>
      </div>

      <div className="flex items-center p-3.5">
        <p className="text-White font-bold p-4 border-2 border-White rounded-full w-6 h-6 flex justify-center items-center mr-5 cursor-pointer">
          2
        </p>
        <span>
          <p className="text-Light-gray text-sm">STEP 2</p>
          <p className="text-White text-sm font-bold">SELECT PLAN</p>
        </span>
      </div>

      <div className="flex items-center p-3.5">
        <p className="text-White font-bold p-4 border-2 border-White rounded-full w-6 h-6 flex justify-center items-center mr-5 cursor-pointer">
          3
        </p>
        <span>
          <p className="text-Light-gray text-sm">STEP 3</p>
          <p className="text-White text-sm font-bold">ADD-ONS</p>
        </span>
      </div>

      <div className="flex items-center p-3.5">
        <p className="text-White font-bold p-4 border-2 border-White rounded-full w-6 h-6 flex justify-center items-center mr-5 cursor-pointer">
          4
        </p>
        <span>
          <p className="text-Light-gray text-sm">STEP 4</p>
          <p className="text-White text-sm font-bold">SUMMARY</p>
        </span>
      </div>
    </div>
  );
};

export default Stepper;
