# EaseUI 🎨✨

> **A modern, type-safe, GSAP-animated React UI component library and design system.**  
> Built with React 19, TypeScript, Tailwind CSS v4, Radix UI primitives, and GSAP motion.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18%20%2F%2019-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88ce02?logo=greensock&logoColor=white)](https://gsap.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📖 Table of Contents

- [The Story & Transformation](#-the-story--transformation)
- [Key Features](#-key-features)
- [Component Showcase](#-component-showcase)
- [Motion & Animation Engine](#-motion--animation-engine)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Usage Examples](#-usage-examples)
- [Available Scripts](#-available-scripts)
- [Before vs After Comparison](#-before-vs-after-comparison)
- [Author & License](#-author--license)

---

## 🚀 The Story & Transformation

This project originated from a raw, half-done, and unstyled codebase that lacked proper architecture, styling, and animations. 

Taking on the challenge, the codebase was completely overhauled, redesigned, and engineered into a **production-ready, fully-typed React component library and interactive documentation playground**.

### What was accomplished in the rewrite:
1. 🎨 **Complete Visual & UI Redesign**: Replaced unstyled HTML elements with sleek, modern UI components tailored with **Tailwind CSS v4** and customized color palettes.
2. 🛡️ **Full TypeScript Architecture**: Enforced strict TypeScript typing (`strict: true`), zero `any` usage, precise prop definitions, and polymorphic `asChild` composition via Radix UI Slot.
3. 🎬 **GSAP-Powered Motion System**: Built reusable entrance, hover, and 3D parallax micro-animations powered by **GreenSock (GSAP)**.
4. 🧩 **Variant System with CVA**: Integrated `class-variance-authority` and `tailwind-merge` for predictable, conflict-free variant styling.
5. 📱 **Interactive Documentation & Demo Site**: Engineered a complete documentation web app featuring live component demos, copyable code snippets, props tables, dark/light theme switching, and real-world template pages (Auth forms, Billing, SaaS Pricing).
6. 📦 **Dual Build Pipeline**: Configured Vite to bundle both an **NPM library** (`dist/` with ESM/UMD + `.d.ts` types) and a **static documentation web app** (`dist-site/` ready for Netlify/Vercel deployment).

---

## ✨ Key Features

- 💎 **Pixel-Perfect Aesthetics**: Modern glassmorphism, subtle borders, sleek dark mode, and vibrant accents.
- ⚡ **Type-Safe by Default**: Full autocompletion and type checking for all props, HTML attributes, and animation keys.
- 🎭 **Intentional Motion**: Micro-interactions, 3D card tilt/perspective, bounce, jiggle, wobble follow, and smooth entrance transitions.
- 🌗 **Dark & Light Mode**: Built-in theme state management using **Redux Toolkit** and Tailwind CSS dark mode classes.
- 🔌 **Polymorphic Components**: Seamlessly swap underlying HTML tags using the `asChild` prop powered by Radix UI.
- 🧩 **Ready-to-Use Complex Templates**: Includes full login, registration, OTP verification, checkout billing forms, and SaaS pricing tables.

---

## 📦 Component Showcase

### 1. 🔘 Button
A multi-variant, animated button supporting entrance triggers, hover effects, and active click physics.
- **Variants**: `primary`, `secondary`, `dark`, `destructive`, `ok`, `ghost`, `link`, `outline`
- **Sizes**: `sm`, `default`, `lg`, `xl`, `icon`, `full`, `auto`
- **Animations**: `fadeIn`, `scaleIn`, `slideUp`, `bounceIn`, `jiggle`, `shadowPulse`, `scale`, `bounce`

```tsx
import { Button } from "dev-ease-ui";

<Button variant="primary" size="default" hoverAnimation="jiggle">
  Click Me
</Button>
```

---

### 2. 🎴 Card
Interactive cards with aspect ratio support, headers, footers, and 3D parallax hover mechanics (`float3D`, `wobbleFollow`).
- **Variants**: `light`, `dark`, `outline`
- **Ratios**: `square`, `16:9`, `4:3`
- **Hover Effects**: `float3D` (lifts inner image, title, and description with depth), `wobbleFollow` (follows cursor with 3D tilt).

```tsx
import { Card } from "dev-ease-ui";

<Card
  variant="light"
  title="3D Card Feature"
  description="Hover over this card to see multi-layered GSAP parallax motion."
  image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
  ratio="16:9"
  hoverAnimation="float3D"
/>
```

---

### 3. 📝 Input Suite
A collection of input fields for any form requirement:
- **`Input`**: Standard clean styled text input.
- **`FloatingLabelInput`**: Smooth floating label animation on focus/content.
- **`AnimatedInput`**: GSAP focus ripple and glow effects.
- **`InputWithIcon`**: Prefix and suffix icon support.
- **`PasswordInput`**: Built-in show/hide password toggle.
- **`NumberInput`**: Formatted number input with step triggers.
- **`Textarea`**: Auto-resizable, styled multi-line text field.

---

### 4. 🪟 Modal / Dialog
Accessible dialog overlay with backdrop blur, smooth GSAP scale transitions, and keyboard / click-outside dismissal.
- **Variants**: `light`, `dark`, `outline`
- **Sizes**: `sm`, `md`, `lg`, `xl`

```tsx
import { Modal, Button } from "dev-ease-ui";
import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} variant="dark" size="md">
  <h2 className="text-xl font-bold">Modal Title</h2>
  <p className="mt-2 text-zinc-400">Modal content with smooth GSAP animations.</p>
</Modal>
```

---

### 5. 💬 Tooltip
Directional tooltips (`top`, `bottom`, `left`, `right`) with spring physics animations and configurable delays.

---

### 6. 🎠 Carousel Suite
- **`Carousel`**: Fluid slide carousel with touch/mouse drag support.
- **`ControlCarousel`**: Carousel equipped with Next/Previous navigation buttons.
- **`IndicatorCarousel`**: Carousel featuring dynamic dot indicators and slide progress.

---

### 7. 🧭 Navbar Collection
- **`Navbar`**: Responsive navigation bar with mobile drawer toggle and dark mode switch.
- **`RainbowNavbar`**: Vibrant animated gradient border navigation.
- **`DarkThemeNavbar`**: Sleek minimalist dark-mode-first navbar.

---

### 8. 📋 Pre-built Forms & Full Templates
- 🔐 **`LoginForm`**: Email, password, remember me, forgot password action.
- 📝 **`RegisterForm`**: Full user registration flow with validation states.
- 🔢 **`OtpVerification`**: 4/6-digit auto-focusing verification input group.
- 💳 **`PaymentBillingForm`**: Card details, expiration, CVV, billing address, and total calculation.
- 🏷️ **`PricingTemplate`**: Multi-tiered SaaS pricing comparison table with monthly/annual billing switch.

---

## 🎬 Motion & Animation Engine

EaseUI features an integrated GSAP animation module organized in `src/libs/animations/`:

| Animation Type | Available Presets | Description |
| :--- | :--- | :--- |
| **Entrance** | `fadeIn`, `scaleIn`, `slideUp`, `bounceIn` | Auto-triggered on component mount with smooth easing |
| **Hover** | `jiggle`, `scale`, `bounce`, `shadowPulse`, `float3D`, `wobbleFollow` | Micro-interactions responding to mouse movement & hover |
| **Focus** | `focusAnimation` | Dynamic outline / glow on input focus |
| **Click / Press** | Active state scale down (`0.92`) & elastic rebound (`1.05`) | Tactile feedback on button and card clicks |

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19 / 18** | Core UI library |
| **TypeScript 5.8** | Static typing, prop contracts, and intellisense |
| **Tailwind CSS v4** | Modern utility-first styling with `@tailwindcss/vite` |
| **GSAP (GreenSock) & @gsap/react** | High-performance motion, timelines, and spring physics |
| **Radix UI (`@radix-ui/react-slot`)** | Unstyled, accessible primitives and polymorphic rendering |
| **Class Variance Authority (CVA)** | Type-safe component variant management |
| **Tailwind Merge & CLSX** | Safe conditional class names without style collisions |
| **Redux Toolkit & React-Redux** | Global theme (Dark / Light) state management |
| **React Router v7** | Routing and documentation page navigation |
| **Lucide React** | Modern, lightweight icon set |
| **Vite 7** | Fast development server and dual library/site bundler |

---

## 📁 Project Architecture

```plaintext
EaseUI/
├── dist/                      # Built library output (ESM, UMD, Type definitions)
├── dist-site/                 # Built showcase documentation web app
├── public/                    # Static assets & icons
├── src/
│   ├── assets/                # Images and media assets
│   ├── components/            # UI Component Library Source
│   │   ├── Button/            # Button component + variants
│   │   ├── Card/              # Card component + 3D effects
│   │   ├── Carousel/          # Carousel, ControlCarousel, IndicatorCarousel
│   │   ├── Form/              # Login, Register, OTP, Payment forms
│   │   ├── Input/             # Standard, FloatingLabel, Animated, Password inputs
│   │   ├── Modal/             # Modal dialog component
│   │   ├── navbar/            # Standard, Dark, Rainbow navbars
│   │   ├── Personal/          # Documentation helpers (CodeBlock, PropsTable, Demo)
│   │   ├── Tooltip/           # Tooltip component
│   │   └── index.ts           # Barrel export for library components
│   ├── features/              # Redux slices (ThemeSlice)
│   ├── layouts/               # HomeLayout & ComponentLayout (Sidebar + Content)
│   ├── libs/
│   │   ├── animations/        # GSAP animation functions (entrance, hover, focus)
│   │   └── utils.ts           # cn() utility (clsx + tailwind-merge)
│   ├── pages/                 # Documentation & Showcase Pages
│   │   ├── components/        # Individual component demo pages
│   │   ├── templates/         # SaaS Pricing and complex template pages
│   │   ├── AboutPage.tsx      # Project story, values, and creator info
│   │   ├── ComponentsDemo.tsx # Live code preview wrapper
│   │   └── HomePage.tsx       # Hero landing page
│   ├── router/
│   │   └── AppRouter.tsx      # React Router route definitions
│   ├── store/
│   │   └── Store.tsx          # Redux store configuration
│   ├── App.tsx                # App root component
│   ├── index.css              # Global styles & Tailwind v4 theme directives
│   ├── index.ts               # Main library entry point
│   ├── main.tsx               # Site entry point
│   └── style.css              # Library stylesheet export
├── index.html                 # HTML template
├── netlify.toml               # Netlify deployment configuration
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript root configuration
├── tsconfig.lib.json          # TypeScript build config for library types
├── vite.config.ts             # Vite library build configuration
└── vite.site.config.ts        # Vite documentation site build configuration
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prathmesh774439/EaseUI.git
   cd EaseUI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server (with interactive docs):**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 💡 Usage Examples

### 1. Using the Button Component
```tsx
import { Button } from "@/components/Button/Button";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="primary" size="default">
        Primary Action
      </Button>

      <Button variant="outline" size="default" hoverAnimation="bounce">
        Bouncing Outline
      </Button>

      <Button variant="destructive" size="sm">
        Delete
      </Button>
    </div>
  );
}
```

### 2. Using the Interactive Card with 3D Motion
```tsx
import { Card } from "@/components/Card/Card";

export default function CardDemo() {
  return (
    <Card
      variant="light"
      size="md"
      title="Interactive Analytics"
      description="Real-time dashboard insights with 3D tilt interaction."
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      ratio="16:9"
      hoverAnimation="float3D"
      footer={
        <button className="text-sm font-medium text-violet-600 hover:underline">
          Explore Metrics &rarr;
        </button>
      }
    />
  );
}
```

### 3. Using Floating Label Input & Password Input
```tsx
import FloatingLabelInput from "@/components/Input/FloatingLabelInput";
import PasswordInput from "@/components/Input/PasswordInput";
import { useState } from "react";

export default function FormDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="space-y-4 max-w-sm">
      <FloatingLabelInput
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
}
```

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Runs the Vite dev server with Hot Module Replacement (HMR) |
| **Build Library** | `npm run build` | Builds the component library into `dist/` and generates TypeScript declaration files (`.d.ts`) |
| **Build Docs Site** | `npm run build:site` | Builds the interactive documentation site into `dist-site/` |
| **Preview** | `npm run preview` | Previews the production build locally |

---

## 📊 Before vs After Comparison

| Feature / Aspect | 🔴 Initial Codebase (Before) | 🟢 EaseUI Overhaul (After) |
| :--- | :--- | :--- |
| **Styling & Aesthetics** | Unstyled, raw HTML with missing CSS | Modern, polished Tailwind CSS v4 design system with curated palettes |
| **Type Safety** | Incomplete, untyped JS/loose TS with `any` | 100% strict TypeScript types, forwardRefs, and variant autocompletion |
| **Animations & Motion** | Static, no motion or transitions | Smooth GSAP-powered entrance, hover, tilt, and click micro-interactions |
| **Variants & Props** | Hardcoded inline properties | Flexible `class-variance-authority` (CVA) & `cn()` composition |
| **Component Breadth** | Barebones, partial components | Complete suite: Buttons, Cards, Inputs, Modals, Tooltips, Carousels, Navbars, Forms |
| **Documentation & Demo** | Default Vite placeholder | Full documentation site with live playground, code copying, and props tables |
| **Build & Distribution** | Standard single-bundle app | Dual build pipeline (NPM library package + static site for deployment) |
| **Theming** | No theme support | Integrated Light/Dark mode with Redux Toolkit persistence |

---

## 👨‍💻 Author & Acknowledgements

- **Modernized, Engineered & Maintained by**: [Prathmesh Kolam](https://github.com/Prathmesh774439)
- **Repository**: [https://github.com/Prathmesh774439/EaseUI](https://github.com/Prathmesh774439/EaseUI.git)
- **Original Base Credits**: Devendra Dhote

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it in your personal and commercial projects.
