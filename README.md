# Mood Nest - Your Personal Mental Wellness Companion

## 🌟 Overview

Mood Nest is a modern web application designed to help users maintain their mental well-being through journaling and mood tracking. Built with React and powered by advanced AI capabilities through Cohere AI, Mood Nest provides a seamless and intuitive experience for managing your mental health journey.

## ✨ Features

- **Smart Journaling**: Write and maintain your daily thoughts with AI-powered insights
- **Mood Tracking**: Track your emotional journey with an intuitive emoji-based system
- **Personal History**: View your complete journaling journey with a beautiful timeline and mood distribution charts
- **Favorites**: Save and organize your most meaningful journal entries
- **Modern UI**: Clean and responsive interface built with Tailwind CSS
- **Real-time Analysis**: AI-powered mood analysis and suggestions

## 🎨 Design Philosophy

The application's design is built around the concept of creating a safe, calming space for users to express their emotions:

- **Color Palette**: Carefully selected colors to create a soothing environment
  - Primary: Soft teal for trust and calmness
  - Secondary: Gentle purple for creativity and wisdom
  - Accent: Warm coral for energy and positivity
  - Background: Light, neutral tones for readability and comfort

- **Typography**: 
  - Clean, modern fonts for optimal readability
  - Consistent hierarchy for clear information structure
  - Comfortable line spacing for reduced eye strain

- **UI Components**:
  - Rounded corners for a friendly, approachable feel
  - Subtle animations for engaging interactions
  - Ample white space for reduced cognitive load
  - Intuitive emoji selection for mood tracking

## 🛠️ Technical Implementation

### Frontend Architecture

- **React 19**: Leveraging the latest React features for optimal performance
- **Vite**: Fast development and build times
- **Tailwind CSS**: Utility-first CSS for rapid UI development
- **React Router DOM 7**: Modern routing with enhanced features
- **Zustand**: Lightweight state management for efficient data handling

### Key Libraries & Their Purpose

- **Cohere AI**: Powers intelligent journal analysis and emotional insights
- **Recharts**: Beautiful, responsive charts for mood visualization
- **React Markdown**: Renders AI responses with proper formatting
- **React Icons**: Consistent iconography throughout the application
- **React Hot Toast**: Elegant notifications for user feedback

### State Management

- **Zustand Store Structure**:
  - `useNoteStore`: Manages journal entries and favorites
  - `useWeatherStore`: Handles weather data

### Component Architecture

- **Layout Components**:
  - `SiteLayout`: Main application structure
  - `Navbar`: Navigation and user controls
  - `Footer`: Site calming statement

- **Feature Components**:
  - `Journaling`: Core journaling functionality
  - `History`: Journal entry timeline and statistics
  - `Favorites`: Saved entries management
  - `Home`: Welcoming landing page

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mood-nest.git
cd mood-nest
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
VITE_COHERE_API_KEY=your_cohere_api_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Project Structure

```
mood-nest/
├── src/
│   ├── assets/        # Static assets and images
│   ├── components/    # React components
│   ├── stores/        # Zustand state management
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/           # Public assets
└── ...config files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎯 Future Enhancements

- **Mobile App**: Native mobile application for iOS and Android
- **Social Features**: Optional sharing and community support
- **Advanced Analytics**: More detailed mood patterns and insights
- **Export Options**: Ability to export journal entries
- **Offline Support**: Local storage for offline journaling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Cohere AI for providing the AI capabilities
- React and Vite communities for excellent documentation
- All contributors and users of Mood Nest

---

Made with ❤️ for mental wellness
