import React, { useState } from "react";

const Form = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className="flex rounded-xl gap-4 flex-col w-[40%] bg-white p-5">
        <input
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="mobile"
        />
        <input
          className="p-2 border border-gray-500 rounded"
          type="url"
          placeholder="Image url"
        />
        <button className="p-2 rounded bg-blue-600 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Form;