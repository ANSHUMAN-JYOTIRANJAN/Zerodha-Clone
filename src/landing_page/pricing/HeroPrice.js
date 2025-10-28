import React from "react";

function HeroPrice() {
  return (
    <div className="container py-5 ">
      <div className="text-center pt-5 mb-5">
        <h1 className="fs-2 fw-semibold">Charges</h1>
        <p className="fs-5 text-muted">List of all charges and taxes</p>
      </div>


      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="text-center px-4 py-5 h-100 d-flex flex-column align-items-center">
            <img
              src="media/images/pricingEquity.svg"
              alt="pricingEquity"
              className="img-fluid mb-3"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h3 className="fw-semibold mb-3">Free equity delivery</h3>
            <p className="text-muted" style={{ lineHeight: "1.6" }}>
              All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
            </p>
          </div>
        </div>

       
        <div className="col-md-4 mb-4">
          <div className="text-center px-4 py-5 h-100 d-flex flex-column align-items-center">
            <img
              src="media/images/intradayTrades.svg"
              alt="intradayTrades"
              className="img-fluid mb-3"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h3 className="fw-semibold mb-3">Intraday and F&O trades</h3>
            <p className="text-muted" style={{ lineHeight: "1.6" }}>
              Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="text-center px-4 py-5 h-100 d-flex flex-column align-items-center">
            <img
              src="media/images/pricingEquity.svg"
              alt="Free direct MF"
              className="img-fluid mb-3"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h3 className="fw-semibold mb-3">Free direct MF</h3>
            <p className="text-muted" style={{ lineHeight: "1.6" }}>
              All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPrice;
