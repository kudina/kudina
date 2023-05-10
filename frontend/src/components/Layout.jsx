import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { mobileMenu } from "../features/generalSlice";

const Layout = ({ child }) => {
  const mobile = useSelector(mobileMenu);
  console.log(mobile);
  return (
    <div className="bg-white flex w-full h-screen ">
      <div
        className={`w-[15rem] border-r-[0.2px] bg-white border-r-lightGrey z-[2] h-full transition-all ease-in-out duration-300 ${
          !mobile ? "translate-x-[-15rem]" : "translate-x-[0]"
        } fixed md:relative md:translate-x-[0]`}
      >
        <div className="ml-[20px] mt-[30px]">
          <Link to={"/"} className="text-black font-HellixSemiBold text-[20px]">
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
            to={"/"}
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
            to={"/"}
            className="flex items-center text-black font-HellixRegular font[500] text-[14px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] mb-[25px] "
          >
            Pending
            <img
              src="/assets/images/dot.png"
              alt=""
              className="ml-[2px] h-[5px] w-[5px]"
            />
          </Link>
          <Link
            to={"/"}
            className="text-black font-HellixRegular font[500] text-[14px] p-[5px] hover:text-white hover:bg-brand pl-[20px] rounded-[1px] mr-[10px] "
          >
            Settings
          </Link>
        </ul>
      </div>

      <div className="grow bg-white">{child}</div>
    </div>
  );
};

export default Layout;
