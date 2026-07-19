# Todo List App

A simple Todo List application built with **Next.js** and **TypeScript**. 
Users can add, delete, complete, and undo completed tasks. Completed tasks 
are displayed on a separate page using Next.js routing, and task data is 
stored in Local Storage to persist after page refresh.

## Features
- Add new tasks
- Delete tasks
- Mark tasks as complete
- Undo completed tasks
- View completed tasks on a separate page
- Data persists after refresh using Local Storage

## Tech Stack
- Next.js
- TypeScript
- React

## Getting Started

1. Clone the repository
```bash
git clone <your-repo-url>
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
- `/` — Main page with active tasks
- `/completed` — Page showing completed tasks (with option to undo)
