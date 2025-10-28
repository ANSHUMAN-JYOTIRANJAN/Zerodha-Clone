import React from "react";

function Universe() {
  return (
    <div
      className="container py-5"
      style={{ maxWidth: "1150px", backgroundColor: "#fff" }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-semibold mb-3" style={{ color: "#222" }}>
          The Zerodha Universe
        </h2>
        <p className="text-muted" style={{ fontSize: "1.05rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center align-items-start">
        {/* Column 1 */}
        <div className="col-md-4 mb-5">
          <div className="mb-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <a
              href="https://zerodhafundhouse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-muted"
              style={{ fontSize: "0.95rem", display: "block" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </a>
          </div>

          <div>
            <img
              src="media/images/streakLogo.png"
              alt="Streak"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <a
              href="https://www.streak.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-muted"
              style={{ fontSize: "0.95rem", display: "block" }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </a>
          </div>
        </div>

        {/* Column 2 - slightly lowered */}
        <div className="col-md-4 mb-5 ">
          <div className="mb-4 mt-4">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid mb-3"
              style={{ maxHeight: "100%", objectFit: "contain" }}
            />
            <a
              href="https://sensibull.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-muted"
              style={{ fontSize: "0.95rem", display: "block" }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </a>
          </div>

          <div className="mt-4">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Smallcase"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <a
              href="https://www.smallcase.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-muted"
              style={{ fontSize: "0.95rem", display: "block" }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks or ETFs.
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-md-4 mb-5">
          <div className="mb-4">
            <img
              src="media/images/tijori.svg"
              alt="Tijori"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <a
              href="https://tijorifinance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-muted"
              style={{ fontSize: "0.95rem", display: "block" }}
            >
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </a>
          </div>

          <div>
            <img
              src="media/images/dittoLogo.png"
              alt="Ditto"
              className="img-fluid mb-3"
              style={{ maxHeight: "60px", objectFit: "contain" }}
            />
            <a
              href="https://joinditto.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-muted"
              style={{ fontSize: "0.95rem", display: "block" }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </a>
          </div>
        </div>
        <div>
          <button
            className="px-5 py-3 border-0 rounded fw-semibold"
            style={{
              backgroundColor: "#387ed1",
              color: "#fff",
              fontSize: "1.1rem",
              letterSpacing: "0.3px",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
