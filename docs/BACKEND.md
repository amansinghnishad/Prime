# Backend Documentation

## Models

### Note
- title (String)
- content (String)
- isPinned (Boolean)
- owner (User reference)

### Task
- title (String)
- content (String)
- status (pending | in-progress | completed)
- owner (User reference)

## Authentication
- JWT stored in HTTP-only cookies
- Protected routes using middleware

## Error Handling
- Centralized error responses
- Consistent status codes
