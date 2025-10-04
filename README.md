# React Custom Navigation Bar

A modern, responsive navigation bar built with React and Tailwind CSS.

## 🎯 Key Functionality Highlights

### 📱 **Responsive Mobile Menu**

- **Hamburger Menu Toggle**: Click to open/close mobile navigation
- **Smooth Slide Animation**: Menu slides down from top with 500ms transition
- **Full-Width Mobile Menu**: Covers entire screen width on mobile devices
- **Touch-Friendly**: Large, accessible buttons for mobile interaction

### 🖥️ **Desktop Navigation**

- **Horizontal Layout**: Clean, professional desktop navigation
- **Hover Effects**: Smooth color transitions on link hover
- **Contact Button**: Prominent call-to-action button (desktop only)
- **Responsive Breakpoints**: Automatically switches at `md` breakpoint

### 🎨 **Visual Features**

- **Green Color Theme**: Professional green color scheme
- **Modern Icons**: Lucide React icons for menu toggle
- **Smooth Transitions**: CSS transitions for all interactive elements
- **Clean Typography**: Readable fonts with proper hierarchy

### ⚡ **Technical Highlights**

- **React State Management**: Uses `useState` for menu toggle state
- **Conditional Rendering**: Different layouts for mobile vs desktop
- **CSS Animations**: Smooth slide-down animation for mobile menu
- **Accessibility**: Proper button elements and semantic HTML

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Mobile Menu Animation

- **Closed**: `top-[-700px]` (hidden above viewport)
- **Open**: `top-24` (visible below navigation)
- **Transition**: `duration-500` for smooth animation
- **Full Width**: `left-0 right-0 w-full` for complete coverage

## 🎨 Customization

- **Colors**: Modify `bg-green-600` and `bg-green-500`
- **Links**: Edit `navLinks` array in component
- **Spacing**: Adjust padding and margins with Tailwind classes
- **Typography**: Change font sizes and weights

## 🛠️ Built With

- **React 19.1.1** - Latest React features
- **Tailwind CSS 4.1.14** - Utility-first styling
- **Lucide React 0.544.0** - Modern icons
- **Vite 7.1.7** - Fast development server

---

**A fully responsive navigation solution for modern web applications! 🚀**
