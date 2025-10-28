import React from "react";

function Charges() {
 const borderColor = '#dee2e6';
  const freeBadgeStyle = {
    backgroundColor: "#32CD32",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "0.85rem",
    fontWeight: "bold",
  };
  const tableContainerStyle = { 
    borderCollapse: 'collapse', 
    borderLeft: `1px solid ${borderColor}`,
    borderRight: `1px solid ${borderColor}`,
    borderBottom: `1px solid ${borderColor}`,
    width: '100%' 
  };
  const headerStyle = { 
    borderBottom: `1px solid ${borderColor}`,
    padding: '0.75rem', 
  };
  const tdStyle = { 
    border: 'none', 
    padding: '0.75rem', 
    textAlign: 'left' // Default to left-aligned cells
  };

  // =========================================================
  // 1. Data for the Demat and Account Opening Tables (Previous)
  // =========================================================
  const accountOpeningCharges = [
    { type: "Online account", charges: "FREE" },
    { type: "Offline account", charges: "FREE" },
    { type: "NRI account (offline only)", charges: "₹ 500" },
    {
      type: "Partnership, LLP, HUF, or Corporate accounts (offline only)",
      charges: "₹ 500",
    },
  ];

  const amcCharges = [
    { holdings: "Up to ₹4 lakh", amc: "FREE*", isFree: true },
    { holdings: "₹4 lakh – ₹10 lakh", amc: "₹ 100 per year, charged quarterly*", isFree: false },
    { holdings: "Above ₹10 lakh", amc: "₹ 300 per year, charged quarterly", isFree: false },
  ];

  // =========================================================
  // 2. Data for Optional Value Added Services Table (New from image_e41003.png)
  // =========================================================
  const optionalServices = [
    { service: "Tickertape", frequency: "Monthly / Annual", charges: "Free: 0 | Pro: 249/2399" },
    { service: "Smallcase", frequency: "Per transaction", charges: "Buy & Invest More: 100 | SIP: 10" },
    { service: "Kite Connect", frequency: "Monthly", charges: "Connect: 500 | Personal: Free" },
  ];

  return (
    <div className="container mt-5">
      
      {/* ========================================================= */}
      {/* TABLE A: Charges for Account Opening */}
      {/* ========================================================= */}
      <h2 style={{ marginBottom: "20px" }}>Charges for account opening</h2>
      <table className="table" style={tableContainerStyle}>
        <thead>
          <tr>
            <th style={{ ...headerStyle, width: "70%", textAlign: "left" }}>Type of account</th>
            <th style={{ ...headerStyle, width: "30%", textAlign: "right" }}>Charges</th>
          </tr>
        </thead>
        <tbody>
          {accountOpeningCharges.map((item, index) => (
            <tr key={`acc-${index}`}>
              <td style={tdStyle}>{item.type}</td>
              <td style={{ ...tdStyle, textAlign: "right" }}>
                {item.charges === "FREE" ? (
                  <span style={freeBadgeStyle}>{item.charges}</span>
                ) : (
                  item.charges
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Separator / Margin */}
      <div style={{ marginTop: '40px' }}></div>

      {/* ========================================================= */}
      {/* TABLE B: Demat AMC (Annual Maintenance Charge) */}
      {/* ========================================================= */}
      <h2 style={{ marginBottom: '20px' }}>Demat AMC (Annual Maintenance Charge)</h2>
      <table className="table" style={tableContainerStyle}>
        <thead>
          <tr>
            <th style={{ ...headerStyle, width: '50%', textAlign: 'left' }}>Value of holdings</th>
            <th style={{ ...headerStyle, width: '50%', textAlign: 'left' }}>AMC</th>
          </tr>
        </thead>
        <tbody>
          {amcCharges.map((item, index) => (
            <tr key={`amc-${index}`}>
              <td style={tdStyle}>
                {item.holdings}
              </td>
              <td style={tdStyle}>
                {/* Render the charge, applying the green badge style if it's 'FREE' */}
                {item.isFree ? (
                  <span style={freeBadgeStyle}>
                    {item.amc}
                  </span>
                ) : (
                  item.amc
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* The accompanying note for Demat AMC */}
      <p style={{ 
          fontSize: '0.9rem', 
          color: '#6c757d', 
          marginTop: '15px',
          textAlign: 'left'
      }}>
          * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, 
          <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>click here</a>.
      </p>

      {/* Separator / Margin */}
      <div style={{ marginTop: '40px' }}></div>

      {/* ========================================================= */}
      {/* TABLE C: Charges for optional value added services (NEW) */}
      {/* ========================================================= */}
      <h2 style={{ marginBottom: '20px' }}>Charges for optional value added services</h2>
      <table className="table" style={tableContainerStyle}>
        <thead>
          <tr>
            <th style={{ ...headerStyle, width: '33%', textAlign: 'left' }}>Service</th>
            <th style={{ ...headerStyle, width: '33%', textAlign: 'left' }}>Billing Frequency</th>
            <th style={{ ...headerStyle, width: '34%', textAlign: 'left' }}>Charges</th>
          </tr>
        </thead>
        <tbody>
          {optionalServices.map((item, index) => (
            <tr key={`service-${index}`}>
              <td style={tdStyle}>{item.service}</td>
              <td style={tdStyle}>{item.frequency}</td>
              <td style={tdStyle}>{item.charges}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
export default Charges;
