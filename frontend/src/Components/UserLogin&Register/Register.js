import React, { useReducer, useState } from "react";

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
        enteredPassword: action.password,
        passwordCheck: true,
      };
    } else {
      return {
        ...state,
        passwordCheck: false,
      };
    }
  } else if (action.type === "confirmPassword") {
    if (action.enteredPassword === action.confirmPassword) {
      return {
        ...state,
        confirmPasswordCheck: true,
      };
    } else {
      return {
        ...state,
        confirmPasswordCheck: false,
      };
    }
  } else if (action.type == "firstName") {
    if (action.firstName.length > 1) {
      return {
        ...state,
        firstNameCheck: true,
      };
    } else {
      return {
        ...state,
        firstNameCheck: false,
      };
    }
  } else if (action.type == "lastName") {
    if (action.lastName.length > 1) {
      return {
        ...state,
        lastNameCheck: true,
      };
    } else {
      return {
        ...state,
        lastNameCheck: false,
      };
    }
  }
}

const Register = () => {
  const [state, dispatch] = useReducer(reducer, {
    emailCheck: false,
    passwordCheck: false,
    confirmPasswordCheck: false,
    firstNameCheck: false,
    lastNameCheck: false,
    enteredPassword: "",
  });

  const clickHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className=" flex flex-col border m-auto py-3 px-6 w-1/3 rounded-lg border-black hover:shadow-2xl">
          <div className="flex w-full justify-center items-center pb-4">
            <h1 className="  text-3xl">Sign Up</h1>
          </div>
          <form>
            <div className="flex flex-row  w-full justify-evenly ">
              <div className="border rounded-3xl border-black overflow-hidden hover:border-blue-500 hover:drop-shadow-xl">
                <input
                  placeholder="First Name"
                  className="pl-3 h-full outline-none hover:bg-slate-100"
                  onChange={(e) => {
                    dispatch({ type: "firstName", firstName: e.target.value });
                  }}
                ></input>
              </div>
              <div className="border rounded-3xl border-black overflow-hidden h-10 hover:border-blue-500 hover:drop-shadow-xl">
                <input
                  placeholder="Last Name"
                  className="pl-3 h-full outline-none hover:bg-slate-100"
                  onChange={(e) => {
                    dispatch({ type: "lastName", lastName: e.target.value });
                  }}
                ></input>
              </div>
            </div>
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
              <div className="border rounded-3xl border-black overflow-hidden h-10 hover:border-blue-500 hover:drop-shadow-xl">
                <input
                  placeholder="Confirm Password"
                  className="pl-4 h-full w-full outline-none hover:bg-slate-100"
                  onChange={(e) => {
                    dispatch({
                      type: "confirmPassword",
                      confirmPassword: e.target.value,
                      enteredPassword: state.enteredPassword,
                    });
                  }}
                ></input>
              </div>
            </div>
            <div className="flex justify-center items-center w-full pt-3">
              <button
                className={`${
                  state.emailCheck &&
                  state.passwordCheck &&
                  state.confirmPasswordCheck &&
                  state.firstNameCheck &&
                  state.lastNameCheck
                    ? ""
                    : " cursor-not-allowed "
                }  border py-2 px-4 rounded-3xl bg-blue-500 hover:bg-blue-600 justify-center items-center w-2/3`}
                onClick={clickHandle}
              >
                Sign In
              </button>
            </div>
          </form>
          <div>
            <h1>
              Already have a account?<a href="/login">Sign In</a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
