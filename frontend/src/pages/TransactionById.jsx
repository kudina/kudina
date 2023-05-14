import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import { useGetTransactionByIdMutation } from "../features/api/apiSlice";
import Moment from "react-moment";
import { useParams, useNavigate } from "react-router-dom";

const TransactionById = () => {
  const { accountId } = useParams();
  const [getTransactionById, { isLoading }] = useGetTransactionByIdMutation();
  const [transaction, setTransaction] = useState([]);

  const navigate = useNavigate();

  const handleGetTransactionById = async () => {
    try {
      const response = await getTransactionById({
        accountId: accountId,
      }).unwrap();
      console.log(response);
      setTransaction(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetTransactionById();
  }, []);

  return (
    <Layout
      child={
        <div className="pb-[2rem]">
          <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
            <DashHeader />

            <div className="text-center w-full pb-[20px] ">
              All Transactions for {accountId}
            </div>
          </div>
          <hr className="h-[0.2px] text-lightGrey" />

          <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
            {!isLoading && transaction?.data?.length === 0 && (
              <div className="text-center font-HellixRegular">
                No transaction for this customer at the moment!
              </div>
            )}
            {transaction?.data?.map((transaction) => (
              <div key={transaction?._id}>
                <p className="font-HellixRegular text-[12px] text-black">
                  ID:{" "}
                  <span className="font-HellixSemiBold">
                    {transaction?._id}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  AMOUNT:{" "}
                  <span className="font-HellixSemiBold">
                    {"₦" +
                      transaction?.amount
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  ACCOUNT ID:{" "}
                  <span className="font-HellixSemiBold">
                    {transaction?.accountId}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  TRANSACTION TYPE:{" "}
                  <span className="font-HellixSemiBold">
                    {transaction?.transactionType}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  DESCRIPTION:{" "}
                  <span className="font-HellixSemiBold">
                    {transaction?.description}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  ACCOUNT OFFICER:{" "}
                  <span className="font-HellixSemiBold">
                    {transaction?.accountOfficer}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  CREATED DATE:{" "}
                  <span className="font-HellixSemiBold">
                    <Moment format="YYYY-MM-DD">
                      {transaction?.createdDate}
                    </Moment>
                  </span>
                </p>
              </div>
            ))}
            <div className=" my-[20px] flex flex-col md:flex-row flex-wrap gap-[10px]">
              <div className="flex flex-col md:flex-row flex-wrap gap-[10px]">
                <button
                  onClick={() => navigate(-1)}
                  className="text-brand text-[14px] w-full md:w-[8rem] font-HellixSemiBold py-[5px] px-[12px] rounded-[3px] border-brand border-[0.2px] hover:bg-brand hover:text-white"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default TransactionById;
