import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import DashHeader from "../components/DashHeader";
import {
  useCreateCustomerMutation,
  useGetBranchQuery,
} from "../features/api/apiSlice";

const CreateCustomer = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [HomeAddress, setHomeAddress] = useState(null);
  const [BankName, setBankName] = useState(null);
  const [AccountNumber, setAccountNumber] = useState(null);
  const [AccountName, setAccountName] = useState(null);
  const [rawImage, setRawImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [natureOfJob, setNatureOfJob] = useState(null);
  const [DailyIncome, setDailyIncome] = useState(null);
  const [MonthlyIncome, setMonthlyIncome] = useState(null);
  const [HomeStatus, setHomeStatus] = useState(null);
  const [workAddress, setWorkAddress] = useState(null);
  const [value, setValue] = useState();
  const [particulars, setParticulars] = useState(null);
  const [guarantorsName, setGuarantorsName] = useState(null);
  const [guarantorsNumber, setGuarantorsNumber] = useState(null);
  const [guarantorsJob, setGuarantorsJob] = useState(null);
  const [guarantorsAddress, setGuarantorsAddress] = useState(null);
  const [accountOfficer, setAccountOfficer] = useState(null);
  const [loading, setLoading] = useState(false);

  const [userBranch, setUserBranch] = useState(null);
  const [openUserBranch, setOpenUserBranch] = useState(false);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);

  const [createCustomer] = useCreateCustomerMutation();
  const { data: Branch } = useGetBranchQuery();

  const formRef = useRef();

  // upload image to cloudinary
  const Upload = async (e) => {
    e.preventDefault();
    //upload product image
    const data = new FormData();
    data.append("file", rawImage);
    data.append("upload_preset", "mybuddy");
    data.append("cloud_name", "uhembe");
    setLoading(true);
    await fetch("https://api.cloudinary.com/v1_1/uhembe/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const url = data.secure_url;
        setProfileImage(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (profileImage !== null) {
      handleRegisterCustomer();
      setLoading(false);
      formRef.current.reset();
    }
  }, [profileImage]);

  const handleRegisterCustomer = async () => {
    if (userBranch === null) {
      setFeedBack("Make sure you select branch");
      return;
    }

    try {
      const customer = {
        firstName,
        lastName,
        phoneNumber,
        HomeAddress,
        BankName,
        AccountNumber,
        AccountName,
        profileImage,
        natureOfJob,
        DailyIncome,
        MonthlyIncome,
        HomeStatus,
        workAddress,
        value,
        particulars,
        guarantorsName,
        guarantorsNumber,
        guarantorsJob,
        guarantorsAddress,
        accountOfficer,
      };
      const response = await createCustomer(customer);
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

          <div className="w-full px-[5%] md:pl-[35%] md:pr-[15%] pt-[30px] flex flex-col items-center text-black font-HellixRegular">
            <p className="text-[20px] font-HellixSemiBold">
              Register a New Customer
            </p>

            <form className="mt-[40px] mb-8" onSubmit={Upload} ref={formRef}>
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

              <input
                type="text"
                placeholder="Home Address"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setHomeAddress(e.target.value);
                  setFeedBack("");
                }}
              />

              <input
                type="text"
                placeholder="Bank Name"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setBankName(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Account Number"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Account Name"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setAccountName(e.target.value);
                  setFeedBack("");
                }}
              />

              <label
                htmlFor="profileImage"
                className="w-full flex justify-between items-center h-[40px] font-HellixRegular text-[14px] p-2 mb-4 outline-0 border-[0.2px] text-grey border-grey rounded-[3px]"
              >
                <div>{rawImage?.name ? rawImage?.name : "Profile Image"}</div>
                <div className="bg-[#8C878C] text-white p-[5px] rounded-[3px]">
                  Select from files
                </div>
              </label>

              <input
                onChange={(e) => setRawImage(e.target.files[0])}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                name="profileImage"
                id="profileImage"
                className="hidden"
              />
              <input
                type="text"
                placeholder="Nature of Job"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setNatureOfJob(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Daily Income"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setDailyIncome(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Monthly Income"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setMonthlyIncome(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Home Status"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setHomeStatus(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Work Address"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setWorkAddress(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Value"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setValue(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Particulars"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setParticulars(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Guarantor's Name"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setGuarantorsName(e.target.value);
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
                placeholder="Guarantor's Job"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setGuarantorsJob(e.target.value);
                  setFeedBack("");
                }}
              />
              <input
                type="text"
                placeholder="Guarantor's Address"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setGuarantorsAddress(e.target.value);
                  setFeedBack("");
                }}
              />

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
                placeholder="Account Officer"
                className="w-full h-[40px] font-HellixRegular text-[14px]  p-2 mb-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
                required
                onChange={(e) => {
                  setAccountOfficer(e.target.value);
                  setFeedBack("");
                }}
              />

              <button className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[50px]  w-full h-[35px] rounded-[3px]">
                {loading ? "Registering Customer..." : "Register Customer"}
              </button>

              {!loading && showFeedBack && (
                <p className="text-brand text-[14px] mt-2">{feedBack}</p>
              )}
            </form>
          </div>
        </div>
      }
    />
  );
};

export default CreateCustomer;
