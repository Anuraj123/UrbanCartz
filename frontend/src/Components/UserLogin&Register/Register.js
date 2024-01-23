import React from "react";

const Register = () => {
  return (
    <>
      <div className=" border max-w-screen-sm m-auto py-3 px-6">
        <h1>Sign Up</h1>
        <form>
          <div className="flex flex-row  space-x-9">
            <div className="border rounded-3xl border-black overflow-hidden">
              <input placeholder="First Name" className="pl-3"></input>
            </div>
            <div className="border rounded-3xl border-black overflow-hidden">
              <input placeholder="Last Name" className="pl-3"></input>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <div className="border rounded-3xl border-black overflow-hidden">
              <input placeholder="Email" className="pl-3"></input>
            </div>
            <div className="border rounded-3xl border-black overflow-hidden">
              <input placeholder="Password" className="pl-3"></input>
            </div>
            <div className="border rounded-3xl border-black overflow-hidden">
              <input placeholder="Confirm Password" className="pl-3"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
