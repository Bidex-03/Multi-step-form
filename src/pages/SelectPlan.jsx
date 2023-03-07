import React, { useState } from "react";

import Toggle from "../components/Toggle";
import Pro from "../assets/icon-pro.svg";
import Advanced from "../assets/icon-advanced.svg";
import Arcade from "../assets/icon-arcade.svg";

const SelectPlan = () => {
  const [payment, setPayment] = useState(false);

  const toggleHandler = () => {
    setPayment(!payment);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 my-8">
        <div className="p-4 border-2 border-Pastel-blue rounded-[10px] flex flex-col content-around hover:border-Marine-blue cursor-pointer">
          <div>
            <img src={Arcade} alt="Arcade" />
          </div>
          <div className="mt-4">
            <p className="text-Marine-blue font-bold">Arcade</p>
            {payment === false ? (
              <p className="text-Cool-gray">$9/mo</p>
            ) : (
              <div>
                <p className="text-Cool-gray">$90/yr</p>
                <p className="text-Marine-blue text-[12px] font-bold">
                  2 months free
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-2 border-Pastel-blue rounded-[10px] flex flex-col content-around hover:border-Marine-blue cursor-pointer">
          <div>
            <img src={Advanced} alt="Advanced" />
          </div>
          <div className="mt-4">
            <p className="text-Marine-blue font-bold">Advanced</p>
            {payment === false ? (
              <p className="text-Cool-gray">$12/mo</p>
            ) : (
              <div>
                <p className="text-Cool-gray">$120/yr</p>
                <p className="text-Marine-blue text-[12px] font-bold">
                  2 months free
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-2 border-Pastel-blue rounded-[10px] flex flex-col content-around hover:border-Marine-blue hover:bg-Light-gray cursor-pointer">
          <div>
            <img src={Pro} alt="Pro" />
          </div>
          <div className="mt-4">
            <p className="text-Marine-blue font-bold">Pro</p>
            {payment === false ? (
              <p className="text-Cool-gray">$15/mo</p>
            ) : (
              <div>
                <p className="text-Cool-gray">$150/yr</p>
                <p className="text-Marine-blue text-[12px] font-bold">
                  2 months free
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-Light-gray text-Marine-blue font-bold mb-20 flex justify-evenly p-2 rounded-[5px]">
        <div className={!payment ? "text-Marine-blue" : "text-Cool-gray"}>
          Monthly
        </div>
        <Toggle onClick={toggleHandler} />
        <div className={payment ? "text-Marine-blue" : "text-Cool-gray"}>
          Yearly
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
