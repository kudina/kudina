import { useState } from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";

const AddStaff = () => {
  const [userRole, setUserRole] = useState(null);
  const [openUserRole, setOpenUserRole] = useState(false);
  const [userBranch, setUserBranch] = useState(null);
  const [openUserBranch, setOpenUserBranch] = useState(false);

  const Role = ["Branch Manager", "Base User", "Admin", "Super Admin"];
  const Branch = ["HQ"];
  return (
    <Layout
      child={
        <div className="w-full px-[40px] pt-[30px]">
          <DashHeader />

          <div className="w-full px-[5%] md:px-[20%] pt-[30px] flex flex-col items-center text-black font-HellixRegular">
            <p className="text-[20px] font-HellixSemiBold">Add Staff</p>

            <form className="mt-[40px]">
              <input
                type="name"
                placeholder="Full Name"
                className="w-[100%] h-[40px] font-text text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-[100%] h-[40px] font-text text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
              />
              {/* Role */}
              <div
                className="w-full h-[40px] mb-4 border-grey  border-[0.2px] h-[30px] rounded-[2px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
                onClick={() => setOpenUserRole(!openUserRole)}
              >
                <span>{userRole !== null ? userRole : "User Role"}</span>{" "}
                <img
                  src="/assets/images/arrowDown.png"
                  alt=""
                  className={`h-[5px] w-[8px] ${openUserRole && "rotate-180"}`}
                />
              </div>
              <div className="relative">
                <ul
                  className={`my-[5px] border-[1px] border-[#D9D9D9] rounded-[2px] drop-shadow  absolute  z-[1] left-0 right-0 ${
                    !openUserRole && "hidden "
                  }`}
                >
                  {Role?.map((role) => (
                    <li
                      key={role}
                      className={`w-full border-y-[1px] border-y-white p-[5px]  hover:bg-brand hover:text-white text-[14px] ${
                        userRole === role
                          ? "bg-brand text-white"
                          : "bg-white text-[#717579]"
                      }`}
                      onClick={() => {
                        setOpenUserRole(false);
                        setUserRole(role);
                      }}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Branch */}

              <div
                className="w-full h-[40px] border-grey  border-[0.2px] h-[30px] rounded-[2px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
                onClick={() => setOpenUserBranch(!openUserBranch)}
              >
                <span>{userBranch !== null ? userBranch : "Branch"}</span>{" "}
                <img
                  src="/assets/images/arrowDown.png"
                  alt=""
                  className={`h-[5px] w-[8px] ${
                    openUserBranch && "rotate-180"
                  }`}
                />
              </div>
              <div className="relative">
                <ul
                  className={`my-[5px] border-[1px] border-[#D9D9D9] rounded-[2px] drop-shadow  absolute  z-[1] left-0 right-0 ${
                    !openUserBranch && "hidden "
                  }`}
                >
                  {Branch?.map((branch) => (
                    <li
                      key={branch}
                      className={`w-full border-y-[1px] border-y-white p-[5px]  hover:bg-brand hover:text-white text-[14px] ${
                        userBranch === branch
                          ? "bg-brand text-white"
                          : "bg-white text-[#717579]"
                      }`}
                      onClick={() => {
                        setOpenUserBranch(false);
                        setUserBranch(branch);
                      }}
                    >
                      {branch}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[50px] w-full h-[35px] rounded-[3px]">
                Add Staff
              </button>
            </form>
          </div>
        </div>
      }
    />
  );
};

export default AddStaff;
