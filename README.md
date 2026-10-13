# Quote Display App

A full-stack mini-application to display a random quote and allow users to submit new ones.

## Tech Stack
- Frontend: ReactJS
- Backend: Node.js (Express)
- Database: MySQL

## Setup & Run

### 1. Database Setup
Ensure MySQL is running. Create a database named `quotemaster`.
Execute the `backend/db.sql` script to create the `quotes` table and populate initial data:
`mysql -u your_user -p quotemaster < backend/db.sql`

Update `backend/server.js` with your MySQL `user` and `password`.

### 2. Backend Setup (Node.js/Express)
1. Navigate to the `backend` directory.
2. Install dependencies: `npm init -y && npm install express mysql cors`
3. Run the backend server: `node server.js`
   The server will run on `http://localhost:3001`.

### 3. Frontend Setup (ReactJS)
1. This project assumes a basic React setup (e.g., created with `create-react-app`).
2. Place the `frontend/src/App.js` file into your React project's `src` directory, replacing the default.
3. In your React project root, install dependencies: `npm install`
4. Run the frontend: `npm start`
   The React app will typically run on `http://localhost:3000`.

Open your browser to the frontend URL to interact with the app.