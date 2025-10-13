import React from "react";

export const Sidebar = () => {
  const itemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const itemTextStyle: React.CSSProperties = {
    flex: "1",
    textAlign: "left",
    margin: 0,
  };

  const itemValueStyle: React.CSSProperties = {
    textAlign: "right",
    margin: 0,
  };

  return (
    <div style={{ textAlign: "left", padding: "0 1rem" }}>
      <h3>Inventory & Stats</h3>

      <div
        style={{
          border: "1px solid #333",
          padding: "1rem 1.5rem",
          borderRadius: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            borderBottom: "1px solid #333",
            paddingBottom: "1rem",
          }}
        >
          <p
            style={{
              flex: 1,
              margin: 0,
            }}
          >
            Token Price:
          </p>
          <p style={{ color: "var(--accent-color)", margin: 0 }}>$ 7.00</p>
        </div>
        <ul style={{ padding: 0, listStyle: "none" }}>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Your WL tier:</p>
              <p style={itemValueStyle}>WL0</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Your price:</p>
              <p style={itemValueStyle}>$ 0.003</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Public price:</p>
              <p style={itemValueStyle}>$ 0.004</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>TGE price:</p>
              <p style={itemValueStyle}>$ 0.0045</p>
            </div>
          </li>
        </ul>
      </div>

      <div
        style={{
          border: "1px solid #333",
          padding: "1rem 1.5rem",
          borderRadius: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            borderBottom: "1px solid #333",
            paddingBottom: "1rem",
          }}
        >
          <p
            style={{
              flex: 1,
              margin: 0,
            }}
          >
            Token Boost:
          </p>
          <p
            style={{
              color: "var(--accent-color)",
              margin: 0,
            }}
          >
            +9%
          </p>
        </div>
        <ul style={{ padding: 0, listStyle: "none" }}>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>SolFlare partner:</p>
              <p style={itemValueStyle}>+2%</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Bonk Family:</p>
              <p style={itemValueStyle}>+3%</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Lucky number:</p>
              <p style={itemValueStyle}>+1%</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>1st Hour Buyer:</p>
              <p style={itemValueStyle}>+2%</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Code applied:</p>
              <p style={itemValueStyle}>+1%</p>
            </div>
          </li>
        </ul>
      </div>
      <div
        style={{
          border: "1px solid #333",
          padding: "1rem 1.5rem",
          borderRadius: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            borderBottom: "1px solid #333",
            paddingBottom: "1rem",
          }}
        >
          <p
            style={{
              flex: 1,
              margin: 0,
            }}
          >
            $STRAND to Receive:
          </p>
          <p
            style={{
              color: "var(--accent-color)",
              margin: 0,
            }}
          >
            978,000
          </p>
        </div>

        <ul style={{ padding: 0, listStyle: "none" }}>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Base amount:</p>
              <p style={itemValueStyle}>888,000</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Total deposited:</p>
              <p style={itemValueStyle}>200 SOL</p>
            </div>
          </li>
          <li>
            <div style={itemStyle}>
              <p style={itemTextStyle}>Bonus amount:</p>
              <p style={itemValueStyle}>+65,000</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
