import React from "react";
import datas from "../../JSON/homePage.json";
import ProductCard from "../../utils/ProductCard";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
       

<Carousel axis='horizontal' autoPlay={true} infiniteLoop={true}>
<div>
  <img src={"https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/02/happy-birthday-madhubala-there-was-never-will-be-someone-as-beautiful-graceful-as-you-check-out-001.jpg"}>
  </img>
</div>
<div>
  <img src={"https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/02/happy-birthday-madhubala-there-was-never-will-be-someone-as-beautiful-graceful-as-you-check-out-001.jpg"}>
  </img>
</div>
<div>
  <img src={"https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/02/happy-birthday-madhubala-there-was-never-will-be-someone-as-beautiful-graceful-as-you-check-out-001.jpg"}>
  </img>
</div>

</Carousel>
       
       
        <div className=" flex flex-col flex-wrap w-full mt-5 justify-between items-center ">
          <div className="flex flex-row flex-wrap space-x-1 w-11/12 justify-between items-center">
            {datas?.data.products.map((val) => (
              <ProductCard product_details={val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
