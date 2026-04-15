# NetWise: Full-Stack Network Intelligence Platform

![NetWise Banner](https://img.shields.io/badge/NetWise-Full--Stack-blue?style=for-the-badge&logo=react)
![Build Version](https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge)
![Testing](https://img.shields.io/badge/Testing-Jest%20%7C%20Vitest-yellow?style=for-the-badge)

**NetWise** is a high-performance network monitoring and incident response platform. It provides cybersecurity teams with a unified "Bento" dashboard for tracking network node health, managing security incidents, and automating remediation workflows.

## 🚀 Key Features

- **Centralized Bento Dashboard**: Modular, glassmorphic UI designed for high-pressure security operations.
- **Node Topology Inventory**: Real-time status tracking for critical switches, gateways, and servers.
- **Incident Nexus (CRUD)**: Full-lifecycle management of security events (Critical, High, Medium, Low).
- **Automated Intelligence**: Simulated AI-driven remediation suggestions for every incident.
- **Reliability Engineered**: Built with a comprehensive suite of backend (Jest) and frontend (Vitest) tests.

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, Framer Motion (Animations), Recharts (Analytics)
- **Backend**: Node.js, Express, Sequelize ORM
- **Database**: SQLite (Zero-config, built-in persistence)
- **Testing**: Jest + Supertest (API), Vitest (UI)
- **Deployment**: Multi-stage Docker integration

## 📦 Project Structure

```text
netwise/
├── client/             # React Dashboard (Vite)
├── server/             # Express API & SQLite Engine
├── tests/              # Automated Test Suites
├── Dockerfile          # Container Orchestration
└── README.md           # Documentation
```

## 🚥 Quick Start

1. **Clone and Install**:
```bash
git clone https://github.com/ATK-007/NetWise.git
cd NetWise
```

2. **Start Backend**:
```bash
cd server
npm install
npm run dev
```

3. **Start Frontend**:
```bash
cd client
npm install
npm run dev
```

## 🚨 Security Scenarios Included
The platform comes pre-loaded with simulated real-world scenarios:
1.  **SQLi Probe**: Detected unauthorized database activity.
2.  **SSH Brute Force**: Automated flagging of multiple failed logins.
3.  **Port Scan Detection**: Reconnaissance activity identification.

## 📄 License
MIT License - Developed for Professional Cybersecurity Portfolio.

---
*Built by [Atmakuri Ashish](https://github.com/ATK-007)*
