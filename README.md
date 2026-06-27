# Personal Blog Platform (MERN Stack)

**Developed as a part of the CODTECH Summer Internship Project**

### Internship Details
- **Company:** CODTECH IT Solutions Pvt. Ltd.
- **Role:** MERN Stack Web Development Intern
- **Intern ID:** CITS1761

---

## 📝 Project Overview
This is a full-stack Personal Blog Platform built to demonstrate proficiency in the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete their own blog posts seamlessly. The application also integrates robust API rate-limiting to prevent server abuse.

## ✨ Key Features
- **Create, Read, Update, Delete (CRUD):** Fully functional backend API and frontend UI for managing blog posts.
- **Dynamic UI:** Built with React, Tailwind CSS, and DaisyUI for a premium, responsive, and beautiful user experience.
- **API Rate Limiting:** Integrated with Upstash Redis to restrict excessive requests to the server, providing custom error handling and UI feedback when limits are hit.
- **Production Ready:** Configured to serve the compiled frontend directly from the Node.js backend.

## 🛠️ Technology Stack
- **Frontend:** React, Vite, Tailwind CSS, DaisyUI, React Router, Axios, React Hot Toast
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ORM)
- **Caching/Rate Limiting:** Upstash Redis

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Install Dependencies & Build
In the root directory of the project, run:
```bash
npm run build
```
*(This command will automatically install all backend and frontend dependencies, and build the React frontend for production.)*

### 2. Environment Variables
The project requires a few environment variables to connect to the database and Redis cache. 

1. Navigate to the `backend` folder.
2. Rename the `.env.example` file to `.env`.
3. Fill in your own credentials in the `.env` file:
   - `MONGO_URI`: Your MongoDB connection string.
   - `UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN`: Your Upstash Redis credentials for rate limiting.
   - `PORT`: 5090

### 3. Start the Server
From the root directory, run:
```bash
npm run start
```
The application will be running at **http://localhost:5090**.