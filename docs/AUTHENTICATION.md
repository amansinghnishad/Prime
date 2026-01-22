# Authentication Flow

1. User logs in
2. Backend issues JWT in HTTP-only cookie
3. Frontend stores user state in AuthContext
4. ProtectedRoute checks authentication
5. Unauthorized users redirected to login

## Security Measures
- HTTP-only cookies
- CORS protection
- Token refresh endpoint