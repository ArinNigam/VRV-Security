import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { MessageSquare, Send, Paperclip } from 'lucide-react';

export const Messaging: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Messaging
        </h1>
      </div>

      <div className={`rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md overflow-hidden`}>
        <div className="grid grid-cols-12 h-[600px]">
          {/* Contacts List */}
          <div className={`col-span-4 border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <input
                type="search"
                placeholder="Search contacts..."
                className={`w-full p-2 rounded-md ${
                  isDarkMode
                    ? 'bg-gray-700 text-white placeholder-gray-400'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
            <div className="overflow-y-auto h-[calc(600px-64px)]">
              {/* Contact List Items */}
              {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name, index) => (
                <div
                  key={index}
                  className={`p-4 cursor-pointer hover:bg-opacity-10 ${
                    isDarkMode
                      ? 'hover:bg-gray-700 border-gray-700'
                      : 'hover:bg-gray-100 border-gray-200'
                  } border-b`}
                >
                  <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Last message preview...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-8 flex flex-col">
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Chat with John Doe
              </h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-center text-sm text-gray-500 mb-4">Today</p>
              {/* Message bubbles would go here */}
            </div>

            {/* Message Input */}
            <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center gap-2">
                <button className={`p-2 rounded-full hover:bg-opacity-10 ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}>
                  <Paperclip size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className={`flex-1 p-2 rounded-md ${
                    isDarkMode
                      ? 'bg-gray-700 text-white placeholder-gray-400'
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};