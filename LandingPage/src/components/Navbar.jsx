import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex text-white justify-between items-center h-[100px]">
      <div className="text-3xl italic">Salford & Co.</div>
      <div className="flex  w-[25%] justify-between text-xl ">
        <h1 className=" cursor-pointer">Home</h1>
        <h2 className=" cursor-pointer">Gallery</h2>
        <h2 className=" cursor-pointer">Subscription</h2>
      </div>

      <div className="flex w-60 justify-center">
        <Button text={"Start Now"} color={"white"} textColor={"black"} />
      </div>
    </div>
  );
};

export default Navbar;
