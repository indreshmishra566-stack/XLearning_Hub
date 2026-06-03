# Xlearning Hub

Xlearning Hub is an interactive developer learning website for students and beginner developers who want a clear path from machine setup to production deployment.

The site collects practical lessons, command references, diagrams, and project workflow notes for full-stack development. Instead of making learners jump between many tutorials, it keeps the core roadmap in one searchable dashboard.

## What This Website Does

Xlearning Hub helps learners understand:

- How to set up a development machine.
- How React and Django fit together in a full-stack project.
- How to use Git and GitHub for version control.
- How Docker, Render, Vercel, Redis, and Clerk Auth fit into real deployments.
- How DSA, algorithms, and DAA are structured.
- Which commands to run, where to run them, and why they matter.

The goal is simple: help a learner move from copying random commands to understanding the full development workflow.

## Main Topics

The learning hub currently includes:

| Topic | Purpose |
|---|---|
| Full Stack Workflow | Machine setup, project folders, React + Django workflow, production build, and deployment flow |
| React | Components, hooks, state, forms, APIs, context, and frontend structure |
| Django | Backend setup, models, views, URLs, admin, REST framework, and deployment basics |
| Git | Version control commands, branches, commits, and workflow |
| GitHub | Remote repositories, collaboration, GitHub Actions, and automation |
| Docker | Containers, Dockerfiles, Compose, and production container workflow |
| Deployment Pipeline | CI/CD, environment variables, release flow, and deployment planning |
| Render | Deploying Django, React, databases, and production services |
| Vercel | Deploying React and Next.js style frontend apps |
| Redis | Caching, queues, sessions, background tasks, and production Redis usage |
| Clerk Auth | Authentication, protected routes, tokens, and frontend/backend auth integration |
| DSAMining | Data structures, algorithms, DAA, DSA structure, and learning flow diagrams |

## Features

- Search topics, lessons, commands, and concepts.
- Filter topics by category.
- Read lessons in a focused reader view.
- Move through sections with previous/next navigation.
- View command centers and quick references.
- Study large DSA/algorithm diagrams with mobile-friendly scrolling.
- Use the app on desktop, tablet, or mobile.

## Who It Is For

This website is useful for:

- Students learning full-stack development.
- Beginners who get confused by setup and deployment commands.
- Developers who want one place for React, Django, Git, Docker, deployment, Redis, auth, and DSA notes.
- Interview preparation learners who want structured DSA and algorithm foundations.

## Tech Stack

- React 18
- Create React App
- Custom CSS
- Local data file for topic content
- Lightweight markdown-like renderer for headings, lists, tables, inline code, and code blocks

## Project Structure

```text
Xlearning-hub/
├── public/
│   ├── index.html
│   └── upi-qr.png
├── src/
│   ├── data/
│   │   └── topics.js
│   ├── App.js
│   ├── App.css
│   ├── ContentRenderer.js
│   └── index.js
├── package.json
└── README.md
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

This creates a production-ready `build/` folder.

## Deploy

For Vercel:

```bash
npm run build
```

Use these settings:

```text
Framework: Create React App
Build command: npm run build
Output directory: build
```

For Render static site:

```text
Build command: npm run build
Publish directory: build
```

## Content Editing

Most lesson content lives in:

```text
src/data/topics.js
```

Each topic contains:

- `name`
- `icon`
- `category`
- `description`
- `sections`

Each section contains:

- `title`
- `sub`
- `phase`
- `content`
- `order`

The custom content renderer supports:

- Headings
- Paragraphs
- Bullet lists
- Numbered lists
- Tables
- Inline code
- Code blocks

## Current Purpose

Xlearning Hub is not a landing page. It is the actual learning dashboard. The first screen shows the topic grid, search, filters, topic stats, and learning path so users can start studying immediately.

