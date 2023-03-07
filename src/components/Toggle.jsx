import React, { useState } from "react";

const Toggle = ({ onClick }) => {
  return (
    <>
      <label
        for="check"
        class="bg-Marine-blue relative w-12 h-6 rounded-full cursor-pointer"
      >
        <input
          type="checkbox"
          id="check"
          class="sr-only peer"
          onClick={onClick}
        />
        <span class="w-2/5 h-4/5 bg-White absolute rounded-full left-1 top-0.5 peer-checked:left-6 transition-all duration-300"></span>
      </label>
    </>
  );
};

export default Toggle;
