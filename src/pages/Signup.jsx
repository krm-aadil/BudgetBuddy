import React, { useState } from "react";
import Navigation from "../components/Navigation";
import {auth, app} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    
        const Signup = (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              navigate("/tracker");
              //const user = userCredential.user;
              // ...
            })
            .catch((error) => {
                navigate("/signup");
            //   const errorCode = error.code;
            //   const errorMessage = error.message;
              // ..
            });


    }




  return (
    <>
      <Navigation />
      <div className=" min-h-screen flex flex-col justify-center items-center -mt-16">
        <div className="bg-black shadow-lg rounded-lg p-8 max-w-md w- md:w-96 space-y-4">
          <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
          <form onSubmit={Signup}>
            <div className="space-y-4">
              {/* <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div> */}
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                />
              </div>
              {/* <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm your password"
                  required
                  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div> */}
              <button
                className="w-full bg-white text-bla font-semibold py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                type="submit" value="Sign Up"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-700 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-black font-medium hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
