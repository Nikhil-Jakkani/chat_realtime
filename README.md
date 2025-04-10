# Real-Time Chat Application using MERN Stack

## Introduction
Welcome to our Real-Time Chat Application! This project is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and provides a modern, secure, and feature-rich platform for real-time communication.

## Features

### 💬 Real-Time Communication
- Instant messaging with real-time message delivery
- Socket.io integration for seamless WebSocket connections
- Group chat functionality with multiple participants
- Real-time typing indicators and online status

### 🔐 Security & Authentication
- JWT (JSON Web Token) based authentication
- Secure password hashing using bcrypt
- Protected routes and API endpoints
- Guest user access with limited permissions

### 👥 User Management
- User registration and login system
- Profile picture support
- User search functionality
- Guest user account for quick access

### 💅 Modern UI/UX
- Clean and intuitive interface using Chakra UI
- Responsive design for all devices
- Real-time notifications
- Modern and accessible components

## Tech Stack

### Frontend
- React.js
- Chakra UI for styling
- Socket.io-client for real-time communication
- React Router for navigation
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- Socket.io for WebSocket server
- JWT for authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nikhil-Jakkani/chat_realtime.git
cd chat_realtime
```

2. Install Backend Dependencies:
```bash
cd Backend
npm install
```

3. Install Frontend Dependencies:
```bash
cd ../frontend
npm install
```

4. Set up Environment Variables:
Create a `.env` file in the Backend directory with:
```
PORT=4000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

5. Start the Development Servers:

Backend:
```bash
cd Backend
npm run dev
```

Frontend:
```bash
cd frontend
npm start
```
