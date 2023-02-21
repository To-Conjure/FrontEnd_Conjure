
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";

export default function Login(props) {
  const navigate = useNavigate();
  const {setUser} = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");



  const loginUser = async (e) => {
    // console.log("submitting sign up form");
    console.log(email,password,username)
    console.log(setUser)
    const userInfoPost = {
      username,
      email,
      password,
    };
    const postReq = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfoPost),
    };

    const response = await fetch(
      "http://localhost:3010/users/register",
      postReq
    );
    const data = await response.json();

    if(data.user){
      setUser(data.user)
      navigate("/play")
    }else{
      alert(data.detail)
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      loginUser()
      cleanUp()
  }

  function cleanUp() {
    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
    <br></br>
      <form className="bg-grey-lighter">
        <div className="container max-w-sm mx-auto flex grid place-items-start md:place-items-center">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-4xl text-center">Login</h1>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="Username"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Username"
              placeholder="Username"
              autoComplete="off"
              required
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              autoComplete="off"
              required
            />
            <button
              // className= {`absolute block w-full bg-cover bg-center bg-load-img z-20 transition-all duration-500 ease-in ${submited ? 'bottom-0 h-full' : 'h-0'}  ${time && 'delay-[unset] top-0 h-0'}`}
              onClick={handleSubmit}
              type="submit"
              className="w-full text-center py-3 bg-black text-white focus:outline-none my-1"
            >
              Login
            </button>
          </div>

          <div className="text-grey-dark mt-6 text-white">
            Need an Account?&nbsp;&nbsp;
            <a className="no-underline text-center border-b border-blue text-white">
              Register
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
