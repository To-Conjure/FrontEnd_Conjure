import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";

export default function Register(props) {
  const navigate = useNavigate();
  const {setUsers} = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");



  const registerUser = async (e) => {
    console.log("submitting sign up form");
    e.preventDefault();
    const userInfoPost = {
      userName,
      email,
      password,
    };
    const postReq = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfoPost),
    };

    const response = await fetch(
      "http://localhost:3010/users/register",
      postReq
    );
    const userData = await response.json();
    // console.log(userData.user)
    setUsers(userData.users)
  }

  const handleSubmit = (e) => {
      registerUser()
      navigate("/");
      cleanUp();
  }

  function cleanUp() {
    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
    <br></br>
      <form class="bg-grey-lighter">
        <div class="container max-w-sm mx-auto flex-2 grid place-items-start md:place-items-center">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              type="Username"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="Username"
              placeholder="Username"
              autoComplete="off"
              required
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              autoComplete="off"
              required
            />
            <button
              // className= {`absolute block w-full bg-cover bg-center bg-load-img z-20 transition-all duration-500 ease-in ${submited ? 'bottom-0 h-full' : 'h-0'}  ${time && 'delay-[unset] top-0 h-0'}`}
              onClick={handleSubmit}
              type="submit"
              class="w-full text-center py-3 bg-black text-white focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>

          <div class="text-grey-dark mt-6 text-white">
            Already have an account?&nbsp;&nbsp;
            <a class="no-underline text-center border-b border-blue text-white">
              Login
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
