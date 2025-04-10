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
git clone <repository-url>
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

## Usage

1. Register a new account or use the guest login
2. Create or join chat rooms
3. Start real-time messaging
4. Search for other users
5. Create group chats

## API Endpoints

### Authentication
- POST `/api/user/register` - Register new user
- POST `/api/user/login` - User login

### Users
- GET `/api/user` - Search users
- GET `/api/user/profile` - Get user profile

### Chats
- POST `/api/chat/` - Access or create chat
- GET `/api/chat/` - Get user chats
- POST `/api/chat/group` - Create group chat
- PUT `/api/chat/rename` - Rename group
- PUT `/api/chat/groupadd` - Add user to group
- PUT `/api/chat/groupremove` - Remove user from group

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Thanks to Chakra UI for the amazing component library
- Socket.io team for the real-time engine
- MongoDB Atlas for database hosting
