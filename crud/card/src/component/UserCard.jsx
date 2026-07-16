import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-50 border h-fit p-4 flex flex-col gap-4 rounded border-gray-500">
      <div className="h-50 w-40">
        <img className="h-full w-full" src={user.image} />
      </div>
      <div>
        <h1>Name - {user.name}</h1>
        <p>Age - {user.age}</p>
      </div>
      <button className="p-2 bg-red-600 text-white">Delete</button>
    </div>
  );
};

export default UserCard;