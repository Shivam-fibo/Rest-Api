# Student Management REST API

A simple, beginner-friendly REST API built with Node.js, Express.js, MongoDB, and Mongoose.

---

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/` | Check API health |
| POST | `/api/students` | Create a new student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get single student by ID |
| PATCH | `/api/students/:id` | Update student by ID |
| DELETE | `/api/students/:id` | Delete student by ID |

---

## Example Request Body (POST /api/students)

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "age": 21,
  "course": "BCA"
}
```

---

## 15-Step Quickstart Guide

1. **Create project folder**: Create a directory for your application (`REST API`).
2. **Run npm init**: Initialize Node.js environment (`npm init -y`).
3. **Install required packages**: Run `npm install express mongoose dotenv cors`.
4. **Create .env file**: Store configuration secrets locally.
5. **Add MongoDB connection string**: Add `PORT=5000` and `MONGO_URI=your_mongodb_connection_string` in `.env`.
6. **Create src folder**: Create a `src` folder for source code.
7. **Create database config**: Create `src/config/db.js` using Mongoose to connect to MongoDB.
8. **Create student feature folder**: Create `src/features/students/`.
9. **Create student model**: Define schema in `src/features/students/student.model.js` (`name`, `email`, `age`, `course`).
10. **Create student controller**: Write CRUD handlers in `src/features/students/student.controller.js`.
11. **Create student routes**: Define endpoints in `src/features/students/student.routes.js`.
12. **Create app.js**: Initialize Express app, CORS, JSON parsing, health check route, and feature routes.
13. **Create server.js**: Load environment variables, connect database, and start listening on port.
14. **Start the server**: Run `npm start` (or `node src/server.js`).
15. **Test the API endpoints**: Use Postman, Thunder Client, or cURL to send HTTP requests.
