# API Contract

Base URL: `http://localhost:8000/api/v1`

## Authentication (`/users`)

### Register User
**POST** `/users/register`

Relies on JSON body:
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "password": "securepassword"
}
```

### Login User
**POST** `/users/login`

Relies on JSON body (requires email or username):
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
*Note: Returns Access and Refresh tokens within HTTP-only cookies and body.*

### Logout User
**POST** `/users/logout`
*Requires Authentication*

### Get Current User
**GET** `/users/current-user`
*Requires Authentication*

### Refresh Token
**POST** `/users/refresh-token`
*Requires Refresh Token in cookie or body*

---

## Notes (`/notes`)
*All endpoints require Authentication*

### Get All Notes
**GET** `/notes`

Response:
```json
{
  "statusCode": 200,
  "data": [
    {
      "_id": "...",
      "title": "My Note",
      "content": "Note content...",
      "isPinned": false,
      "createdAt": "..."
    }
  ],
  "message": "Notes fetched successfully",
  "success": true
}
```

### Create Note
**POST** `/notes`

Request:
```json
{
  "title": "New Idea",
  "content": "Description of idea...",
  "isPinned": true
}
```

### Get Note by ID
**GET** `/notes/:noteId`

### Update Note
**PATCH** `/notes/:noteId`

Request:
```json
{
  "title": "Updated Title",
  "content": "Updated content..."
}
```

### Delete Note
**DELETE** `/notes/:noteId`

---

## Tasks (`/tasks`)
*All endpoints require Authentication*

### Get All Tasks
**GET** `/tasks`

Response:
```json
{
  "statusCode": 200,
  "data": [
    {
      "_id": "...",
      "title": "Finish Project",
      "content": "Complete documentation",
      "status": "pending"
    }
  ],
  "success": true
}
```

### Create Task
**POST** `/tasks`

Request:
```json
{
  "title": "Buy groceries",
  "content": "Milk, Bread, Eggs",
  "status": "pending" 
}
```
*Status options: "pending", "in-progress", "completed"*

### Get Task by ID
**GET** `/tasks/:taskId`

### Update Task
**PATCH** `/tasks/:taskId`

Request:
```json
{
  "status": "completed"
}
```

### Delete Task
**DELETE** `/tasks/:taskId`