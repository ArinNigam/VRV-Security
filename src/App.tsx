import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { useThemeStore } from './store/themeStore';

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
        <Toaster 
          position="top-right"
          toastOptions={{
            className: isDarkMode ? '!bg-gray-800 !text-white' : '',
          }}
        />
        <Navbar />
        <main className={`flex-grow ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;