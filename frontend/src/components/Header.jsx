import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="">
      <div className=" w-full flex justify-between h-[15vh] px-[40px] items-center ">
        <Link to={"/"} className="text-black font-HellixSemiBold text-[25px]">
          Kudina<span className="text-brand">.</span>
        </Link>
        <div className="flex text-[14px] items-center invisible md:visible">
          <ul className="flex">
            <Link to={"/"} className="">
              Services
            </Link>
            <Link to={"/"} className="ml-[30px]">
              About Us
            </Link>
            <Link to={"/"} className="ml-[30px]">
              Contact
            </Link>
          </ul>
          <button className="ml-[30px] border-[0.2px] border-brand rounded-[3px] text-brand py-[5px] px-[15px] hover:bg-brand hover:text-white">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <img
        src="/assets/images/menuBar.png"
        alt=""
        className="md:invisible cursor-pointer absolute top-[20px] right-[30px] z-[2]"
        onClick={() => setMenu(!menu)}
      />

      <div
        className={`flex flex-col text-[12px] items-center  transition-all ease-in-out duration-300 md:invisible translate-y-[0]${
          !menu && "translate-y-[-200%] hidden"
        }`}
      >
        <ul className="flex flex-col ">
          <Link to={"/"} className="">
            Services
          </Link>
          <Link to={"/"} className="mt-[20px]">
            About Us
          </Link>
          <Link to={"/"} className="mt-[20px]">
            Contact
          </Link>
        </ul>
        <button
          className=" mt-[20px] border-[0.2px] border-brand rounded-[3px] text-brand py-[5px] px-[15px] hover:bg-brand hover:text-white"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
