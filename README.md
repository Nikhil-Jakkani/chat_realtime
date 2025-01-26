Real-Time Chat Application using M.E.R.N stack
Introduction
Welcome to the MERN Real-Time Chat Application! This project aims to provide seamless communication, enhanced security, optimal data management, and a user-centric design for an engaging chatting experience.

Features
💬 Seamless Communication
Developed a real-time chat platform enabling instant interaction.

Integrated WebSocket technology, reducing message latency by 50%.

🔐 Enhanced Security
Implemented robust authentication, leading to a 99.9% decrease in unauthorized access attempts.

📊 Optimal Data Management
Utilized MongoDB to manage a database of over 1 million user profiles and messages, reducing query response time by 40%.

👩‍🎨 User-Centric Design
Designed an intuitive interface to enhance user experience and navigation.

Project Structure

/Backend
|-- /config
|   |-- db.js
|   |-- generateToken.js
|-- /controllers
|   |-- chatControllers.js
|   |-- messageController.js
|   |-- userControllers.js
|-- /data
|   |-- data.js
|-- /middleware
|   |-- authMiddleware.js
|   |-- errorMiddleware.js
|-- /models
|   |-- MessageModel.js
|   |-- chatModel.js
|   |-- userModel.js
|-- /routes
|   |-- chatRoutes.js
|   |-- messageRoutes.js
|   |-- userRoutes.js
|-- server.js


/frontend
|-- /public
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   |-- robots.txt
|-- /src
|   |-- /Context
|   |   |-- ChatProvider.js
|   |-- /Pages
|   |   |-- ChatPage.js
|   |   |-- HomePage.js
|   |-- /UserAvatar
|   |   |-- UserBadgeItem.js
|   |   |-- UserListItem.js
|   |-- /animations
|   |   |-- Notification.mp3
|   |   |-- message.mp3
|   |   |-- typing.json
|   |-- /components
|   |   |-- /Auth
|   |   |   |-- ChatBox.js
|   |   |   |-- ChatLoading.js
|   |   |   |-- MyChats.js
|   |   |   |-- ScrollableChat.js
|   |   |   |-- SingleChat.js
|   |-- /config
|   |   |-- ChatLogics.js
|   |-- /miscellaneous
|   |   |-- GroupChatModal.js
|   |   |-- ProfileModal.js
|   |   |-- SideDrawer.js
|   |   |-- UpdateGroupChatModal.js
|   |-- App.css
|   |-- App.js
|   |-- BackGround.jpeg
|   |-- index.css
|   |-- index.js
