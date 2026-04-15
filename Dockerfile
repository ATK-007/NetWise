# --- STAGE 1: Build Frontend ---
FROM node:18-slim AS builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# --- STAGE 2: Serve Backend & Dashboard ---
FROM node:18-slim
WORKDIR /app
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server/ ./server/
COPY --from=builder /app/client/dist ./server/public

# Setup environment
ENV PORT=5000
EXPOSE 5000

WORKDIR /app/server
CMD ["node", "index.js"]
