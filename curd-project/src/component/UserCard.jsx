import React from "react";
import Form from "./Form";
const UserCard = ({ user,onDelete}) => {
  return (
    <div>
      <div className="border p-4 rounded border-gray-400 flex flex-col gap-3"></div>
      <div className="h-40 w-45">
        <img className="h-full w-full object-cover" 
        src="https://posterspy.com/wp-content/uploads/2025/08/brand_new_day_1_optimized_7000.jpg" alt="" />
      </div>
      <div>
        <h1>name={user.name}</h1>
        <h1>email={user.email}</h1>
        <h1>age={user.age}</h1>
      </div>
      <button className="bg-blue-600 text-white rounded p-2 cursor-poinnter" 
       onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
};

export default UserCard;

