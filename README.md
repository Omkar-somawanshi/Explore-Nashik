# 🏞️ Explore Nashik - MERN Stack Tourist Spot Guide


## 🌐 Live Demo

🔗 [Live Site (Demo)](https://explore-nashik-demo.vercel.app)  
🛠️ Status: In Development / Deployed (update accordingly)

## 📌 Project Highlights

- 🗺️ Browse top tourist destinations in Nashik
- 📷 Display multiple images per spot
- 🎞️ Watch a video tour on the detail page
- 🔍 View spot details with description and highlights
- 🛡️ Admin panel to add, update, and delete spots
- 🔐 Admin authentication and route protection
- 📱 Fully responsive across devices

## 🧱 Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| **Frontend**| React.js, Tailwind CSS, Axios  |
| **Backend** | Node.js, Express.js            |
| **Database**| MongoDB (Mongoose ODM)         |
| **Authentication** | Clerk (or JWT if used) |
| **Deployment** | Vercel (Frontend)|

## 📂 Folder Structure

├── client/ # React Frontend│ 

├── src/

│ │ ├── components/ # Navbar, Cards, etc.

│ │ ├── pages/ # Home, Details, Admin Login, Dashboard

│ │ └── App.jsx

├── server/ # Node.js + Express Backend

│ ├── models/ # Mongoose Schemas

│ ├── routes/ # API Routes (public/admin)

│ ├── controllers/ # Logic for API

│ └── server.js

├── .env

└── README.md

🖼️ Screenshots

🏠 Homepage
![Homepage](client/src/HOME.PNG)
🧭 Explore Page
![Explore](client/src/Explore.PNG)
🍲 Culinary Page
![Culinary](client/src/Culniary.PNG)
🎉 Event Page
![Event](client/src/Event.PNG)
