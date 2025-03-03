# Crypto Dashboard

A modern cryptocurrency dashboard built with Next.js that allows users to track, search, and view detailed information about various cryptocurrencies.

## Features

- Real-time cryptocurrency data tracking
- Responsive crypto currency table with sorting capabilities
- Detailed modal view for individual crypto assets
- Search functionality to filter cryptocurrencies
- Data refresh capability
- Loading state indicators

## Technology Stack

- [Next.js](https://nextjs.org/) 15.2.0 - React framework
- [React](https://react.dev/) 19.0.0 - JavaScript library for building user interfaces
- [TanStack Query](https://tanstack.com/query) - Data fetching and state management
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Richmiz/web-app.git
   cd blockhouse
   
2. Install dependencies:
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   
3. Run the development server:
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev

4. Open http://localhost:3000 with your browser to see the application.


Project Structure
   blockhouse/
   ├── app/                # Next.js App Router
   │   ├── favicon.ico
   │   ├── globals.css
   │   ├── layout.tsx      # Root layout
   │   └── page.tsx        # Home page
   ├── components/         # React components
   │   ├── CryptoDetailModal.jsx
   │   ├── CryptoTable.jsx
   │   ├── LoadingSpinner.jsx
   │   ├── RefreshButton.jsx
   │   └── SearchBar.jsx
   ├── hooks/              # Custom React hooks
   │   └── useCryptoData.jsx
   ├── services/           # API services
   │   └── api.js
   └── public/             # Static assets


Deployment
The easiest way to deploy this application is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.
