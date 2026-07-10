import React from "react";
import UserCard from "./component/UserCard";

const App = () => {
  console.log("rendering...");

  let arr = [
    {
      name: "Raju",
      age: 78,
      address: "Bihar",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Varuan n",
      age: 78,
      address: "Bihardvsa",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Arun",
      age: 78,
      address: "gagds",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "dsdsn;dgs",
      age: 22,
      address: "gdsagd",
      image:
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="gap-5 h-screen p-4 flex">
      {arr.map((elem) => {
        return <UserCard user={elem} />;
      })}
    </div>
  );
};

export default App;