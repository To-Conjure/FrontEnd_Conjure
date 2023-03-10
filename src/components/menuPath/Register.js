import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/userContext";

export default function Register(props) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerUser = async (e) => {
    try {
      const response = await fetch("http://localhost:3010/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      const verify = {
        user: data.createdUser?.username,
        token: data.token,
        userId: data.createdUser?.id,
      };
      localStorage.setItem("c-token", JSON.stringify(verify));
      setUser(data.user);
      if(data.message !== "invalid"){
      alert(`You Successfully Registered`)
      navigate("/login")
      cleanUp();
      } else {
        alert("User may already exist, please login below")
        cleanUp();
      }
    } catch (err) {
      console.log(err)
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && email && password){
    registerUser();
    } else {
      alert("Please Input Valid Information")
    }
  };

  function cleanUp() {
    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="w-full h-full bg-cover bg-center bg-space bg-fixed">
        <form className="bg-grey-lighter">
          <div className="container max-w-sm mx-auto flex grid place-items-start md:place-items-center">
            <div className="bg-white md:mt-40 md:max-w-[80%] md:p-10 text-black w-full">
              <h1 className="mb-8 text-4xl text-center">REGISTER</h1>
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
                Create Account
              </button>
            </div>

            <div className="text-grey-dark mt-6 text-white">
              Already have an account? &nbsp;&nbsp;
              <a
                className="no-underline text-center border-b border-blue text-white"
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
