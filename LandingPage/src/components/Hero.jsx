import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex ">
      <div className="div flex flex-wrap w-[40%] text-white flex-col gap-7 mt-20 leading-10 ml-10">
        <h1 className="text-6xl italic ">
          Make <br />
          Something <br />
          Creative <br />
          Every Day
        </h1>
        <p>More than 100 user active every day.</p>
        <Button
          text={"Start the journey"}
          color={"purple-500"}
          textColor={"white"}
        />
      </div>
      <div className=" w-4/5 h-4/5">
        <img src="./blocks.png" alt="blocks" />
      </div>
    </div>
  );
};

export default Hero;
