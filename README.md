# 🎬 STREAMFLIX – Full-Stack Video Streaming Platform UI

A modern Full-Stack Video Streaming Platform UI inspired by popular streaming services. Built with **Next.js** and **NestJS**, the project focuses on delivering a cinematic user experience through modern interface design, movie browsing, search functionality, responsive layouts, and interactive user features.

> **Project Note:** STREAMFLIX is a streaming-platform design project. It focuses on the interface and user experience rather than providing actual video playback or a live video streaming service.

## 🌐 Live Demo & Project Links

- **Frontend Application:** [Visit STREAMFLIX](https://net-flix-clone-full-stack-ink8.vercel.app/)
- **Backend API:** [Backend Server](https://net-flix-clone-full-stack.vercel.app/)

## ✨ Key Features

- **🍿 Cinematic Interface:** A modern streaming-platform design inspired by popular movie streaming services.
- **🎬 Movie Browsing:** Browse movie collections through organized layouts and visually appealing content sections.
- **🔍 Search Experience:** Search interface for exploring movies, genres, titles, and cast members.
- **📋 My List & Favorites:** User interface for organizing favorite movies and personal watchlists.
- **⏳ Continue Watching UI:** Interface elements designed to represent movie-watching progress.
- **✨ Interactive Animations:** Smooth transitions and fluid animations using Framer Motion.
- **💀 Skeleton Loading:** Loading placeholders for a smoother browsing experience.
- **📱 Responsive Design:** Adaptive layouts optimized for different screen sizes.

## 🛠️ Technical Stack

### Frontend
- Next.js 14/15
- Framer Motion
- Tailwind CSS
- Context API

### Backend
- NestJS
- TypeScript
- Stream Pipes

### Database & ORM
- PostgreSQL
- Prisma ORM

### Cloud & Media Storage
- AWS S3
- Cloudinary

### Deployment
- Railway
- Vercel

## 📐 Database Architecture

- Uses PostgreSQL and Prisma ORM for relational database management.
- Database structure designed to support movie-related data and user interactions.
- Supports relational data organization for movie categories, genres, and user lists, where implemented.

## 🏗️ Project Architecture

The project follows a full-stack architecture, separating the frontend application from the backend API.

### Frontend
- Built with Next.js 14/15.
- Uses Context API for application state management.
- Styled with Tailwind CSS.
- Uses Framer Motion for animations and interactive transitions.
- Implements skeleton loading screens and responsive adaptive grids.
- Focuses on a cinematic and user-friendly browsing experience.

### Backend
- Built with NestJS and TypeScript.
- Uses a modular backend architecture.
- Uses Prisma ORM to interact with PostgreSQL.
- Provides backend APIs for the application's supported data and user interactions.
- Includes Stream Pipes as part of the backend technology stack, where applicable.

## ⚙️ Environment Configuration

Configure the environment variables required by the backend and frontend applications.

### 1. Backend Environment

Create a `.env` file in the backend project directory:

```env
DATABASE_URL=
CLOUDINARY_URL=
JWT_SECRET=
```

**Environment Variables:**

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL database connection string |
| `CLOUDINARY_URL` | Cloudinary connection URL, if used |
| `JWT_SECRET` | Secret key used for JWT authentication |

### 2. Frontend Environment

Create a `.env.local` file in the frontend project directory if your frontend requires environment variables:

```env
NEXT_PUBLIC_API_URL=
```

**Environment Variables:**

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL |

**Important Security Notes:**

- Never expose `JWT_SECRET` or private database credentials in frontend environment variables.
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.
- Keep private storage credentials on the backend.
- Never commit real `.env` or `.env.local` files to GitHub.
- Include only the environment variables actually used by your application.

## 💻 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/streamflix-video-streaming.git
```

### 2. Navigate to the Project Directory

```bash
cd streamflix-video-streaming
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create the required `.env` and `.env.local` files in their respective application directories.

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Start the Development Server

```bash
npm run dev
```

> **Note:** Run commands from the appropriate application directory if the repository separates the frontend and backend into different folders. Use the development scripts defined in each application's `package.json`.

## 🔒 Security

- Uses environment variables for sensitive configuration.
- Keeps private credentials on the backend.
- Separates frontend and backend configuration.
- Avoids exposing database credentials and authentication secrets in client-side code.
- Keeps `.env` and `.env.local` files out of public repositories.

## ⚡ Performance & UI Optimization

- Uses Framer Motion for smooth interface animations.
- Implements skeleton loading screens to improve perceived loading experience.
- Applies responsive layouts for different screen sizes.
- Focuses on optimized page rendering and media asset loading.
- Uses Next.js image optimization where applicable.

## 🚀 Deployment

The project uses the following deployment platforms:

- **Frontend Application:** Vercel.
- **Backend Application:** Railway.

Configure the required environment variables in the deployment settings for each application.

## 👨‍💻 Author

**Alaa Fawaz Manea**

- **GitHub:** [Alaa-Fawaz-Manea-AFM](https://github.com/Alaa-Fawaz-Manea-AFM)
- **LinkedIn:** [Alaa Fawaz Manea](https://linkedin.com/in/alaa-fawaz-manea/)

---

**STREAMFLIX – A Full-Stack Streaming Platform UI built with Next.js, NestJS, PostgreSQL, and Prisma.**
