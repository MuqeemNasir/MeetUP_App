## MeetUP
A feature-rich MERN stack Event Discovery platform built for organizing and finding local and global meetups.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen.svg)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black.svg)](https://vercel.com/)

MeetUP is a dynamic event management platform that allows users to browse upcoming events, filter by category, and view detailed information about speakers, venues, and schedules. It features a robust search engine and a seamless responsive UI.

## Live Demo
- **Frontend**: [https://meet-up-app-ui.vercel.app/](https://meet-up-app-ui.vercel.app/)
- **Backend API**: [https://meet-up-app-taupe.vercel.app/api/events](https://meet-up-app-taupe.vercel.app/api/events)

## Quick Start
```bash
# Clone the repository
git clone https://github.com/MuqeemNasir/MeetUP-App.git
cd MeetUP-App

# Setup Backend
cd backend
npm install

# Create a .env file and add MONGODB_URI
npm start

# Setup Frontend
cd ../frontend
npm install

# Create a .env file and add VITE_API_URL
npm run dev

```

## Tech Stack
- **Frontend**: React 19, Vite, React Router 7, Bootstrap 5, React Icons.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB Atlas with Mongoose ODM.
- **Deployment**: Vercel (Serverless Functions for Backend).
- **Data Fetching**: Custom useFetch hook with useEffect for synchronized state management.

## Features
### Event Discovery (Home)
- **Dynamic Search**: Real-time filtering of events by Title or Tags (e.g., "Marketing", "Tech").
- **Type Filtering**: Toggle between "Online", "Offline", or "Both" events using a refined dropdown interface.
- **Smart Listing**: Displays events in a responsive grid with "See More" pagination logic for optimal performance.

### Event Details (Deep Dive)
- **Speaker Profiles**: Dedicated section showing speaker images, names, and designations.
- **Automated Scheduling**: Logic-driven date and time formatting, including automatic end-time calculation (3-hour duration blocks).
- **Venue Integration**: Displays specific addresses for offline events and clear labeling for online webinars.
- **Additional Metadata**: Clear visibility on Dress Code, Age Restrictions, and Pricing (Free/Paid).

### Search & Navigation
- **Persistent Header**: Search bar accessible from any page that redirects users to filtered results.
- **Interactive Tags**: Clickable/viewable event tags to categorize content.

## API Reference
### GET /api/events
List all events available in the database.<br>

### GET /api/events/eventId/:id
Fetch full details for a specific event including speaker arrays and description.<br>

### GET /api/events/online
Fetch only events where eventType is "Online".<br>

### GET /api/events/offline
Fetch only events where eventType is "Offline".<br>

### POST /api/events
Create a new event.<br>
Request Body Sample:
```
{
  "title": "Tech Summit 2025",
  "eventType": "Offline",
  "date": "2025-06-15",
  "time": "10:00 AM",
  "speaker": [{ "name": "Jane Doe", "designation": "CTO" }],
  "venue": "Convention Center",
  "price": "₹500"
}

```

## Project Structure
```
├── backend/
│   ├── controllers/   # Route logic
│   ├── models/        # Mongoose Schemas
│   ├── routes/        # API Endpoints
│   └── index.js       # Entry Point
├── frontend/
│   ├── src/
│   │   ├── components/# Reusable UI (Header, etc.)
│   │   ├── pages/     # EventListing, EventDetails
│   │   ├── useFetch.js# Custom Hook
│   │   └── App.jsx    # Routing logic
└── vercel.json        # Deployment config
```

## Contact
For bugs or feature requests, please reach out to mac786m@gmail.com
