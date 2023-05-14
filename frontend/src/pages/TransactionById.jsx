import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import { useGetTransactionByIdMutation } from "../features/api/apiSlice";
import Moment from "react-moment";
import { useParams, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

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

            <div className="flex justify-between text-[14px]">
              <p>Update History</p>{" "}
              <img
                src="/assets/images/cancel.png"
                alt=""
                onClick={() => navigate(-1)}
              />
            </div>
            {isLoading && (
              <div className="p-[15px]">
                <Oval
                  height="50"
                  width="50"
                  radius="9"
                  color="#CD2844"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            )}
          </div>
          {transaction?.data?.map((transaction) => (
            <div>
              <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-[14px] font-HellixRegular flex justify-between">
                <p>
                  {"₦" +
                    transaction?.amount
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>{" "}
                <p className="text-grey">
                  {
                    <Moment format="YYYY-MM-DD">
                      {transaction?.createdDate}
                    </Moment>
                  }
                </p>
              </div>
              <hr className="text-lightGrey h-[0.2px] w-full my-[10px]" />
            </div>
          ))}
        </div>
      }
    />
  );
};

export default TransactionById;
