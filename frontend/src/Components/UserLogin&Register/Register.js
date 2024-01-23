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
      <div className=" border max-w-screen-sm m-auto py-3 px-6">
        <h1>Sign Up</h1>
        <form>
          <div className="flex flex-row  space-x-9">
            <div className="border rounded-3xl border-black overflow-hidden">
              <input
                placeholder="First Name"
                className="pl-3"
                onChange={(e) => {
                  dispatch({ type: "firstName", firstName: e.target.value });
                }}
              ></input>
            </div>
            <div className="border rounded-3xl border-black overflow-hidden">
              <input
                placeholder="Last Name"
                className="pl-3"
                onChange={(e) => {
                  dispatch({ type: "lastName", lastName: e.target.value });
                }}
              ></input>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <div className="border rounded-3xl border-black overflow-hidden">
              <input
                placeholder="Email"
                type="email"
                className="pl-3"
                onChange={(e) => {
                  dispatch({ type: "email", email: e.target.value });
                }}
              ></input>
            </div>
            <div className="border rounded-3xl border-black overflow-hidden">
              <input
                placeholder="Password"
                className="pl-3"
                onChange={(e) => {
                  dispatch({ type: "password", password: e.target.value });
                }}
              ></input>
            </div>
            <div className="border rounded-3xl border-black overflow-hidden">
              <input
                placeholder="Confirm Password"
                className="pl-3"
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
          <div>
            <button
              className={`${
                state.emailCheck &&
                state.passwordCheck &&
                state.confirmPasswordCheck &&
                state.firstNameCheck &&
                state.lastNameCheck
                  ? ""
                  : " cursor-not-allowed"
              }`}
              onClick={clickHandle}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
