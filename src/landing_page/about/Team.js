import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-3 text-center">People</h1>
      </div>
      <div
        className="row p-5 mt-5  text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-5 text-center">
          <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%",width:"65%"}}></img>
          <h4 className="fs-6 mt-3">Nithin Kamath</h4>
          <p className=" fs-6 text-muted ">Founder, CEO</p>
        </div>
         <div className="col-6 p-5 text-center">
          <img src="media/images/WhatsApp Image 2025-10-28 at 19.11.40_613fe834.jpg" style={{borderRadius:"100%",width:"65%"}}></img>
          <h4 className="fs-6 mt-3">Amlan Todo</h4>
          <p className=" fs-6 text-muted ">Product Manager</p>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>Connect on <a href=""style={{textDecoration:"none"}}>Homepage / TradingQnA / Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
