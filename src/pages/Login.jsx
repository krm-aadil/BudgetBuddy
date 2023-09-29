import React from "react";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <>
      <Navigation />
      <div className="bg-black min-h-screen flex flex-col justify-center items-center -mt-16">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w- md:w-96 space-y-4">
          <h2 className="text-2xl font-bold text-center text-black">Sign In</h2>
          <form>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    className="form-checkbox border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-700 text-center">
            Don't have an account?{" "}
            <a href="/Signup" className="text-black font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
