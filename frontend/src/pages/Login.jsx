import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[400px] h-fit bg-white flex flex-col items-center py-10 px-10 font-HellixSemiBold">
        <p className=" text-[25px]">Kudina.</p>
        <p className=" text-[14px] text-black">
          Sign in by entering the information below
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className="w-[100%] h-[40px] font-text text-[14px]  p-2 mt-4 outline-0 border-[0.2px] border-grey rounded-[3px]"
        />
        <div className="flex w-full h-[40px] items-center mt-[20px] border-[0.2px] border-grey rounded-[3px]">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-[90%] font-text text-[14px] p-2 outline-0 border-0 "
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
        <button
          onClick={handleLogin}
          className="bg-brand hover:bg-hoverBg text-white  text-[14px] p-1 mt-[40px] w-full h-[35px] rounded-[3px]"
        >
          Login
        </button>
        {/* <p className="text-white bg-brand text-[10px] mt-2">{error}</p> */}
      </div>
    </div>
  );
};

export default Login;
