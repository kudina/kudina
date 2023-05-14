import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import {
  useGetAccountsByIdMutation,
  useCreateTransactionMutation,
} from "../features/api/apiSlice";
import Moment from "react-moment";
import { useParams, useNavigate } from "react-router-dom";

const AccountsById = () => {
  const { userId } = useParams();
  const [getAccountsById, { isLoading }] = useGetAccountsByIdMutation();
  const [createTransaction, { isLoading: isRegistering }] =
    useCreateTransactionMutation();
  const [allAccounts, setAllAccounts] = useState([]);
  const [showTranForm, setShowTranForm] = useState(false);
  const [amount, setAmount] = useState(null);
  const [accountId, setAccountId] = useState(null);
  const [transactionType, setTransactionType] = useState(null);
  const [IO, setIO] = useState(null);
  const [description, setDescription] = useState(null);
  const [accountOfficer, setAccountOfficer] = useState(null);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);

  const navigate = useNavigate();

  const handleGetAccountsById = async () => {
    try {
      const response = await getAccountsById({ customerId: userId }).unwrap();
      console.log(response);
      setAllAccounts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateTransaction = async (e) => {
    e.preventDefault();
    const transaction = {
      amount,
      accountId,
      transactionType,
      IO,
      description,
      accountOfficer,
    };
    try {
      const response = await createTransaction(transaction).unwrap();
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
  useEffect(() => {
    handleGetAccountsById();
  }, []);

  return (
    <Layout
      child={
        <div className="pb-[2rem]">
          <div
            className={`absolute px-[20%] top-0 bottom-0 bg-white left-0 md:left-[15rem] right-0 opacity-98 text-center pt-[20px] ${
              !showTranForm && "hidden"
            } `}
          >
            <img
              src="/assets/images/cancel.png"
              alt=""
              className=" h-[40px] w-[40px] absolute top-[15px] right-[15px] cursor-pointer"
              onClick={() => setShowTranForm(false)}
            />
            Create Transaction
            <form className="mt-[20px] mb-8" onSubmit={handleCreateTransaction}>
              <input
                type="text"
                placeholder="Amount"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setAmount(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Transaction Type"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setTransactionType(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="IO"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setIO(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Description"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Account Officer"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setAccountOfficer(e.target.value);
                  setFeedBack("");
                }}
              />
              <button className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[50px]  w-full h-[35px] rounded-[3px]">
                Register Transaction
              </button>
              {!isRegistering && showFeedBack && (
                <p className="text-brand text-[14px] mt-2">{feedBack}</p>
              )}
            </form>
          </div>
          <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
            <DashHeader />

            <div className="text-center w-full pb-[20px] ">
              All Accounts for {userId}
            </div>
          </div>
          <hr className="h-[0.2px] text-lightGrey" />

          <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
            {!isLoading && allAccounts?.data?.length === 0 && (
              <div className="text-center font-HellixRegular">
                No account for this customer at the moment!
              </div>
            )}
            {allAccounts?.data?.map((account) => (
              <div key={account?._id}>
                <p className="font-HellixRegular text-[12px] text-black">
                  FIRST NAME:{" "}
                  <span className="font-HellixSemiBold">
                    {account?.firstName}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  LAST NAME:{" "}
                  <span className="font-HellixSemiBold">
                    {account?.lastName}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  APPROVED SUM:{" "}
                  <span className="font-HellixSemiBold">
                    {"₦" +
                      account?.ApprovedSum?.toString().replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  ACCUMULATION:{" "}
                  <span className="font-HellixSemiBold">
                    {account?.Accumulation}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  MATURITY DATE:{" "}
                  <span className="font-HellixSemiBold">
                    {account?.maturityDate}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  STATUS:{" "}
                  <span className="font-HellixSemiBold">{account?.status}</span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  CREATED DATE:{" "}
                  <span className="font-HellixSemiBold">
                    <Moment format="YYYY-MM-DD">{account?.createdDate}</Moment>
                  </span>
                </p>

                <div className=" my-[20px] flex flex-col md:flex-row flex-wrap gap-[10px]">
                  <div className="flex flex-col md:flex-row flex-wrap gap-[10px]">
                    <button
                      onClick={() => {
                        setAccountId(account?._id);
                        setShowTranForm(true);
                      }}
                      className="text-brand text-[14px] w-full md:w-[8rem] font-HellixSemiBold py-[5px] px-[12px] rounded-[3px] border-brand border-[0.2px] hover:bg-brand hover:text-white"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => navigate(`/transactions/${account?._id}`)}
                      className="text-brand text-[14px] w-full md:w-[8rem] font-HellixSemiBold py-[5px] px-[12px] rounded-[3px] border-brand border-[0.2px]  mr-[6rem] hover:bg-brand hover:text-white"
                    >
                      Show Update
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

export default AccountsById;
