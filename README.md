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

## Environment Setup
To run this project locally, you must configure the following environment variables:
### Backend (/backend/.env)
```
MONGODB_URI=mongodb+srv://neoGStudent:MUqeem786%24@neog.aqqwr1m.mongodb.net/?retryWrites=true&w=majority&appName=neoG
PORT=3000
NODE_ENV=development
```

### Frontend (/frontend/.env)
```
VITE_API_URL=https://meet-up-app-ui.vercel.app/ || http://localhost:3000/api/events
```

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

## Demo Video
Watch a walkthrough of all major features of this app:<br>
[Watch Video Demo](https://drive.google.com/file/d/1VwvjV7jPaWa4BDcgLZrkphV162BmFMGs/view?usp=sharing)


## Features
### Home & Search
- **Displays a curated list** of upcoming events with responsive image thumbnails and status badges.
- **Executes real-time searches** across event titles and tags to help users find specific topics instantly.
- **Synchronizes navigation** so that searching from the header automatically redirects to the filtered listing.

### Event Management
- **Filters events dynamically** by "Online" or "Offline" status using a specialized dropdown menu.
- **Implements "See All" logic** to manage large event volumes while maintaining high UI performance.
- **Categorizes content** through interactive tags that simplify browsing by interest (e.g., Marketing, Tech).

### Event Details
- **Visualizes speaker profiles** with high-quality images, names, and professional designations.
- **Provides venue intelligence** by displaying physical addresses for offline events and clear "Online" labels for webinars.
- **Details attendance requirements** including dress codes, age restrictions, and pricing metadata.
- **Calculates event duration** automatically to show precise start and end times for attendees.

## API Reference
### GET /api/events
List all events available in the database.<br>
Sample Response: 
```
{ "_id": "123", "title": "Marketing Seminar", "eventType": "Online", "date": "2025-05-10" }
```

### GET /api/events/eventId/:id
Fetch full details for a specific event.<br>
Sample Response:
```
{ 
  "_id": "123", 
  "title": "Marketing Seminar", 
  "speaker": [{ "name": "Jane Smith", "image": "url" }],
  "description": "Full event details here..."
}
```

### GET /api/events/online
Fetch only virtual events.<br>
Sample Response:
```
[{ "title": "React Workshop", "eventType": "Online" }]
```
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
