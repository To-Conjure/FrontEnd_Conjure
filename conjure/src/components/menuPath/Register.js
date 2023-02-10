import React, { useState } from "react";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("")
  
  // const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault()
    const userInfoPost = {
      userName,
      email,
      password,
    }
    const postReq = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfoPost)
    }

   const response = await fetch("http://localhost:8000/users",postReq)
   const userData = await response.json()
   console.log(userData)
        cleanUp()
    }

    function cleanUp(){
      setUsername("")
      setEmail("")
      setPassword("")
    }


  return (
    <>
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        value={userName} onChange={(e) => setUsername(e.target.value)}
                        type="Username"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="Username"
                        placeholder="Username" 
                        autoComplete="off"
                        required/>

                    <input 
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        autoComplete="off"
                        required/>

                    <input 
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        required />
                    <button
                        onClick={registerUser}
                        type="submit"
                        class="w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1"
                    >Create Account</button>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? ... 
                    <a class="no-underline text-center border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
  </>
  )
}
