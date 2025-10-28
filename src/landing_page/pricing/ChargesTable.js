// Example of the table without borders
import React, { useState } from "react";

function ChargesTable() {
  const [activeTab, setActiveTab] = useState("Equity");

  const tabs = ["Equity", "Currency", "Commodity"];

  const data = {
    Equity: [
      {
        name: "Brokerage",
        delivery: "Zero Brokerage",
        intraday: "0.03% or Rs. 20/executed order whichever is lower",
        futures: "0.03% or Rs. 20/executed order whichever is lower",
        options: "Flat Rs. 20 per executed order",
      },
      {
        name: "STT/CTT",
        delivery: "0.1% on buy & sell",
        intraday: "0.025% on the sell side",
        futures: "0.02% on the sell side",
        options: (
          <>
            • 0.125% of the intrinsic value on options that are bought and exercised
            <br />
            • 0.1% on sell side (on premium)
          </>
        ),
      },
      {
        name: "Transaction charges",
        delivery: (
          <>
            NSE: 0.00297%
            <br />
            BSE: 0.00375%
          </>
        ),
        intraday: (
          <>
            NSE: 0.00297%
            <br />
            BSE: 0.00375%
          </>
        ),
        futures: (
          <>
            NSE: 0.00173%
            <br />
            BSE: 0
          </>
        ),
        options: (
          <>
            NSE: 0.03503% (on premium)
            <br />
            BSE: 0.0325% (on premium)
          </>
        ),
      },
      {
        name: "GST",
        delivery: "18% on (brokerage + SEBI charges + transaction charges)",
        intraday: "18% on (brokerage + SEBI charges + transaction charges)",
        futures: "18% on (brokerage + SEBI charges + transaction charges)",
        options: "18% on (brokerage + SEBI charges + transaction charges)",
      },
      {
        name: "SEBI charges",
        delivery: "₹10 / crore",
        intraday: "₹10 / crore",
        futures: "₹10 / crore",
        options: "₹10 / crore",
      },
      {
        name: "Stamp charges",
        delivery: "0.015% or ₹1500 / crore on buy side",
        intraday: "0.003% or ₹300 / crore on buy side",
        futures: "0.002% or ₹200 / crore on buy side",
        options: "0.003% or ₹300 / crore on buy side",
      },
    ],
    Currency: [
      {
        name: "Brokerage",
        futures: "0.03% or ₹20/executed order whichever is lower",
        options: "₹20/executed order",
      },
      { name: "STT/CTT", futures: "No STT", options: "No STT" },
      {
        name: "Transaction charges",
        futures: "NSE: 0.00035% BSE: 0.00045%",
        options: "NSE: 0.0311% BSE: 0.001%",
      },
      {
        name: "GST",
        futures: "18% on (brokerage + SEBI charges + transaction charges)",
        options: "18% on (brokerage + SEBI charges + transaction charges)",
      },
      { name: "SEBI charges", futures: "₹10 / crore", options: "₹10 / crore" },
      {
        name: "Stamp charges",
        futures: "0.0001% or ₹10 / crore on buy side",
        options: "0.0001% or ₹10 / crore on buy side",
      },
    ],
    Commodity: [
      {
        name: "Brokerage",
        futures: "0.03% or Rs. 20/executed order whichever is lower",
        options: "₹20/executed order",
      },
      {
        name: "STT/CTT",
        futures: "0.01% on sell side (Non-Agri)",
        options: "0.05% on sell side",
      },
      {
        name: "Transaction charges",
        futures: (
          <>
            MCX: 0.0021%
            <br />
            NSE: 0.0001%
          </>
        ),
        options: (
          <>
            MCX: 0.0418%
            <br />
            NSE: 0.001%
          </>
        ),
      },
      {
        name: "GST",
        futures: "18% on (brokerage + SEBI charges + transaction charges)",
        options: "18% on (brokerage + SEBI charges + transaction charges)",
      },
      {
        name: "SEBI charges",
        futures: (
          <>
            Agri:
            <br />₹ 1 / crore
            <br />
            Non-agri:
            <br />₹ 10 / crore
          </>
        ),
        options: "₹10 / crore",
      },
      {
        name: "Stamp charges",
        futures: "0.002% or ₹200 / crore on buy side",
        options: "0.003% or ₹300 / crore on buy side",
      },
    ],
  };

  const getHeaders = (tab) => {
    switch (tab) {
      case "Equity":
        return [
          "Equity delivery",
          "Equity intraday",
          "F&O - Futures",
          "F&O - Options",
        ];
      case "Currency":
        return ["Currency futures", "Currency options"];
      case "Commodity":
        return ["Commodity futures", "Commodity options"];
      default:
        return [];
    }
  };

  const getKeys = (tab) => {
    switch (tab) {
      case "Equity":
        return ["delivery", "intraday", "futures", "options"];
      case "Currency":
      case "Commodity":
        return ["futures", "options"];
      default:
        return [];
    }
  };

  const headers = getHeaders(activeTab);
  const keys = getKeys(activeTab);

  return (
    <div className="container mt-5">
      {/* Tabs */}
      <ul className="nav nav-tabs mb-3">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Table - Borders removed here */}
      <table className="table text-center">
        <thead>
          <tr>
            <th></th>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[activeTab].map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              {keys.map((key) => (
                <td key={key}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-center mt-3">
        <a href="#" className="text-primary" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
    </div>
  );
}

export default ChargesTable;