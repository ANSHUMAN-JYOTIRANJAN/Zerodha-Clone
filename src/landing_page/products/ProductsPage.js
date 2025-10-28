import React from "react";

import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";
import HeroPro from "./HeroPro";
function ProductsPage() {
  return (
    <>
    <div className="mb-5">
      <HeroPro />
    </div>
      <LeftImage
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com/demo"
        learnMore="https://coin.zerodha.com"
        googlePlay=""
        appStore=""
      />
      <RightImage 
      
      productName="Console"
      productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      tryDemo=""
      learnMore="https://coin.zerodha.com"
      customLink=""
      imageURL="media/images/console.png"
      />
      <LeftImage
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        customLink={{
          href:"https://coin.zerodha.com",
          text: "Coin",
        }}
        googlePlay=""
        appStore=""
      />
      <RightImage 
      productName="Kite Connect API"
      productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        customLink={{
          href:"https://coin.zerodha.com",
          text: "Kite Connect",
        }}
        imageURL="media/images/kiteconnect.png"/>

       <LeftImage
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
       tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center  mb-5 fs-5">
        Want to know more about our technology stack? Check out the <a href=""style={{textDecoration:"none"}}>Zerodha.tech</a> blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
