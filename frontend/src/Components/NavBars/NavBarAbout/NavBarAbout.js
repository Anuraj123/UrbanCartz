import React from "react";
import { IconBxPackage } from "../../../utils/icon";
const NavBarAbout = () => {
  return (
    <>
      <div className="flex flex-row max-w-full justify-between h-12 bg-black">
        <div className="flex flex-row justify-center items-center space-x-3">
          <div>{IconBxPackage()}</div>

          <h1 className="text-white">Free Shipping for order above 299Rs</h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <h1 className="px-8 text-white">About</h1>
          <h1 className="px-8 text-white">Contact Us</h1>
          <h1 className="px-8 text-white">Help Center</h1>
        </div>
      </div>
    </>
  );
};

export default NavBarAbout;
