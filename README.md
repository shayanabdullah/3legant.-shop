# 3legant - React E-Commerce Application

![3legant home page preview](/src/assets/images/image.png)

A modern, responsive e-commerce web application built with React and Vite, featuring user authentication, shopping cart functionality, and a sleek design.

## Development Status

⚠️ **This project is currently under development.** Only the home page is fully implemented and functional. Features such as user authentication, shopping cart, and product pages are planned but not yet completed.

## Features

- **User Authentication**: Secure login and registration system (planned)
- **Product Catalog**: Browse and view detailed product information (planned)
- **Shopping Cart**: Add, remove, and manage items in your cart (planned)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Enhanced user experience with motion animations
- **Image Galleries**: Interactive product image carousels using Swiper
- **State Management**: Efficient state handling with Redux Toolkit
- **Routing**: Client-side routing with React Router

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Animations**: Motion
- **Image Carousel**: Swiper
- **Icons**: React Icons
- **Linting**: ESLint

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd 3legant
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (Footer, Navbar, etc.)
│   ├── home/            # Home page specific components
│   ├── product/         # Product-related components
│   ├── ui/              # Reusable UI components
│   └── layouts/         # Layout components
├── pages/               # Page components
├── redux/               # Redux store and slices
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── data/                # Static data files
└── assets/              # Images, fonts, icons
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
