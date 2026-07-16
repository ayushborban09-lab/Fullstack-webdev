  
const Navbar = ({ setToggle }) => {                      // ider setToggle ko call kiya hai
  return (
    <div className="p-3 flex justify-between items-center bg-red-200 rounded-lg m-3 font-bold">
      <div>
        <h1>logo</h1>
      </div>
      <div className="flex gap-5 cursor-pointer">
        <p onClick={() => setToggle(false)}>Home</p> {/* fir ider condition de hai */}
        <p>products</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={() => setToggle(true)}
      className="bg-blue-500 rounded-4xl cursor-pointer p-2 text-white">
        Create User</button>
    </div>
  );
};

export default Navbar;
