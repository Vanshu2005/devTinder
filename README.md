DevTinder 👨‍💻🔥

A full-stack networking platform (Tinder for Developers) built with the MERN stack that allows developers to connect, collaborate, and grow together.

🚀 Features

🔐 Authentication & Authorization – JWT-based secure login and signup.

👤 Profile Management – Create, update, and manage user profiles.

🤝 Connection Requests – Send, accept, or reject connection requests.

📨 Real-time Notifications (planned) – Instant updates on requests.

🛡️ Security First – Password hashing, JWT auth, CORS handling.

📦 RESTful APIs – Clean, modular backend architecture.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS (optional for UI)

Backend: Node.js, Express.js

Database: MongoDB Atlas (NoSQL)

Authentication: JWT (JSON Web Tokens), bcrypt.js

Tools & Deployment: GitHub, Render/Heroku (backend), Vercel/Netlify (frontend)

📂 Project Structure
DevTinder/
│── models/          # Mongoose models (User, Connections, etc.)
│── routes/          # Express routes (auth, user, requests)
│── middleware/      # Custom middlewares (auth, validation)
│── controllers/     # Business logic for APIs
│── server.js        # Entry point of backend
│── client/          # Frontend (React app)
│── README.md        # Project documentation

⚡ Setup & Installation

Clone the repository

git clone https://github.com/Vanshu2005/devTinder.git
cd devtinder


Install dependencies

npm install
cd client && npm install


Add environment variables (.env)

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000


Run the app

# Run backend
npm run server  

# Run frontend (in /client)
npm start

📸 Screenshots 

Add screenshots of your app UI here if you have the frontend ready.

🎯 Uniqueness

Unlike typical social apps, DevTinder is focused on developers, enabling tech-specific networking.

Uses modular, production-ready backend architecture that can scale easily.

Implemented clean JWT authentication and MongoDB aggregation for requests.
