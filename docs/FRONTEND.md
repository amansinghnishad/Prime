# Frontend Documentation

## Folder Structure

```
src/
├── api/             # Axios instance and API calls
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── auth/        # Auth specific components
│   ├── dashboard/   # Dashboard widgets
│   ├── layout/      # Layout components (Sidebar, etc.)
│   ├── notes/       # Note related components (Grid, Item, Modal)
│   ├── tasks/       # Task related components
│   └── ui/          # Generic UI elements (Input, Button, etc.)
├── context/         # React Context (AuthContext, etc.)
├── hooks/           # Custom React Hooks
├── pages/           # Page components (routed)
│   ├── auth/        # Login/Register pages
│   └── Dashboard.jsx
└── App.jsx          # Main application component with Routes
```

## Key Components

### Layout
- **DashboardLayout**: Wraps protected pages, likely provides navigation.
- **TopBar**: Navigation and user actions (User menu, Logout).

### Feature Modules
- **Notes**: `NotesGrid`, Note item components, `CreateNoteModal`.
- **Tasks**: `TasksGrid`, Task item components, `CreateTaskModal`.

## State Management & Logic
The application uses **Custom Hooks** to separate logic from UI.

### Hooks
- **`useAuthForm`**: Handles Login/Register form state, validation, and submission logic.
- **`useNotes`**: Facade for Notes API interactions (fetch, create, update, delete).
- **`useTasks`**: Facade for Tasks API interactions.
- **`useClickOutside`**: Utility for handling clicks outside dropdowns/modals.

### Context
- **`AuthContext`** (implied): Likely manages global user authentication state.

## Design
- **Styling**: Tailwind CSS is used for utility-first styling.
- **Responsive**: Layouts adapt to mobile and desktop screens.