import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in successfully
        showWelcomeNotification();
        navigate("/tracker");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        navigate("/login");
      });
  };

  const showWelcomeNotification = () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        const title = "Welcome to Your App";
        const options = {
          body: "You are now logged in.",
          icon: "https://media.istockphoto.com/id/1357349308/vector/money-wallet-with-green-paper-dollars-and-gold-coins-realistic-3d-design-in-cartoon-business.jpg?s=170667a&w=0&k=20&c=tDR6Lqzjuw4vbJ8BgVPmgP2oNg1stQQUVZ0WQ0GPmpo=", // Replace with your icon path
        };
        
        registration.showNotification(title, options);
      });
    }
  };

    return (
    <>
      <Navigation />
      <div className=" min-h-screen flex flex-col justify-center items-center -mt-16">
        <div className="bg-black shadow-lg rounded-lg p-8 max-w-md w- md:w-96 space-y-4">
          <h2 className="text-2xl font-bold text-center text-white">Sign In</h2>
          <form onSubmit={signIn}>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-white"
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
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  required
                >
                </input>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-white"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                > 
                </input>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    className="form-checkbox border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                  />
                  <span className="text-sm text-white">Remember me</span>
                </label>
                <a href="#" className="text-sm text-white hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                type="submit"
                value="Sign In"
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
