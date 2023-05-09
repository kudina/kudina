import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenu, mobileMenu } from "../features/generalSlice";

const DashHeader = () => {
  const dispatch = useDispatch();
  const mobile = useSelector(mobileMenu);
  return (
    <div className="flex justify-between items-center md:hidden mb-[2rem]">
      <Link to={"/"} className="text-black font-HellixSemiBold text-[20px]">
        Kudina<span className="text-brand">.</span>
      </Link>
      <img
        src="/assets/images/menuBar.png"
        alt=""
        className="cursor-pointer "
        onClick={() => {
          dispatch(setMobileMenu());
        }}
      />
    </div>
  );
};

export default DashHeader;