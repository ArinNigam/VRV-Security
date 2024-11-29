import React from 'react';
import { useThemeStore } from '../store/themeStore';

export const Footer: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <footer className={`${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-600'} py-4`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} VRV Security</span>
            <span>•</span>
            <a href="/privacy" className="hover:text-blue-500">Privacy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-blue-500">Terms</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" className="hover:text-blue-500">GitHub</a>
            <a href="mailto:info@example.com" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}