import React, { useState, useEffect } from 'react';
import './App.css';

// Simple Icons (Simulating Lucide)
const Shield = () => <span className="icon">🛡️</span>;
const Activity = () => <span className="icon">📉</span>;
const Server = () => <span className="icon">🖥️</span>;
const AlertCircle = () => <span className="icon">⚠️</span>;

function App() {
  const [incidents, setIncidents] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulation: In a real app, these would fetch from the Node.js server
  useEffect(() => {
    // Initial fetch simulation
    const mockNodes = [
      { id: 1, name: "Core-Switch-01", ip: "10.0.0.1", status: "Online" },
      { id: 2, name: "Web-PROD", ip: "10.0.1.50", status: "Degraded" },
      { id: 3, name: "DB-Cluster", ip: "10.0.2.10", status: "Online" },
      { id: 4, name: "Edge-Router", ip: "10.0.0.2", status: "Offline" }
    ];
    
    const mockIncidents = [
      { id: 101, title: "SQLi Attempt", severity: "Critical", status: "Open", time: "2m ago" },
      { id: 102, title: "Anomalous Traffic", severity: "High", status: "Investigating", time: "15m ago" },
      { id: 103, title: "Port Scan Detected", severity: "Medium", status: "Closed", time: "1h ago" }
    ];

    setTimeout(() => {
      setNodes(mockNodes);
      setIncidents(mockIncidents);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="netwise-app">
      <nav className="sidebar">
        <div className="logo">
          Net<span>Wise</span>
        </div>
        <ul className="nav-items">
          <li className="active">Dashboard</li>
          <li>Inbound Traffic</li>
          <li>System Logs</li>
          <li>Remediation</li>
        </ul>
      </nav>

      <main className="dashboard">
        <header className="dash-header">
          <h1>Network Intelligence Suite</h1>
          <div className="user-profile">SOC Analyst ATK-007</div>
        </header>

        <section className="bento-grid">
          {/* Stats Card */}
          <div className="bento-item stats-card glass">
            <div className="stat">
              <span className="label">Total Nodes</span>
              <span className="value">42</span>
            </div>
            <div className="stat">
              <span className="label">Active Threats</span>
              <span className="value critical">03</span>
            </div>
            <div className="stat">
              <span className="label">System Load</span>
              <span className="value">14%</span>
            </div>
          </div>

          {/* Activity Graph Simulation */}
          <div className="bento-item graph-card glass">
            <h3>Traffic Analysis (Real-time)</h3>
            <div className="mock-graph">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="graph-bar" 
                  style={{ height: `${Math.random() * 80 + 20}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Incidents Table */}
          <div className="bento-item incidents-card glass">
            <h3>Active Incidents</h3>
            <table className="netwise-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Severity</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map(inc => (
                  <tr key={inc.id}>
                    <td>{inc.title}</td>
                    <td><span className={`sev-tag ${inc.severity.toLowerCase()}`}>{inc.severity}</span></td>
                    <td>{inc.status}</td>
                    <td>{inc.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Node Status Board */}
          <div className="bento-item nodes-card glass">
            <h3>Node Inventory</h3>
            <div className="node-list">
              {nodes.map(node => (
                <div key={node.id} className="node-item">
                  <div className="node-info">
                    <strong>{node.name}</strong>
                    <span>{node.ip}</span>
                  </div>
                  <div className={`status-pill ${node.status.toLowerCase()}`}>
                    {node.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
