import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { Settings as SettingsIcon, Save } from 'lucide-react';

export const Settings: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <SettingsIcon className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          System Settings
        </h1>
      </div>

      <div className={`grid gap-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">System Name</label>
              <input
                type="text"
                className={`w-full p-2 rounded-md ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600'
                    : 'bg-white border-gray-300'
                }`}
                defaultValue="VRV Security System"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Default User Role</label>
              <select
                className={`w-full p-2 rounded-md ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600'
                    : 'bg-white border-gray-300'
                }`}
                defaultValue="user"
              >
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium">Two-Factor Authentication</label>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Require 2FA for admin accounts
                </p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only" />
                <div className={`block w-12 h-6 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${isDarkMode ? 'bg-white' : 'bg-white'}`}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};