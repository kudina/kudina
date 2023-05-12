import { useState } from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import {
  useGetCustomersQuery,
  useCreateAccountMutation,
} from "../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const { data: allCustomers, isLoading } = useGetCustomersQuery();
  const [createAccount, { isLoading: isCreatingAccount }] =
    useCreateAccountMutation();
  const [showAccForm, setShowAccForm] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [ApprovedSum, setApprovedSum] = useState(null);
  const [dailyRate, setDailyRate] = useState(null);
  const [Accumulation, setAccumulation] = useState(null);
  const [maturityDate, setMaturityDate] = useState(null);
  const [balance, setBalance] = useState(null);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const account = {
      firstName,
      lastName,
      ApprovedSum,
      dailyRate,
      Accumulation,
      customerId,
      maturityDate,
      balance,
    };
    try {
      const response = await createAccount(account).unwrap();
      setFeedBack(response?.msg);
      setShowFeedBack(true);
      setTimeout(() => {
        setShowFeedBack(false);
      }, 5000);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout
      child={
        <div className="pb-[2rem]">
          <div
            className={`absolute px-[20%] top-0 bottom-0 bg-white left-0 md:left-[15rem] right-0 opacity-98 text-center pt-[20px] ${
              !showAccForm && "hidden"
            } `}
          >
            <img
              src="/assets/images/cancel.png"
              alt=""
              className=" h-[40px] w-[40px] absolute top-[15px] right-[15px] cursor-pointer"
              onClick={() => setShowAccForm(false)}
            />
            Create Account
            <form className="mt-[20px] mb-8" onSubmit={handleCreateAccount}>
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Approved Sum"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setApprovedSum(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Daily Rate"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setDailyRate(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Accumulation"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setAccumulation(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="date"
                placeholder="Maturity Date"
                className="w-full h-[40px] font-HellixRegular text-[14px] text-grey p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setMaturityDate(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Balance"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setBalance(e.target.value);
                  setFeedBack("");
                }}
              />
              <button className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[50px]  w-full h-[35px] rounded-[3px]">
                Create Account
              </button>
              {!isCreatingAccount && showFeedBack && (
                <p className="text-brand text-[14px] mt-2">{feedBack}</p>
              )}
            </form>
          </div>
          <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
            <DashHeader />

            <div className="text-center w-full pb-[20px] ">Customer Table</div>
          </div>
          <hr className="h-[0.2px] text-lightGrey" />

          <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
            {allCustomers?.data?.map((customer) => (
              <div key={customer?._id}>
                <p className="font-HellixRegular text-[12px] text-black">
                  FIRST NAME:{" "}
                  <span className="font-HellixSemiBold">
                    {customer?.firstName}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  LAST NAME:{" "}
                  <span className="font-HellixSemiBold">
                    {customer?.lastName}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  PHONE NUMBER:{" "}
                  <span className="font-HellixSemiBold">
                    {customer?.phoneNumber}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  HOME ADDRESS:{" "}
                  <span className="font-HellixSemiBold">
                    {customer?.HomeAddress}
                  </span>
                </p>

                <div className=" my-[20px] flex flex-col md:flex-row flex-wrap gap-[10px]">
                  <div className="flex flex-col md:flex-row flex-wrap gap-[10px]">
                    <button
                      onClick={() => {
                        setShowAccForm(true);
                        setCustomerId(customer?._id);
                      }}
                      className="text-brand text-[14px] w-full md:w-[16.7rem] font-HellixSemiBold py-[5px] px-[12px] rounded-[3px] border-brand border-[0.2px] hover:bg-brand hover:text-white"
                    >
                      {isLoading ? "Creating Account" : "Create Account"}
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-brand text-[14px] w-full md:w-[16.7rem] font-HellixSemiBold py-[5px] px-[12px] rounded-[3px] bg-brand text-white "
                      onClick={() => navigate(`/customer/${customer?._id}`)}
                    >
                      View Customer Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default Customers;
