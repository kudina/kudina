import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ child }) => {
  return (
    <div className="bg-white flex w-full h-screen ">
      <div className="w-[15rem] border-r-[0.2px] bg-white border-r-lightGrey">
        <div className="ml-[20px] mt-[30px]">
          <Link to={"/"} className="text-black font-HellixSemiBold text-[20px]">
            Kudina<span className="text-brand">.</span>
          </Link>
        </div>

        <ul className="w-full flex flex-col mt-[25px]">
          <Link
            to={"/"}
            className="text-black font-HellixRegular font[500] text-[12px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px]"
          >
            Dashboard
          </Link>

          <Link
            to={"/"}
            className="text-black font-HellixRegular font[500] text-[12px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px]"
          >
            View User Profile
          </Link>

          <Link
            to={"/"}
            className="text-black font-HellixRegular font[500] text-[12px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px]"
          >
            Register New Customer
          </Link>
          <Link
            to={"/"}
            className="text-black font-HellixRegular font[500] text-[12px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px]"
          >
            Add Staff
          </Link>
          <Link
            to={"/"}
            className="flex items-center text-black font-HellixRegular font[500] text-[12px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px] "
          >
            Pending
            <img
              src="/assets/images/dot.png"
              alt=""
              className="ml-[2px] h-[5px] w-[5px]"
            />
          </Link>
        </ul>
      </div>
      <div className="grow bg-white">{child}</div>
    </div>
  );
};

export default Layout;
