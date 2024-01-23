import React, { useReducer } from "react";
import Data from '../../JSON/homePage.json'
function reducer(state, action) {
  if (action.type == "email") {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(action.email)) {
      return {
        ...state,
        emailCheck: true,
      };
    } else {
      return {
        ...state,
        emailCheck: false,
      };
    }
  } else if (action.type === "password") {
    if (action.password.length > 9) {
      return {
        ...state,
        passwordCheck: true,
      };
    } else {
      return {
        ...state,
        passwordCheck: false,
      };
    }
  }
}
const Login = () => {
  const [state, dispatch] = useReducer(reducer, {
    emailCheck: false,
    passwordCheck: false,
  });

  const clickHandle = (e) => {
    e.preventDefault();
    console.log(Data)
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className=" flex flex-col border m-auto py-3 px-6 w-1/3 rounded-lg border-black hover:shadow-2xl">
          <div className="flex w-full justify-center items-center pb-4">
            <h1 className="  text-3xl">Login</h1>
          </div>
          <form>
            <div className="flex flex-col space-y-4 mt-4  w-full">
              <div className="border rounded-3xl border-black overflow-hidden h-10 hover:border-blue-500 hover:drop-shadow-xl">
                <input
                  placeholder="Email"
                  type="email"
                  className="pl-4 h-full w-full outline-none hover:bg-slate-100"
                  onChange={(e) => {
                    dispatch({ type: "email", email: e.target.value });
                  }}
                ></input>
              </div>
              <div className="border rounded-3xl border-black overflow-hidden h-10 hover:border-blue-500 hover:drop-shadow-xl">
                <input
                  placeholder="Password"
                  className="pl-4 h-full w-full outline-none hover:bg-slate-100"
                  onChange={(e) => {
                    dispatch({ type: "password", password: e.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="flex justify-center items-center w-full pt-3">
              <button
                className={`${
                  state.emailCheck && state.passwordCheck
                    ? ""
                    : " cursor-not-allowed "
                }  border py-2 px-4 rounded-3xl bg-blue-500 hover:bg-blue-600 justify-center items-center w-2/3`}
                onClick={clickHandle}
              >
                Login
              </button>
            </div>
          </form>
          <div>
            <h1>
              Don't have account?<a href="/login">Sign Up</a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
