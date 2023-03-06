import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default PersonalInfo;
