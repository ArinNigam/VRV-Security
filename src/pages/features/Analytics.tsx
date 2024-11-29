import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { BarChart, PieChart, LineChart, Users } from 'lucide-react';

export const Analytics: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: 'Total Users', value: '1,234', icon: Users, color: 'blue' },
          { title: 'Active Sessions', value: '856', icon: LineChart, color: 'green' },
          { title: 'Daily Active Users', value: '432', icon: BarChart, color: 'purple' },
          { title: 'Conversion Rate', value: '12.3%', icon: PieChart, color: 'orange' },
        ].map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.title}
                </p>
                <p className={`text-2xl font-semibold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
              </div>
              <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
            </div>
          </div>
        ))}
      </div>

      <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-8`}>
        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          User Activity
        </h2>
        <div className="h-64 flex items-center justify-center">
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Chart placeholder - User activity over time
          </p>
        </div>
      </div>
    </div>
  );
};