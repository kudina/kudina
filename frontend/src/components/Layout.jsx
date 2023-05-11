import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { mobileMenu } from "../features/generalSlice";

const Layout = ({ child }) => {
  const mobile = useSelector(mobileMenu);
  const date = new Date();
  const year = date.getFullYear();
  const [subMenu, setSubMenu] = useState(false);
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("kUser");
    navigate("/");
  };
  return (
    <div className="bg-white flex w-full h-screen">
      <div className="fixed h-full border-r-[0.2px] bg-white border-r-lightGrey z-[2]">
        <div
          className={`w-[15rem] ] h-full border-r-[0.2px] bg-white border-r-lightGrey z-[2] transition-all ease-in-out duration-300 ${
            !mobile ? "translate-x-[-15rem]" : "translate-x-[0]"
          } fixed  md:translate-x-[0] `}
        >
          <div className="ml-[20px] mt-[30px]">
            <Link
              to={"/"}
              className="text-black font-HellixSemiBold text-[20px]"
            >
              Kudina<span className="text-brand">.</span>
            </Link>
          </div>

          <ul className="w-full flex flex-col mt-[25px]">
            <Link
              to={"/dashboard"}
              className="text-black font-HellixRegular font[500] text-[14px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px]"
            >
              Dashboard
            </Link>

            <Link
              to={"/dashboard"}
              className="text-black font-HellixRegular font[500] text-[14px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px]"
            >
              View User Profile
            </Link>

            <Link
              to={"/dashboard"}
              className="text-black font-HellixRegular font[500] text-[14px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px]"
            >
              Register New Customer
            </Link>
            <Link
              to={"/add_staff"}
              className="text-black font-HellixRegular font[500] text-[14px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px]"
            >
              Add Staff
            </Link>
            <Link
              to={"/dashboard"}
              className="flex items-center text-black font-HellixRegular font[500] text-[14px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px] "
            >
              Pending
              <img
                src="/assets/images/dot.png"
                alt=""
                className="ml-[2px] h-[5px] w-[5px]"
              />
            </Link>
            <div
              className="text-black font-HellixRegular font[500] text-[14px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] flex items-center"
              onClick={() => setSubMenu(!subMenu)}
            >
              Settings{" "}
              <img
                src="/assets/images/arrowDown.png"
                alt=""
                className={`h-[5px] w-[8px] ml-[4px] ${
                  subMenu && "rotate-180"
                }`}
              />
            </div>

            <ul className={`flex flex-col ml-[30px] ${!subMenu && "hidden"}`}>
              <Link
                to={"/settings/create_user_role"}
                onClick={() => setSubMenu(false)}
                className="text-black font-HellixRegular font[500] text-[12px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px]"
              >
                Create User Role
              </Link>
              <Link
                to={"/settings/create_branch"}
                onClick={() => setSubMenu(false)}
                className="text-black font-HellixRegular font[500] text-[12px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px]"
              >
                Create Branch
              </Link>
            </ul>
          </ul>

          <div className="fixed bottom-8 ml-[20px]">
            <button
              className="text-grey font-semibold text-[12px] flex items-center"
              onClick={logOutHandler}
            >
              <img
                src="/assets/images/logout.png"
                alt=""
                className="h-[10px] w-[10px] mr-[2px]"
              />
              Logout
            </button>
            <p className="font-HellixSemiBold text-[9px] font-bold text-grey mt-2">
              © {year} Kudina All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <div className="grow bg-white">{child}</div>
    </div>
  );
};

export default Layout;
