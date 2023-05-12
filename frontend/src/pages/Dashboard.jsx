import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [advanceFrame, setAdvanceFrame] = useState("Daily");
  const [openAdvanceFrame, setOpenAdvanceFrame] = useState(false);
  const [recoveryFrame, setRecoveryFrame] = useState("Daily");
  const [openRecoveryFrame, setOpenRecoveryFrame] = useState(false);
  const [accumulationFrame, setAccumulationFrame] = useState("Daily");
  const [openAccumulationFrame, setOpenAccumulationFrame] = useState(false);
  const [customersFrame, setCustomersFrame] = useState("Yearly");
  const [openCustomersFrame, setOpenCustomersFrame] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const Frame = ["Daily", "Weekly", "Monthly", "Yearly"];

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("kUser")));
    if (!localStorage.getItem("kUser")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Layout
      child={
        <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
          <DashHeader />
          <div className="flex flex-col items-center md:items-start">
            <p className="font-HellixSemiBold text-[20px]">
              Good Morning, {user?.data?.firstName}
            </p>
            <p className="text-grey text-[14px]">
              Welcome back, nice to see you again!
            </p>
          </div>
          <div className="mt-[15px] flex justify-between flex-wrap gap-y-[30px]">
            {/* Advance  */}
            <div className=" w-full md:w-[32%] h-[8rem] border-[0.2px] border-lightGrey rounded-[8px] p-[14px] text-[14px] flex flex-col justify-between">
              <div className="flex justify-between items-center text-grey text-[14px] relative">
                <p>Advance</p>
                <div
                  className="w-[4rem] border-[#D9D9D9] border-0 h-[30px] rounded-[2px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
                  onClick={() => setOpenAdvanceFrame(!openAdvanceFrame)}
                >
                  <span>{advanceFrame}</span>
                  <img
                    src="/assets/images/arrowDown.png"
                    alt=""
                    className={`h-[5px] w-[8px] ${
                      openAdvanceFrame && "rotate-180"
                    }`}
                  />
                </div>
                <ul
                  className={`my-[5px] border-[1px] border-[#D9D9D9] rounded-[2px] drop-shadow  right-0 top-[1.8rem] absolute w-fit z-[1] ${
                    !openAdvanceFrame && "hidden "
                  }`}
                >
                  {Frame?.map((frame) => (
                    <li
                      key={frame}
                      className={`w-[4rem] border-y-[1px] border-y-white p-[5px]  hover:bg-brand hover:text-white text-[14px]  ${
                        advanceFrame === frame
                          ? "bg-brand text-white"
                          : "bg-white text-[#717579]"
                      }`}
                      onClick={() => {
                        setOpenAdvanceFrame(false);
                        setAdvanceFrame(frame);
                      }}
                    >
                      {frame}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[16px]">₦100,000</p>
              <p className="text-grey text-[14px]">16-02-2023</p>
            </div>

            {/* Recovery */}

            <div className=" w-full md:w-[32%] h-[8rem] border-[0.2px] border-lightGrey rounded-[8px] p-[14px] text-[14px] flex flex-col justify-between">
              <div className="flex justify-between items-center text-grey text-[14px] mb-[5px] relative">
                <p>Recovery</p>
                <div
                  className="w-[4rem] border-[#D9D9D9] border-0 h-[30px] rounded-[2px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
                  onClick={() => setOpenRecoveryFrame(!openRecoveryFrame)}
                >
                  <span>{recoveryFrame}</span>
                  <img
                    src="/assets/images/arrowDown.png"
                    alt=""
                    className={`h-[5px] w-[8px] ${
                      openRecoveryFrame && "rotate-180"
                    }`}
                  />
                </div>
                <ul
                  className={`my-[5px] border-[1px] border-[#D9D9D9] rounded-[2px] drop-shadow  right-0 top-[1.8rem] absolute w-fit z-[1] ${
                    !openRecoveryFrame && "hidden "
                  }`}
                >
                  {Frame?.map((frame) => (
                    <li
                      key={frame}
                      className={`w-[4rem] border-y-[1px] border-y-white p-[5px]  hover:bg-brand hover:text-white text-[14px]  ${
                        recoveryFrame === frame
                          ? "bg-brand text-white"
                          : "bg-white text-[#717579]"
                      }`}
                      onClick={() => {
                        setOpenRecoveryFrame(false);
                        setRecoveryFrame(frame);
                      }}
                    >
                      {frame}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[16px]">₦90,000</p>
              <p className="text-grey text-[14px]">16-02-2023</p>
            </div>

            {/* Accumulation */}

            <div className=" w-full md:w-[32%] h-[8rem] border-[0.2px] border-lightGrey rounded-[8px] p-[14px] text-[14px] flex flex-col justify-between">
              <div className="flex justify-between items-center text-grey text-[14px] relative">
                <p>Accumulation</p>
                <div
                  className="w-[4rem] border-[#D9D9D9] border-0 h-[30px] rounded-[2px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
                  onClick={() =>
                    setOpenAccumulationFrame(!openAccumulationFrame)
                  }
                >
                  <span>{accumulationFrame}</span>
                  <img
                    src="/assets/images/arrowDown.png"
                    alt=""
                    className={`h-[5px] w-[8px] ${
                      openAccumulationFrame && "rotate-180"
                    }`}
                  />
                </div>
                <ul
                  className={`my-[5px] border-[1px] border-[#D9D9D9] rounded-[2px] drop-shadow  right-0 top-[1.8rem] absolute w-fit z-[1] ${
                    !openAccumulationFrame && "hidden "
                  }`}
                >
                  {Frame?.map((frame) => (
                    <li
                      key={frame}
                      className={`w-[4rem] border-y-[1px] border-y-white p-[5px]  hover:bg-brand hover:text-white text-[14px]  ${
                        accumulationFrame === frame
                          ? "bg-brand text-white"
                          : "bg-white text-[#717579]"
                      }`}
                      onClick={() => {
                        setOpenAccumulationFrame(false);
                        setAccumulationFrame(frame);
                      }}
                    >
                      {frame}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[16px]">₦10,000</p>
              <p className="text-grey text-[14px]">16-02-2023</p>
            </div>
          </div>

          {/* New Customers */}
          <div className="w-full mt-[25px] border-lightGrey border-[0.2px] rounded-[5px] relative">
            <div className="w-full pl-[14px] py-[8px] border-b-[0.2px] border-b-lightGrey text-black text-[16px]">
              New Customers
            </div>
            <div
              className="w-[4rem] my-[30px] ml-[6px] border-[#D9D9D9] border-0 h-[30px] rounded-[2px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
              onClick={() => setOpenCustomersFrame(!openCustomersFrame)}
            >
              <span>{customersFrame}</span>
              <img
                src="/assets/images/arrowDown.png"
                alt=""
                className={`h-[5px] w-[8px] ${
                  openCustomersFrame && "rotate-180"
                }`}
              />
            </div>
            <ul
              className={`my-[5px] border-[1px] border-[#D9D9D9] rounded-[2px] drop-shadow  right-0 top-[1.8rem] left-[10px] top-[6rem] absolute w-fit z-[1] ${
                !openCustomersFrame && "hidden "
              }`}
            >
              {Frame?.map((frame) => (
                <li
                  key={frame}
                  className={`w-[4rem] border-y-[1px] border-y-white p-[5px]  hover:bg-brand hover:text-white text-[14px]  ${
                    customersFrame === frame
                      ? "bg-brand text-white"
                      : "bg-white text-[#717579]"
                  }`}
                  onClick={() => {
                    setOpenCustomersFrame(false);
                    setCustomersFrame(frame);
                  }}
                >
                  {frame}
                </li>
              ))}
            </ul>
            <div className="w-full h-fit p-[20px]">
              <img src="/assets/images/graph.svg" alt="" className=" w-full" />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Dashboard;
