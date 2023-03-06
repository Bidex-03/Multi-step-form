import React from "react";

import Pro from "../assets/icon-pro.svg";
import Advanced from "../assets/icon-advanced.svg";
import Arcade from "../assets/icon-arcade.svg";

const SelectPlan = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 my-8">
        <div className="p-4 border-2 border-Pastel-blue rounded-[10px] grid grid-rows-2 content-around">
          <div className="">
            <img src={Arcade} alt="Arcade" />
          </div>
          <div className="mt-4">
            <p className="text-Marine-blue font-bold">Arcade</p>
            <p className="text-Cool-gray">$9/mo</p>
          </div>
        </div>

        <div className="p-4 border-2 border-Pastel-blue rounded-[10px] grid grid-rows-2 content-around">
          <div className="">
            <img src={Advanced} alt="Advanced" />
          </div>
          <div className="mt-4">
            <p className="text-Marine-blue font-bold">Advanced</p>
            <p className="text-Cool-gray">$12/mo</p>
          </div>
        </div>

        <div className="p-4 border-2 border-Pastel-blue rounded-[10px] grid grid-rows-2 content-around">
          <div className="">
            <img src={Pro} alt="Pro" />
          </div>
          <div className="mt-4">
            <p className="text-Marine-blue font-bold">Pro</p>
            <p className="text-Cool-gray">$15/mo</p>
          </div>
        </div>
      </div>

      <div className="bg-Light-gray text-Marine-blue font-bold mb-20 flex justify-evenly p-2 rounded-[5px]">
        <div className="">Monthly</div>
        <div className="">Toggle</div>
        <div className="">Yearly</div>
      </div>
    </>
  );
};

export default SelectPlan;
