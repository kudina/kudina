import React from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import { useGetAllAccountsQuery } from "../features/api/apiSlice";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const Accounts = () => {
  const { data: allAccounts, isLoading } = useGetAllAccountsQuery();
  const navigate = useNavigate();
  return (
    <Layout
      child={
        <div className="pb-[2rem]">
          <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
            <DashHeader />

            <div className="text-center w-full pb-[20px] ">All Accounts</div>
          </div>
          <hr className="h-[0.2px] text-lightGrey" />

          <div className="px-[40px] md:pl-[17.5rem] pt-[30px] text-black font-HellixSemiBold ">
            {!isLoading && allAccounts?.data?.length === 0 && (
              <div className="text-center font-HellixRegular">
                No account at the moment!
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
                    <button className="text-brand text-[14px] w-full md:w-[8rem] font-HellixSemiBold py-[5px] px-[12px] rounded-[3px] border-brand border-[0.2px] hover:bg-brand hover:text-white">
                      Update
                    </button>
                    <button className="text-brand text-[14px] w-full md:w-[8rem] font-HellixSemiBold py-[5px] px-[12px] rounded-[3px] border-brand border-[0.2px]  mr-[6rem] hover:bg-brand hover:text-white">
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

export default Accounts;