# The Wild Oasis

Welcome to **The Wild Oasis**! This project is a personal endeavor aimed at testing and improving my skills in web development. Through this project, I am continuously learning and experimenting with various modern technologies.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Scripts](#scripts)

## Overview

**The Wild Oasis** is a web application built with a focus on learning and development. It integrates several libraries and tools to create a dynamic and efficient user experience.

## Features

- **Responsive Design**: Optimized for various devices and screen sizes.
- **Data Visualization**: Interactive charts and graphs using Recharts.
- **Form Handling**: Efficient form management with React Hook Form.
- **State Management**: Leveraging React Query for data fetching and caching.
- **Notifications**: User-friendly notifications with React Hot Toast.
- **Routing**: Seamless navigation using React Router.

## Technologies Used

- **Frontend**

  - [React](https://reactjs.org/)
  - [React DOM](https://reactjs.org/docs/react-dom.html)
  - [Styled Components](https://styled-components.com/)

- **State Management**

  - [React Query](https://react-query.tanstack.com/)
  - [React Query Devtools](https://react-query.tanstack.com/devtools)

- **Form Handling**

  - [React Hook Form](https://react-hook-form.com/)

- **Notifications**

  - [React Hot Toast](https://react-hot-toast.com/)

- **Routing**

  - [React Router DOM](https://reactrouter.com/)

- **Data Visualization**

  - [Recharts](https://recharts.org/)

- **Utilities**

  - [Date-fns](https://date-fns.org/)

- **Backend Integration**

  - [Supabase](https://supabase.io/)

- **Development Tools**
  - [Vite](https://vitejs.dev/)
  - [ESLint](https://eslint.org/)
  - [Vite Plugin ESLint](https://github.com/gxmari007/vite-plugin-eslint)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/the-wild-oasis.git
   ```

2. Navigate to the project directory:

   ```sh
   cd the-wild-oasis
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

Before running the application, you need to configure Supabase. The project will not work locally without the proper Supabase setup.

1. Create a Supabase project at [Supabase](https://supabase.io/).

2. Create a `.env` file in the project root and add your Supabase credentials:
   ```sh
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

### Usage

1. Run the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and visit `http://localhost:3000` to see the application in action.

## Scripts

- `dev`: Starts the development server using Vite.
- `build`: Builds the application for production.
- `lint`: Lints the codebase using ESLint.
- `preview`: Previews the production build locally.

---
