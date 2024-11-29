import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export const ContentModeration: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const mockContent = [
    { id: 1, type: 'Comment', content: 'Great article!', status: 'approved' },
    { id: 2, type: 'Post', content: 'Check out this new feature...', status: 'pending' },
    { id: 3, type: 'Review', content: 'The service was excellent', status: 'pending' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Shield className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Content Moderation
        </h1>
      </div>

      <div className="grid gap-6">
        {mockContent.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.type}
                </span>
                {item.status === 'pending' && (
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                    Pending Review
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-green-600 hover:bg-green-100 rounded-full">
                  <CheckCircle size={20} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-100 rounded-full">
                  <XCircle size={20} />
                </button>
              </div>
            </div>
            <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};