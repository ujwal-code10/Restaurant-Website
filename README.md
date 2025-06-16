# Bella Italia Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS. This frontend project showcases an elegant Italian restaurant with features like online reservations, menu display, and event information.

![Bella Italia Website Preview](https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80)

## 🌟 Features

### Core Features
- 🌓 Dark/Light Mode Support with System Preference Detection
- 📱 Fully Responsive Design (Mobile, Tablet, Desktop)
- 🎨 Modern UI with Smooth Animations
- 📅 Online Reservation System with Form Validation
- 🗺️ Interactive Google Maps Integration
- 📸 Responsive Image Gallery with Categories
- 🍽️ Dynamic Menu Display with Categories
- 👥 Team Section with Member Profiles
- 📝 Contact Form with Google Maps
- ⏰ Business Hours Display

### Technical Features
- 🔍 SEO Optimized with Meta Tags
- 📱 PWA Ready
- 🚀 Fast Loading with Image Optimization
- 🔒 Form Validation & Error Handling
- 🎯 Smooth Scroll Animations
- 📊 Google Analytics Ready
- 🔄 Real-time Form Validation
- 🎨 Custom Theme System

## 🛠️ Tech Stack

### Frontend
- **React 18** - Frontend library
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and development server

### APIs & Services
- **Google Maps API** - Location integration
- **Form Validation** - Custom validation logic
- **Image Optimization** - Responsive images with lazy loading

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bella-italia.git
cd bella-italia
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── layout/         # Layout components
│   ├── ui/            # UI components
│   └── forms/         # Form components
├── pages/             # Page components
├── assets/            # Static assets
│   ├── images/       # Image assets
│   └── icons/        # Icon assets
├── styles/            # Global styles
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── hooks/             # Custom React hooks
```

## 📱 Pages

### Home
- Hero section with call-to-action
- Today's specials
- Featured menu items
- Customer testimonials
- Location preview

### Menu
- Categorized menu items
- Price display
- Dietary indicators
- Special offers section

### About
- Restaurant history
- Team member profiles
- Timeline of achievements
- Restaurant interior gallery

### Gallery
- Food photography
- Event photos
- Interior shots
- Category filtering

### Contact
- Contact form
- Google Maps integration
- Business hours
- Location information

### Reservation
- Online booking system
- Date and time selection
- Guest count
- Special requests
- Form validation

## 🎨 Design System

### Colors
- Primary: `#1a1a1a` (Dark) / `#ffffff` (Light)
- Accent: `#e63946`
- Text: `#333333` (Dark) / `#ffffff` (Light)
- Background: `#f8f9fa` (Light) / `#121212` (Dark)

### Typography
- Headings: Inter
- Body: Roboto
- Accent: Playfair Display

### Components
- Cards
- Buttons
- Forms
- Navigation
- Modals
- Alerts

## 🔧 Configuration

### Environment Variables
```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_SITE_URL=https://your-domain.com
```

### SEO Configuration
- Meta tags
- Open Graph tags
- Twitter Cards
- Sitemap
- Robots.txt

## 📱 Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Features
- Mobile-first approach
- Responsive images
- Flexible layouts
- Touch-friendly interactions

## 🚀 Performance Optimization

- Image optimization
- Code splitting
- Lazy loading
- Preconnect to external resources
- Minified assets
- Caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- Component documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com)
- Icons from [Heroicons](https://heroicons.com)
- Design inspiration from modern restaurant websites
- Fonts from Google Fonts

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/bella-italia](https://github.com/yourusername/bella-italia)

## 📝 Changelog

### Version 1.0.0
- Initial release
- Complete website implementation
- Responsive design
- Dark/Light mode
- Online reservation system 