# React Animation Project

A modern React project built with cutting-edge technologies for building high-performance web applications.

## 🚀 Tech Stack

- **React 18** - Latest React with concurrent rendering
- **JavaScript (ES6+)** - Modern JavaScript
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **React Router 7** - Client-side routing
- **Motion** (Framer Motion) - Production-ready animation library
- **Vite** - Lightning-fast build tool
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
├── pages/
│   └── Home.jsx              # Home page
├── App.jsx                   # Main app component with routing
├── main.jsx                  # Entry point
└── index.css                 # Global styles with Tailwind
```

## 🎯 Get Started

1. **Add new pages** in `src/pages/`
2. **Add routes** in `src/App.jsx`
3. **Style with Tailwind** - Use utility classes
4. **Add animations** with Motion when needed

### Example: Adding a New Page

Create `src/pages/About.jsx`:

```jsx
function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white">About</h1>
      <p className="text-gray-300 mt-4">Your content here</p>
    </div>
  );
}

export default About;
```

Add route in `src/App.jsx`:

```jsx
import About from "./pages/About";

// In Routes:
<Route path="/about" element={<About />} />;
```

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
- [React Router v7](https://reactrouter.com)
- [React 18](https://react.dev)

## 📝 License

MIT
