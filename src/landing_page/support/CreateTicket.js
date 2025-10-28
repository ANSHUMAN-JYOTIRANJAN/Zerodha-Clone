import React, { useState } from "react";
const AccordionContent = ({ title }) => {
  const contentMap = {
    "Account Opening": [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    "Your Zerodha Account": [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],

    Kite: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
    Funds: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    Console: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
    Coin: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  };

  const links = contentMap[title] || [];

  if (links.length === 0) {
    return (
      <p className="text-muted">
        No specific links available for this section.
      </p>
    );
  }

  return (
    <ul className="list-unstyled" style={{ paddingLeft: "10px" }}>
      {links.map((text, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>
          <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
            <span style={{ marginRight: "8px", color: "#007bff" }}>•</span>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
const AccordionItem = ({ title, icon: IconClassName, isOpen, onClick }) => (
  <div
    className="card"
    style={{
      marginBottom: "10px",
      border: "1px solid #e0e0e0",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    <div
      className="card-header bg-white"
      onClick={onClick}
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#e6f0ff",
            borderRadius: "50%",
            padding: "5px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "32px",
            minHeight: "32px",
          }}
        >
          <i className={`fa ${IconClassName}`}></i>
        </div>

        <h5 className="mb-0 fw-normal">{title}</h5>
      </div>

      <i
        className="fa fa-chevron-down"
        style={{
          color: "#007bff",
          fontSize: "20px",
          transition: "transform 0.3s",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
      ></i>
    </div>

    {isOpen && (
      <div
        className="card-body"
        style={{ borderTop: "1px solid #e0e0e0", padding: "15px" }}
      >
        <AccordionContent title={title} />
      </div>
    )}
  </div>
);
const SidePanel1 = () => {
  const annoucements = [

  ]
}

const SidePanel = () => {
  const announcements = [
    "Trading holiday on account of Diwali–Balipratipada on October 22, 2025",
    "Current Takeovers and Delisting – October 2025",
  ];

  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
    "Learn how to create a ticket",
  ];

  const listContainerStyle = {
    backgroundColor: "white",
    border: "1px solid #f0f0f0",
    borderRadius: "4px",
    padding: "0",
    marginBottom: "30px",
    listStyleType: "none",
    margin: "0",
  };

  return (
    <div className="col-lg-4 mt-5 mt-lg-0">
      <div
        style={{
          ...listContainerStyle,
          borderLeft: "3px solid #f0ad4e",
          borderTop: "none",
          marginBottom: "30px",
          backgroundColor: "#fbf3e8",
        }}
      >
        {announcements.map((text, index) => (
          <div
            key={index}
            style={{
              padding: "10px 15px",
              borderBottom:
                index < announcements.length - 1 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <a
              href="#"
              className="text-dark"
              style={{
                textDecoration: "none",
                fontSize: "0.95rem",
                textDecoration: "underline",
              }}
            >
              {text}
            </a>
          </div>
        ))}
      </div>
      <h6
        className="text-muted text-uppercase fw-bold mt-5"
        style={{ marginBottom: "15px" }}
      >
        Quick links
      </h6>

      <ol style={listContainerStyle}>
        {quickLinks.map((link, index) => (
          <li
            key={index}
            style={{
              padding: "10px 15px",
              borderBottom:
                index < quickLinks.length - 1 ? "1px solid #f0f0f0" : "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                marginRight: "8px",
                color: "#6c757d",
                fontWeight: "bold",
              }}
            >
              {index + 1}.
            </span>
            <a
              href="#"
              className="text-primary"
              style={{ textDecoration: "none", fontSize: "0.95rem" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

function CreateTicket() {
  const [openSection, setOpenSection] = useState("Account Opening");

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };
  const sections = [
    { name: "Account Opening", icon: "fa-plus-circle" },
    { name: "Your Zerodha Account", icon: "fa-user" },
    { name: "Funds", icon: "fa-inr" },
    { name: "Console", icon: "fa-dot-circle-o" },
    { name: "Coin", icon: "fa-circle-o" },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {sections.map((section) => (
            <AccordionItem
              key={section.name}
              title={section.name}
              icon={section.icon}
              isOpen={openSection === section.name}
              onClick={() => toggleSection(section.name)}
            />
          ))}
        </div>
        <SidePanel />
      </div>
    </div>
  );
}

export default CreateTicket;
