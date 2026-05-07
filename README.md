# 💼 Professional Developer Portfolio

A modern, responsive, and high-performance portfolio website built with React, TypeScript, and Vite. Showcase your projects, skills, and experience with style.

---

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Clean and professional UI/UX
- 📱 **Fully Responsive** - Works seamlessly on all devices (Mobile / Tablet / Desktop)
- 🔧 **Type-Safe** - Built with TypeScript for reliability
- 🌙 **Dark Mode Support** - Easy on the eyes
- 🎬 **Smooth Animations** - Professional transitions
- 🎯 **SEO Optimized** - Ready for search engines
- ♿ **Accessible** - WCAG compliant
- 🧩 **Reusable Components** - Clean and scalable code

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.5 | UI Framework |
| TypeScript | 6.0.2 | Type Safety |
| Vite | 8.0.10 | Build Tool |
| ESLint | 10.2.1 | Code Quality |

---

## 📂 Project Structure

```
Portfolio/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── App.css          # Application styles
│   └── index.css        # Global styles
├── public/              # Static assets
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies
```

---

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🔧 Configuration

### TypeScript
- Base configuration in `tsconfig.base.json`
- App-specific settings in `tsconfig.app.json`
- Vite settings in `tsconfig.node.json`

### ESLint
- Configuration in `eslint.config.js`
- Enforces best practices and code consistency

---

## 📋 Customization

### Adding Sections
1. Create new components in `src/components/`
2. Add page layouts in `src/pages/`
3. Import and use in `src/App.tsx`

### Styling
- Update `src/index.css` for global styles
- Update `src/App.css` for component-specific styles
- Or use CSS-in-JS solutions like styled-components

### Assets
- Place images in `src/assets/`
- Place static files in `public/`

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Deploy the `dist` folder

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Your Name**
- Portfolio: https://your-domain.com
- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-username
- Email: your-email@example.com

---

<p align="center">
  Built with ❤️ using React + TypeScript
</p>
