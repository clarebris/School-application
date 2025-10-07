import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEnvelope, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
         <div className="text-3xl font-bold text-center text-blue-600 mb-6">
          {action}
        </div>
          <div className="space-y-4">
              {action === "Sign Up" && (
            <div className="flex items-center gap-3">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter your email")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative flex items-center gap-3">
            <FaLock className="text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              minLength={6}
              className="w-full px-4 py-3 pr-10 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

       
        {action === "Login" && (
          <div className="text-sm text-gray-600 mt-4 text-center">
            forgot your password?{" "}
            <span className="text-blue-600 cursor-pointer">Click here!</span>
          </div>
        )}
      <div className="flex justify-between mt-6 gap-2">
          <button
            onClick={() => setAction("Sign Up")}
            className={`w-full px-4 py-3 rounded-md text-white ${
              action === "Sign Up"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setAction("Login")}
            className={`w-full px-4 py-3 rounded-md text-white ${
              action === "Login"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;