# React Animation Project

A modern React project built with cutting-edge technologies for building high-performance web applications.

## 🚀 Tech Stack

- **Astro 5** - File-based routing and static HTML per page (`npm run build` → `dist/`)
- **React 18** - Page UI, mounted as Astro islands
- **JavaScript (ES6+)** - Modern JavaScript
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **Motion** (Framer Motion) - Production-ready animation library
- **Express** - Backend server
- **Nodemailer** - Email sending with Gmail

## 📦 Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## 🏃 Development

### Frontend + Backend Development:

**Terminal 1 - Backend Server:**

```bash
npm run server
```

**Terminal 2 - Frontend Development:**

```bash
npm run dev
```

Frontend opens on `http://localhost:5173`, backend runs on `http://localhost:3000`

### Production:

```bash
npm start
```

Opens on `http://localhost:3000`

## 📧 Email Configuration

This project uses **Nodemailer with Gmail** for the consultation form.

**Quick Setup:**

1. Configure Gmail App Password (see `NODEMAILER_SETUP.md` for detailed steps)
2. Update `.env` file with your Gmail credentials:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_RECIPIENT=your-business-email@gmail.com
   ```

For complete setup instructions, see [NODEMAILER_SETUP.md](NODEMAILER_SETUP.md)

## 🏗️ Build

```bash
npm run build
```

## 👀 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── pages/                    # Astro routes: one .astro file per URL (title, description, canonical)
├── layouts/BaseLayout.astro  # <html>/<head>: fonts, analytics, LCP hero shell
├── islands/                  # One React root per route (App + Layout + view)
├── views/                    # React page components and their sections
├── layout/                   # Header, Footer and Layout (React)
├── App.jsx                   # Lenis smooth scroll + scroll reset, wraps every page
└── index.css                 # Global styles with Tailwind
```

## 🎯 Get Started

1. **Add the page component** in `src/views/`
2. **Add its React root** in `src/islands/`
3. **Add the route** in `src/pages/` (the file name is the URL)
4. **Style with Tailwind** - Use utility classes
5. **Add animations** with Motion when needed

### Example: Adding a New Page

Create `src/views/team/Team.jsx`:

```jsx
function Team() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white">Team</h1>
      <p className="text-gray-300 mt-4">Your content here</p>
    </div>
  );
}

export default Team;
```

Create `src/islands/TeamPage.jsx`:

```jsx
import App from "../App";
import Layout from "../layout/Layout";
import Team from "../views/team/Team";

export default function TeamPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <Team />
      </Layout>
    </App>
  );
}
```

Create `src/pages/team.astro` (served at `/team`):

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import TeamPage from "../islands/TeamPage";
---

<BaseLayout path="/team" title="Our Team | B-Spoke" description="...">
  <TeamPage client:only="react" pathname="/team" />
</BaseLayout>
```

Links between pages are plain `<a href="/team">` tags.

### Example: Adding Animation

```jsx
import { motion } from "motion/react";

function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Your content
    </motion.div>
  );
}
```

## 📚 Learn More

- [Motion Documentation](https://motion.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Astro](https://docs.astro.build)
- [React 18](https://react.dev)

## 📝 License

MIT
