# Overview

This is a full-stack web application built with React frontend and Express backend, featuring a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components. The application appears to be a personal portfolio/resume website showcasing business development and partnership skills. It uses Drizzle ORM for database operations with PostgreSQL and includes comprehensive UI components for building professional interfaces.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite with hot module replacement and development plugins

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES modules with tsx for development execution
- **API Structure**: RESTful API with /api prefix routing
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reload with request logging and response tracking

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized schema definition in shared directory
- **Migrations**: Drizzle Kit for schema migrations and database operations
- **Development Storage**: In-memory storage class for development/testing

## Authentication & Session Management
- **Session Store**: PostgreSQL-backed sessions using connect-pg-simple
- **Architecture**: Server-side session management with database persistence

## External Dependencies
- **Database Provider**: Neon serverless PostgreSQL
- **UI Components**: Radix UI for accessible component primitives
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono)
- **Development Tools**: Replit-specific plugins for cartographer and dev banner
- **Form Handling**: React Hook Form with Hookform resolvers
- **Validation**: Zod with Drizzle Zod integration for type-safe schemas
- **Date Utilities**: date-fns for date manipulation
- **Carousel**: Embla Carousel for interactive components