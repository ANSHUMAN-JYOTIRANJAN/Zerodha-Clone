import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid border-top mt-5 py-5"
      style={{ backgroundColor: "#f9fafb", color: "#444" }}
    >
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "50%", marginBottom: "10px" }}
            />
            <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.6" }}>
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
           <div className="social-icons mt-4">
            <div className="icon-row">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            
            <div className="icon-row">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                <i className="fa fa-telegram" aria-hidden="true"></i>
            </div>

            <style>{`
                .social-icons {
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 14px; /* space between rows */
                }

                .icon-row {
                display: flex;
                gap: 20px; /* spacing between icons in same row */
                }

                .icon-row i {
                font-size: 22px;
                color: #6c757d;
                background-color: #f1f3f5; /* light grey background */
                padding: 10px;
                border-radius: 50%; /* makes it round */
                transition: all 0.2s ease;
                cursor: pointer;
                }

                .icon-row i:hover {
                color: #0f6aff; /* Zerodha blue */
                background-color: #e7f0ff;
                transform: scale(1.1);
                }

                @media (max-width: 576px) {
                .social-icons {
                    align-items: center;
                }
                }
            `}</style>
            </div>
          </div>

          {/* Column 1 */}
          <div className="col-md-2 mb-4">
            <p className="fw-bold mb-2">Account</p>
            {[
              "Open demat account",
              "Minor demat account",
              "NRI demat account",
              "Commodity",
              "Dematerialisation",
              "Fund transfer",
              "MTF",
              "Referral program",
            ].map((item, index) => (
              <a key={index} href="#" className="footer-link">
                {item}
              </a>
            ))}
          </div>

          {/* Column 2 */}
          <div className="col-md-2 mb-4">
            <p className="fw-bold mb-2">Support</p>
            {[
              "Contact us",
              "Support portal",
              "How to file a complaint?",
              "Status of your complaints",
              "Bulletin",
              "Circular",
              "Z-Connect blog",
              "Downloads",
            ].map((item, index) => (
              <a key={index} href="#" className="footer-link">
                {item}
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div className="col-md-2 mb-4">
            <p className="fw-bold mb-2">Company</p>
            {[
              "About",
              "Philosophy",
              "Press & media",
              "Careers",
              "Zerodha Cares (CSR)",
              "Zerodha.tech",
              "Open source",
            ].map((item, index) => (
              <a key={index} href="#" className="footer-link">
                {item}
              </a>
            ))}
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <p className="fw-bold mb-2">Quick links</p>
            {[
              "Upcoming IPOs",
              "Brokerage charges",
              "Market holidays",
              "Economic calendar",
              "Calculators",
              "Markets",
              "Sectors",
            ].map((item, index) => (
              <a key={index} href="#" className="footer-link">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-5 text-muted" style={{ fontSize: "12px", lineHeight: "1.7" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create pledge.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive information
            of your transactions directly from Exchange on your mobile/email at
            the end of the day."
          </p>
        </div>
      </div>

      {/* Inline CSS for footer links */}
      <style>{`
        .footer-link {
          display: block;
          text-decoration: none;
          color: #555;
          font-size: 14px;
          margin-bottom: 6px;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #0f6aff;
        }
      `}</style>
    </div>
  );
}

export default Footer;
