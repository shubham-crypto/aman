import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  // const [email, setEmail]= useState('')
  // const [password , setPassword]=useState('')
  const navigate = useNavigate();

  const handleChange = e => {
    const { type, value } = e.target;
    setUser({
      ...user,
      [type]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      if (email && password) {
        axios.post("http://localhost:5000/register", user)
        navigate("/")
      } else {
        alert("invalid");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="back.jpg"
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/50 text-white">
            <div className="max w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={handleChange}
                  className="p-3 my-2 bg-gray-700"
                  type="email"
                  value={user.email}
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={handleChange}
                  className="p-3 my-2 bg-gray-700"
                  type="password"
                  value={user.password}
                  placeholder="Password"
                  autoComplete="Current-password"
                />
                <button className="bg-violet-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Daydreams ?
                  </span>{" "}
                  <br></br>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
