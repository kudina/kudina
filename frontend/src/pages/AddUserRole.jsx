import { useState } from "react";
import { useAddUserRoleMutation } from "../features/api/apiSlice";

const AddUserRole = () => {
  const [title, setTitle] = useState(null);
  const [feedBack, setFeedBack] = useState("");
  const [showFeedBack, setShowFeedBack] = useState(false);

  const [addUserRole, { isLoading: isAddingRole }] = useAddUserRoleMutation();

  const handleAddUserRole = async (e) => {
    e.preventDefault();
    try {
      const response = await addUserRole({ title });
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
      <p className="text-[20px] font-HellixSemiBold">Add User Role</p>

      <form className="mt-[40px] mb-8" onSubmit={handleAddUserRole}>
        <input
          type="text"
          placeholder="Enter New Role"
          className="w-full h-[40px] font-HellixRegular text-[14px]  p-2  outline-0 border-[0.2px] border-grey rounded-[3px]"
          required
          onChange={(e) => {
            setTitle(e.target.value);
            setFeedBack("");
          }}
        />

        <button className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[50px]  w-full h-[35px] rounded-[3px]">
          {isAddingRole ? "Adding User Role..." : "Add User Role"}
        </button>

        {!isAddingRole && showFeedBack && (
          <p className="text-brand text-[14px] mt-2">{feedBack}</p>
        )}
      </form>
    </div>
  );
};

export default AddUserRole;
