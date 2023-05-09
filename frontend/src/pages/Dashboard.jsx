import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout
      child={
        <div className="px-[10px] pt-[30px] text-black font-HellixSemiBold">
          <div>
            <p className="font-HellixSemiBold text-[14px]">
              Good Morning, Alexander
            </p>
            <p className="text-grey text-[10px]">
              Welcome back, nice to see you again!
            </p>
          </div>
          <div className="mt-[15px]">
            <div className=" w-[25%] border-[0.2px] border-lightGrey rounded-[8px] p-[10px] text-[12px]">
              <div className="flex justify-between text-grey text-[10px] mb-[5px]">
                <p>Advance</p>
                <div>Daily</div>
              </div>
              <p className="text-[14px] mb-[5px]">₦100,000</p>
              <p className="text-grey text-[10px]">16-02-2023</p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Dashboard;
