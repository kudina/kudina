import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/api/apiSlice";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../features/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await login({ phoneNumber, password }).unwrap();
      localStorage.setItem("kUser", JSON.stringify(userInfo));
      dispatch(setUserInfo({ userInfo }));
      if (userInfo?.data !== undefined) {
        navigate("/dashboard");
      } else {
        setError(userInfo?.msg);
      }
    } catch (err) {
      console.log("Failed to login", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[400px] h-fit bg-white flex flex-col items-center py-10 px-10 font-HellixSemiBold">
        <p className=" text-[25px]">Kudina.</p>
        <p className=" text-[14px] text-black">
          Sign in by entering the information below
        </p>
        <form className="w-full" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-[100%] h-[40px] font-text text-[14px]  p-2 mt-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setError("");
            }}
          />
          <div className="flex w-full h-[40px] items-center mt-[20px] border-[0.2px] border-grey rounded-[3px]">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              required
              className="w-[90%] font-text text-[14px] p-2 outline-0 border-0 "
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
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

          <p className="w-full text-[14px] text-grey mt-[20px]">
            <Link to={"/login"} className="float-right">
              Forgot Password?
            </Link>
          </p>
          <button className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[40px] w-full h-[35px] rounded-[3px]">
            {isLoading ? "Checking details..." : "Login"}
          </button>

          <p className="text-brand text-[14px] mt-2">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
