# Architecture Overview

The project follows a **layered architecture** to ensure scalability, maintainability, and testability.

## High-Level Layers

1. UI Layer (Components)
2. State & Logic Layer (Hooks)
3. API Layer
4. Mongoose Models
5. Database Layer

## Frontend Architecture

UI Components
↓
Custom Hooks (useNotes, useTasks)
↓
API Layer (axios + api files)
↓
Backend REST APIs

## Backend Architecture

Routes
↓
Controllers
↓
Mongoose Models

## Key Principles
- Single Responsibility
- Data normalization at boundaries
- Dumb UI, smart hooks
- Predictable state updates