import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-white ">
      <Header />
      <div className="w-full flex flex-col items-center mt-[5rem]  font-HellixSemiBold text-black ">
        <div className="text-[3rem]">
          Making more <span className="text-brand ">possible</span>
          <br /> with Kudina.
        </div>
        <div className="font-HellixRegular">
          We provide financial solutions that excellently drive your progress
        </div>

        <button
          className="mt-[4rem] w-[15rem] border-[0.2px] border-brand rounded-[3px] text-white text-[14px] bg-brand hover:bg-hoverBg py-[5px] px-[15px] flex justify-between items-center"
          onClick={() => navigate("/login")}
        >
          Get Started <img src="/assets/images/arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
