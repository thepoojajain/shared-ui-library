# 🧱 Shared UI Library

A reusable React component library built as part of a **Micro Frontend (MFE)** demo to showcase **build-time integration using npm and GitHub**.

This library is intended to be consumed by independently deployed apps that share a design system or core UI elements. It demonstrates how to share functionality across MFEs **without runtime orchestration**.

## 📦 Project Structure

shared-ui-library/
├── src/
│ └── components/
│ └── Button.jsx
├── dist/
├── rollup.config.js
└── package.json

## 🚀 Features

- Built using **React**
- Bundled using **Rollup**
- Uses **PropTypes** for type safety
- Lightweight and framework-aligned for modern frontend apps

## 📦 Installation

This library is **not** published to npm. Instead, it’s pulled directly from the GitHub repository:

```bash
npm install git+https://github.com/thepoojajain/shared-ui-library.git

```

## 📦 Build
npm install
npm run build

