import React from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import { useParams } from "react-router-dom";
import { useGetCustomersQuery } from "../features/api/apiSlice";
import Moment from "react-moment";

const CustomerProfile = () => {
  const { userId } = useParams();
  const { data } = useGetCustomersQuery();
  const customer = data?.data?.find((customer) => customer._id === userId);

  return (
    <Layout
      child={
        <div className="pb-[2rem]">
          <div className="w-full px-[40px] pt-[10px]">
            <DashHeader />

            <div className="w-full px-[5%] md:pl-[35%] md:pr-[15%] pt-[30px] flex flex-col items-center text-black font-HellixRegular">
              <div>
                <img
                  src={customer?.profileImage}
                  alt=""
                  className="h-[100px] w-[100%] rounded-[50%] border-brand border-[2px]"
                />
              </div>
              <p className="mt-[10px] font-HellixSemiBold">
                {customer?.AccountName}
              </p>
            </div>
          </div>
          <hr className="text-lightGrey h-[0.2px] w-full my-[10px]" />

          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            BALANCE:{" "}
            <span className="font-HellixSemiBold">
              {"₦" +
                customer?.value
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            ACCOUNT NUMBER:{" "}
            <span className="font-HellixSemiBold">
              {customer?.AccountNumber}
            </span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            BANK NAME:{" "}
            <span className="font-HellixSemiBold">{customer?.BankName}</span>
          </p>
          <hr className="text-lightGrey h-[0.2px] w-full my-[10px]" />
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            PHONE NUMBER:{" "}
            <span className="font-HellixSemiBold">{customer?.phoneNumber}</span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            HOME ADDRESS:{" "}
            <span className="font-HellixSemiBold">{customer?.HomeAddress}</span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            HOME STATUS:{" "}
            <span className="font-HellixSemiBold">{customer?.HomeStatus}</span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            WORK ADDRESS:{" "}
            <span className="font-HellixSemiBold">{customer?.workAddress}</span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            NATURE OF JOB:{" "}
            <span className="font-HellixSemiBold">{customer?.natureOfJob}</span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            DAILY INCOME:{" "}
            <span className="font-HellixSemiBold">
              {"₦" +
                customer?.DailyIncome?.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
            </span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            MONTHLY INCOME:{" "}
            <span className="font-HellixSemiBold">
              {"₦" +
                customer?.MonthlyIncome?.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
            </span>
          </p>
          <hr className="text-lightGrey h-[0.2px] w-full my-[10px]" />
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            GUARANTOR'S NAME:{" "}
            <span className="font-HellixSemiBold">
              {customer?.guarantorsName}
            </span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            GUARANTOR'S JOB:{" "}
            <span className="font-HellixSemiBold">
              {customer?.guarantorsJob}
            </span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            GUARANTOR'S NUMBER:{" "}
            <span className="font-HellixSemiBold">
              {customer?.guarantorsNumber}
            </span>
          </p>

          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            PARTICULARS:{" "}
            <span className="font-HellixSemiBold">{customer?.particulars}</span>
          </p>
          <hr className="text-lightGrey h-[0.2px] w-full my-[10px]" />
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            ACCOUNT OFFICER:{" "}
            <span className="font-HellixSemiBold">
              {customer?.accountOfficer}
            </span>
          </p>
          <p className="px-[5%] md:pl-[35%] md:pr-[15%] text-center font-HellixRegular text-[12px] text-black leading-6">
            CREATED DATE:{" "}
            <span className="font-HellixSemiBold">
              <Moment format="YYYY-MM-DD">{customer?.createdDate}</Moment>
            </span>
          </p>
        </div>
      }
    />
  );
};

export default CustomerProfile;
