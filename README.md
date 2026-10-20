# MERN Hackathon Starter

A reusable full-stack starter with a React + Vite frontend, Express REST API, MongoDB/Mongoose, and JWT-based authentication. The frontend is configured for Vercel; deploy the API separately to a Node.js host.

## Included

- Responsive React UI with home, signup, login, and protected dashboard
- Express API with `/api/health` and authentication routes
- Password hashing with bcryptjs
- JWT authentication and current-user endpoint
- CORS allowlist, Helmet security headers, JSON body limit, and auth rate limiting
- `.env.example` files and Vercel SPA rewrite config

## Requirements

- Node.js 20 LTS or newer
- npm
- MongoDB Atlas database (or a local MongoDB instance)

## 1. Install dependencies

From the project root:

```bash
cd server
npm install
cd ../client
npm install
cd ..
```

## 2. Configure environment variables

Create local env files by copying the examples:

**macOS/Linux**
```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

**Windows PowerShell**
```powershell
Copy-Item server/.env.example server/.env
Copy-Item client/.env.example client/.env
```

Edit `server/.env`:
- `MONGO_URI`: your MongoDB connection string. In Atlas, create a database user and allow your development IP in Network Access.
- `JWT_SECRET`: use a random secret of at least 32 characters.
- `CLIENT_URL`: local frontend origin, normally `http://localhost:5173`.

`client/.env` can keep `VITE_API_URL=http://localhost:5000/api` for local development.

Never commit `.env` files or expose `JWT_SECRET` in the frontend.

## 3. Run locally

Open two terminals from the project root.

Terminal 1 — API:
```bash
cd server
npm run dev
```

Terminal 2 — frontend:
```bash
cd client
npm run dev
```

Open the Vite URL shown in the terminal (usually `http://localhost:5173`). Check API health at `http://localhost:5000/api/health`.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API health check |
| POST | `/api/auth/signup` | Create an account |
| POST | `/api/auth/login` | Log in |
| GET | `/api/auth/me` | Current user; requires `Authorization: Bearer <token>` |

Signup body:
```json
{
  "name": "Example User",
  "email": "user@example.com",
  "password": "a-password-at-least-8-characters"
}
```

Login body:
```json
{
  "email": "user@example.com",
  "password": "a-password-at-least-8-characters"
}
```

## Deploy frontend to Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Set **Root Directory** to `client`.
4. Add `VITE_API_URL` with your deployed API URL, ending in `/api` (for example, `https://your-api.example.com/api`).
5. Deploy. `client/vercel.json` handles client-side routes.

## Deploy backend

Vercel is primarily configured here for the frontend. Deploy `server` to a Node.js host that supports a long-running Express process, or adapt it to that platform's serverless model.

Set these environment variables on your backend host:
- `MONGO_URI`
- `JWT_SECRET` (at least 32 characters)
- `CLIENT_URL` (your exact deployed frontend origin, e.g. `https://your-app.vercel.app`; comma-separated origins are supported)

Use `npm install` to install dependencies and `npm start` as the start command. Ensure the host exposes the port provided in `PORT`.

## Before a real launch

This is a hackathon starter, not a complete production identity system. For production, consider moving JWTs from localStorage to secure HttpOnly cookies with CSRF protections, adding email verification and password reset, stricter request validation, structured logging, tests, and monitoring. Configure MongoDB Atlas network access narrowly and use strong unique secrets.

## Five-day preparation plan

### Day 1 — Setup
- Install Node.js and Git; create a MongoDB Atlas database.
- Copy env examples, install dependencies, and run both services.
- Confirm `/api/health` returns `status: ok`.

### Day 2 — Authentication
- Test signup, login, logout, and refresh behavior.
- Test duplicate emails, invalid email, short passwords, and incorrect credentials.
- Check that `/dashboard` redirects logged-out users to login.

### Day 3 — Build the core feature
- Replace the starter dashboard with the hackathon's main user journey.
- Add a Mongoose model, controller, and API route for your domain.
- Add loading, empty, success, and error states.

### Day 4 — Test and deploy
- Test on a second browser/device and fix responsive layout issues.
- Deploy the API and frontend; set production environment variables.
- Confirm CORS, database access, and refresh-on-protected-route work.

### Day 5 — Demo readiness
- Prepare believable demo data and a short demo script.
- Test the deployed app from a fresh browser session.
- Keep a backup recording/screenshots and a list of known limitations.
- Freeze risky feature additions; prioritize reliability.

## Project structure

```text
mern-hackathon-starter/
├── client/
│   ├── src/
│   │   ├── components/Navbar.jsx
│   │   ├── context/AuthContext.jsx
│   │   ├── lib/api.js
│   │   ├── pages/{Home,Login,Signup,Dashboard}.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── vercel.json
│   └── package.json
├── server/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/auth.controller.js
│   │   ├── middleware/auth.js
│   │   ├── models/User.js
│   │   ├── routes/auth.routes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```
