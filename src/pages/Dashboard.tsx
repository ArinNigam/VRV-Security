import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';
import { Shield, Users, Settings, BarChart, MessageSquare, FileText } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const features = [
    {
      title: 'User Management',
      description: 'Manage user accounts and permissions',
      icon: Users,
      path: '/admin/users',
      requiredRole: 'admin',
    },
    {
      title: 'System Settings',
      description: 'Configure system-wide settings',
      icon: Settings,
      path: '/admin/settings',
      requiredRole: 'admin',
    },
    {
      title: 'Analytics',
      description: 'View detailed analytics',
      icon: BarChart,
      path: '/features/analytics',
      requiredRole: 'moderator',
    },
    {
      title: 'Content Moderation',
      description: 'Moderate user content',
      icon: Shield,
      path: '/features/moderation',
      requiredRole: 'moderator',
    },
    {
      title: 'Messaging',
      description: 'Chat with other users',
      icon: MessageSquare,
      path: '/features/messaging',
      requiredRole: 'user',
    },
    {
      title: 'Documents',
      description: 'Manage your documents',
      icon: FileText,
      path: '/features/documents',
      requiredRole: 'user',
    },
  ];

  const userFeatures = features.filter(feature => {
    if (user?.role === 'admin') return true;
    if (user?.role === 'moderator') return feature.requiredRole !== 'admin';
    return feature.requiredRole === 'user';
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Welcome, {user?.name}!
        </h1>
        <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Here's your personalized dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userFeatures.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow
              ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
          >
            <div className="flex items-center mb-4">
              <feature.icon className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
            </div>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {feature.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};