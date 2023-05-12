import React from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import { useGetCustomersQuery } from "../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const { data: allCustomers, isLoading } = useGetCustomersQuery();
  const navigate = useNavigate();
  return (
    <Layout
      child={
        <div className="pb-[2rem]">
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
                    {customer.firstName}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  LAST NAME:{" "}
                  <span className="font-HellixSemiBold">
                    {customer.lastName}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  PHONE NUMBER:{" "}
                  <span className="font-HellixSemiBold">
                    {customer.phoneNumber}
                  </span>
                </p>
                <p className="font-HellixRegular text-[12px] text-black">
                  HOME ADDRESS:{" "}
                  <span className="font-HellixSemiBold">
                    {customer.HomeAddress}
                  </span>
                </p>

                <div className=" my-[20px] flex flex-col md:flex-row flex-wrap gap-[10px]">
                  <div className="flex flex-col md:flex-row flex-wrap gap-[10px]">
                    <button className="text-brand text-[14px] w-full md:w-[16.7rem] font-HellixSemiBold py-[5px] px-[12px] rounded-[3px] border-brand border-[0.2px] hover:bg-brand hover:text-white">
                      Create Account
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
