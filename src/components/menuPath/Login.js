

const Login = () => {
  return (
    <>
      <br></br>
      <form className ="bg-grey-lighter">
        <div className="container max-w-sm mx-auto flex-2 grid place-items-start md:place-items-center">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <input
              // value={userName} onChange={(e) => setUsername(e.target.value)}
              type="Username"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Username"
              placeholder="Username"
              autoComplete="off"
              required
            />

            <input
              // value={email} onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <input
              // value={password} onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              autoComplete="off"
              required
            />
            <button
              // onClick={registerUser}
              type="submit"
              className="w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1"
            >
              Submit
            </button>
          </div>

          <div className="text-grey-dark mt-6 text-white">
            Need an account?&nbsp;&nbsp;
            <a
              to = "/register"
              className="no-underline text-center border-b border-blue text-white"
            >
            Register Now 
            </a>
            .
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
