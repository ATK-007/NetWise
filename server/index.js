const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Initialization (SQLite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'netwise.sqlite'),
  logging: false
});

// Models
const Incident = sequelize.define('Incident', {
  title: { type: DataTypes.STRING, allowNull: false },
  severity: { type: DataTypes.ENUM('Critical', 'High', 'Medium', 'Low'), defaultValue: 'Medium' },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.ENUM('Open', 'Investigating', 'Remediated', 'Closed'), defaultValue: 'Open' },
  suggestedFix: { type: DataTypes.TEXT }
});

const NetworkNode = sequelize.define('NetworkNode', {
  name: { type: DataTypes.STRING, allowNull: false },
  ip: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('Online', 'Offline', 'Degraded'), defaultValue: 'Online' },
  type: { type: DataTypes.STRING }
});

// Sync Database & Seed Data
const seedData = async () => {
  await sequelize.sync({ force: true });
  
  await Incident.bulkCreate([
    { title: "Unauthorized SQL Probe", severity: "Critical", status: "Open", description: "Suspicious activity detected on DB-01 from internal segment.", suggestedFix: "Isolate DB-01 and rotate credentials immediately." },
    { title: "SSH Brute Force", severity: "High", status: "Investigating", description: "100+ failed login attempts on JumpServer.", suggestedFix: "Ban IP range and enforce MFA." }
  ]);

  await NetworkNode.bulkCreate([
    { name: "Core-Switch-01", ip: "10.0.0.1", status: "Online", type: "Switch" },
    { name: "Web-Server-PROD", ip: "10.0.1.10", status: "Degraded", type: "Server" },
    { name: "VPN-Gateway", ip: "10.0.0.5", status: "Online", type: "Gateway" }
  ]);

  console.log("Database seeded successfully.");
};

// API Routes
app.get('/api/health', (req, res) => res.json({ status: 'Healthy', version: '1.0.0' }));

// Incidents CRUD
app.get('/api/incidents', async (req, res) => {
  const incidents = await Incident.findAll({ order: [['createdAt', 'DESC']] });
  res.json(incidents);
});

app.post('/api/incidents', async (req, res) => {
  const incident = await Incident.create(req.body);
  res.status(201).json(incident);
});

app.put('/api/incidents/:id', async (req, res) => {
  const incident = await Incident.findByPk(req.params.id);
  if (incident) {
    await incident.update(req.body);
    res.json(incident);
  } else {
    res.status(404).json({ error: "Incident not found" });
  }
});

app.delete('/api/incidents/:id', async (req, res) => {
  const incident = await Incident.findByPk(req.params.id);
  if (incident) {
    await incident.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Incident not found" });
  }
});

// Nodes
app.get('/api/nodes', async (req, res) => {
  const nodes = await NetworkNode.findAll();
  res.json(nodes);
});

// Start Server
app.listen(PORT, async () => {
  console.log(`NetWise Backend running on http://localhost:${PORT}`);
  await seedData();
});
