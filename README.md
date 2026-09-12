# InterviewIQ.AI

AI-powered mock interview practice built with React, Express, MongoDB, OpenRouter, Firebase, and Razorpay.

InterviewIQ.AI helps candidates practice Technical and HR interviews, receive AI-generated feedback, track performance, and purchase additional interview credits.

> The detailed repository analysis and interview-preparation notes are available in [README_ANALYSIS.md](README_ANALYSIS.md).

## Features

- Google sign-in with Firebase Authentication
- JWT-based authenticated sessions
- Technical and HR interview modes
- Optional PDF resume analysis
- AI-generated interview questions using OpenRouter
- Five-question interview flow with fixed timers
- Browser speech synthesis for questions and feedback
- Browser speech recognition where supported
- AI evaluation of confidence, communication, and correctness
- Interview history and performance reports
- Downloadable PDF reports
- Credit-based usage system
- Razorpay credit purchases

## How It Works

```text
User
  |
  v
React + Vite client
  |
  | Axios requests with credentials
  v
Express API
  |
  +--> MongoDB
  +--> OpenRouter AI
  +--> Razorpay
```

1. The user signs in with Google.
2. The user selects a role, experience level, and interview mode.
3. The user can optionally upload a PDF resume.
4. OpenRouter generates five personalized questions.
5. The user answers each question under a fixed timer.
6. OpenRouter evaluates the answers.
7. The final report is saved and displayed to the user.

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Redux Toolkit
- Axios
- Tailwind CSS
- Motion
- Recharts
- jsPDF
- Browser Speech APIs

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Multer
- PDF.js
- OpenRouter API
- Razorpay

## Project Structure

```text
InterviewForge/
├── client/                 # React/Vite frontend
│   └── src/
│       ├── components/     # Interview workflow and shared UI
│       ├── pages/          # Application routes
│       ├── redux/          # User state management
│       └── utils/          # Firebase setup
├── server/                 # Express backend
│   ├── config/             # Database and JWT configuration
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Authentication and file upload
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   └── services/           # OpenRouter and Razorpay integrations
├── README.md               # GitHub project overview
└── README_ANALYSIS.md      # Detailed technical analysis
```

## Local Setup

### Prerequisites

- Node.js and npm
- MongoDB
- Firebase project with Google sign-in enabled
- OpenRouter API key
- Razorpay credentials for payment testing

### 1. Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 2. Configure environment variables

Create `server/.env`:

```env
PORT=8000
MONGODB_URL=
JWT_SECRET=
OPENROUTER_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

Create `client/.env`:

```env
VITE_FIREBASE_APIKEY=
VITE_RAZORPAY_KEY_ID=
```

Do not commit environment files or secret values.

### 3. Start the backend

```bash
cd server
npm run dev
```

### 4. Start the frontend

Open another terminal:

```bash
cd client
npm run dev
```

The frontend runs at `http://localhost:5173`.

The client currently expects the API at `http://localhost:8000`, so set the server `PORT` to `8000`.

## Available Scripts

### Client

```bash
npm run dev       # Start Vite development server
npm run build     # Create production build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

### Server

```bash
npm run dev       # Start Express with Nodemon
```

## Main API Routes

```text
POST /api/auth/google
GET  /api/auth/logout
GET  /api/user/current-user

POST /api/interview/resume
POST /api/interview/generate-questions
POST /api/interview/submit-answer
POST /api/interview/finish
GET  /api/interview/get-interview
GET  /api/interview/report/:id

POST /api/payment/order
POST /api/payment/verify
```

## Credits

- New users start with 100 credits.
- Creating an interview costs 50 credits.
- Paid plans add credits through Razorpay.
- Payment signatures are verified on the server before credits are added.

## Current Limitations

- Interview questions are generated in advance; adaptive follow-up questions are not implemented.
- Question timers are fixed at 60, 60, 90, 90, and 120 seconds.
- Speech recognition depends on browser support for `webkitSpeechRecognition`.
- The backend currently accepts Google profile data from the client without verifying a Firebase ID token server-side.
- Report and answer endpoints need stronger interview ownership checks.
- The client API URL and server CORS origin are configured for local development.
- No automated test suite or production deployment configuration is included.

See [README_ANALYSIS.md](README_ANALYSIS.md) for the complete architecture, security review, API details, scalability discussion, and interview questions.