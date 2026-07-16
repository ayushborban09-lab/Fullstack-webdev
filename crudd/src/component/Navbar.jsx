import React, { useState } from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-3 bg-blue-600 text-white rounded flex justify-between items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex gap-6">
        <p onClick={() => setToggle(false)}>Home</p>
        <p>About</p>
      </div>
      <button
        onClick={() => setToggle(true)}
        className="p-2 bg-green-600 cursor-pointer rounded"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;