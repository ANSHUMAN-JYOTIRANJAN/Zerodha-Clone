import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  customLink,
}) {
  return (
    <div
      className="container py-5 mt-5"
      style={{ maxWidth: "1150px", backgroundColor: "#fff" }}
    >
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0 pe-md-5">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              maxHeight: "550px",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </div>
        <div className="col-md-6 ps-md-5">
          <h2
            className="fw-semibold mb-3"
            style={{ color: "#222", fontSize: "2rem" }}
          >
            {productName}
          </h2>
          <p
            className="text-muted mb-4"
            style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
          >
            {productDescription}
          </p>
          {(tryDemo || learnMore) && (
          <div className="mb-4">
            {tryDemo && (
            <a
              href={tryDemo}
              className="me-4"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Try demo <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
            )}
            {learnMore && (
            <a
              href={learnMore}
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Learn more <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
            )}
          </div>
          )}
          {customLink && (
            <div >
              <a href={customLink.href}
              style={{
                textDecoration:"none",
                fontWeight:"500",
                color:"#387ed1"}}>
                  {customLink.text}<i className="fa fa-long-arrow-right ms-1"></i>
              </a>
            </div>
          )}
          <div className="d-flex align-items-center flex-wrap">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="me-4"
                style={{ height: "50px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
