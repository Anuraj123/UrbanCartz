import React, { useState } from "react";
import { IconHeart } from "../utils/icon";
import { IoHeart } from "react-icons/io5";
import { AiTwotoneHeart } from "react-icons/ai";
const ProductCard = (props) => {
  const [status, setStatus] = useState(false);
  const heartHandle = () => {
    setStatus(!status);
  };
  return (
    <>
      <div className=" w-1/5 shadow-lg p-5 border rounded-md mb-8 ">
        <div className=" w-full h-60 relative">
          <img
            src={props.product_details.thumbnails.url}
            className="w-full h-full"
          ></img>
          <div className="absolute bottom-0 right-0" onClick={heartHandle}>
            {status ? (
              <IoHeart size="25" color="red" />
            ) : (
              <AiTwotoneHeart size="25" color="red" fill="white" />
            )}
          </div>
        </div>
        <div className=" font-bold py-1">
          <h1>{props.product_details.name}</h1>
        </div>
        <div className=" py-1">
          <h1>{props.product_details.description}</h1>
        </div>
        <div className="flex flex-row justify-between">
        <div className="font-bold py-1">
          <p1>{props.product_details.price}</p1></div>
          <div className="font-bold py-1">
            <p1>{props.product_details.rating}</p1>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductCard;
