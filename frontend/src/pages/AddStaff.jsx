import { useState } from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import {
  useAddStaffMutation,
  useGetBranchQuery,
  useGetRoleQuery,
} from "../features/api/apiSlice";

const AddStaff = () => {
  const [userRole, setUserRole] = useState(null);
  const [openUserRole, setOpenUserRole] = useState(false);
  const [userBranch, setUserBranch] = useState(null);
  const [openUserBranch, setOpenUserBranch] = useState(false);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [guarantor, setGuarantor] = useState(null);
  const [guarantorsNumber, setGuarantorsNumber] = useState(null);
  const [guarantorsAddress, setGuarantorsAddress] = useState(null);

  const [addStaff, { isLoading: isAddingStaff }] = useAddStaffMutation();
  const { data: Branch } = useGetBranchQuery();
  const { data: Role } = useGetRoleQuery();

  const handleAddStaff = async (e) => {
    e.preventDefault();
    if ((userRole || userBranch) === null) {
      setFeedBack("Make sure you select user role and branch");
      return;
    }

    try {
      const staff = {
        firstName,
        lastName,
        phoneNumber,
        password,
        role: userRole,
        branch: userBranch,
        guarantor,
        guarantorsNumber,
        guarantorsAddress,
      };
      const response = await addStaff(staff);
      setShowFeedBack(true);
      setFeedBack(response?.data?.msg);
      setTimeout(() => setShowFeedBack(false), 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      child={
        <div className="w-full px-[40px] pt-[30px]">
          <DashHeader />

          <div className="w-full px-[5%] md:px-[25%] pt-[30px] flex flex-col items-center text-black font-HellixRegular">
            <p className="text-[20px] font-HellixSemiBold">Add Staff</p>

            <form className="mt-[40px] mb-8" onSubmit={handleAddStaff}>
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
                placeholder="Phone Number"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setFeedBack("");
                }}
              />
              {/* Password */}
              <div className="flex w-full h-[40px] items-center mb-4 border-[0.2px] border-grey rounded-[3px]">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="w-[90%] font-HellixRegular text-[14px] p-2 outline-0 border-0 "
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setFeedBack("");
                  }}
                />
                <img
                  className="h-[15px] w-[20px]"
                  src={
                    showPass
                      ? "/assets/images/eye.png"
                      : "/assets/images/eyeSlash.png"
                  }
                  alt=""
                  onClick={() => setShowPass(!showPass)}
                />
              </div>
              {/* Role */}
              <div
                className="w-full h-[40px] mb-4 border-grey  border-[0.2px] h-[30px] rounded-[2px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
                onClick={() => {
                  setOpenUserRole(!openUserRole);
                  setFeedBack("");
                }}
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
                  {Role?.data?.map((role) => (
                    <li
                      key={role?._id}
                      className={`w-full border-y-[1px] border-y-white p-[5px]  hover:bg-brand hover:text-white text-[14px] ${
                        userRole === role?.title
                          ? "bg-brand text-white"
                          : "bg-white text-[#717579]"
                      }`}
                      onClick={() => {
                        setOpenUserRole(false);
                        setUserRole(role?.title);
                      }}
                    >
                      {role?.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Branch */}

              <div
                className="w-full h-[40px] border-grey  border-[0.2px] h-[30px] mb-4 rounded-[2px] outline-0 text-[14px] p-[5px] bg-white text-[#717579] flex justify-between items-center"
                onClick={() => {
                  setOpenUserBranch(!openUserBranch);
                  setFeedBack("");
                }}
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
                  {Branch?.data?.map((branch) => (
                    <li
                      key={branch?._id}
                      className={`w-full border-y-[1px] border-y-white p-[5px]  hover:bg-brand hover:text-white text-[14px] ${
                        userBranch === branch?.title
                          ? "bg-brand text-white"
                          : "bg-white text-[#717579]"
                      }`}
                      onClick={() => {
                        setOpenUserBranch(false);
                        setUserBranch(branch?.title);
                      }}
                    >
                      {branch?.title}
                    </li>
                  ))}
                </ul>
              </div>

              <input
                type="text"
                placeholder="Guarantor"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setGuarantor(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Guarantor's Number"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setGuarantorsNumber(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Guarantor's Address"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2  outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setGuarantorsAddress(e.target.value);
                  setFeedBack("");
                }}
              />

              <button className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[50px]  w-full h-[35px] rounded-[3px]">
                {isAddingStaff ? "Adding Staff..." : "Add Staff"}
              </button>

              {!isAddingStaff && showFeedBack && (
                <p className="text-brand text-[14px] mt-2">{feedBack}</p>
              )}
            </form>
          </div>
        </div>
      }
    />
  );
};

export default AddStaff;
