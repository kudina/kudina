import { useState } from "react";
import { useAddBranchMutation } from "../features/api/apiSlice";

const AddBranch = () => {
  const [title, setTitle] = useState(null);
  const [state, setState] = useState(null);
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [country, setCountry] = useState(null);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);

  const [addBranch, { isLoading: isAddingBranch }] = useAddBranchMutation();

  const handleAddBranch = async (e) => {
    e.preventDefault();
    const branch = { title, state, location, region, country };
    try {
      const response = await addBranch(branch);
      setFeedBack(response?.data?.msg);
      setShowFeedBack(true);
      e.target.reset();
      setTimeout(() => {
        setShowFeedBack(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full px-[5%] md:pl-[35%] md:pr-[15%] pt-[30px] flex flex-col items-center text-black font-HellixRegular">
      <p className="text-[20px] font-HellixSemiBold">Add Branch</p>

      <form className="mt-[40px] mb-8" onSubmit={handleAddBranch}>
        <input
          type="text"
          placeholder="Branch Name"
          className="w-full h-[40px] font-HellixRegular text-[14px] mb-4 p-2  outline-0 border-[0.2px] border-grey rounded-[3px]"
          required
          onChange={(e) => {
            setTitle(e.target.value);
            setFeedBack("");
          }}
        />

        <input
          type="text"
          placeholder="State"
          className="w-full h-[40px] font-HellixRegular text-[14px] mb-4 p-2  outline-0 border-[0.2px] border-grey rounded-[3px]"
          required
          onChange={(e) => {
            setState(e.target.value);
            setFeedBack("");
          }}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full h-[40px] font-HellixRegular text-[14px] mb-4 p-2  outline-0 border-[0.2px] border-grey rounded-[3px]"
          required
          onChange={(e) => {
            setLocation(e.target.value);
            setFeedBack("");
          }}
        />
        <input
          type="text"
          placeholder="Region"
          className="w-full h-[40px] font-HellixRegular text-[14px] mb-4 p-2  outline-0 border-[0.2px] border-grey rounded-[3px]"
          required
          onChange={(e) => {
            setRegion(e.target.value);
            setFeedBack("");
          }}
        />
        <input
          type="text"
          placeholder="Country"
          className="w-full h-[40px] font-HellixRegular text-[14px]  p-2  outline-0 border-[0.2px] border-grey rounded-[3px]"
          required
          onChange={(e) => {
            setCountry(e.target.value);
            setFeedBack("");
          }}
        />

        <button className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[50px]  w-full h-[35px] rounded-[3px]">
          {isAddingBranch ? "Creating Branch..." : "Add Branch"}
        </button>

        {!isAddingBranch && showFeedBack && (
          <p className="text-brand text-[14px] mt-2">{feedBack}</p>
        )}
      </form>
    </div>
  );
};

export default AddBranch;
