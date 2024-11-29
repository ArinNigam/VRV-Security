import React from 'react';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';
import { Shield, Users, Settings, BarChart, MessageSquare, FileText } from 'lucide-react';

export const Features: React.FC = () => {
  const { user } = useAuthStore();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const features = [
    {
      title: 'User Management',
      description: 'Manage user accounts and permissions',
      icon: Users,
      requiredRole: 'admin',
    },
    {
      title: 'System Settings',
      description: 'Configure system-wide settings',
      icon: Settings,
      requiredRole: 'admin',
    },
    {
      title: 'Content Moderation',
      description: 'Review and moderate user content',
      icon: Shield,
      requiredRole: 'moderator',
    },
    {
      title: 'Analytics Dashboard',
      description: 'View detailed system analytics',
      icon: BarChart,
      requiredRole: 'moderator',
    },
    {
      title: 'Messaging',
      description: 'Send and receive messages',
      icon: MessageSquare,
      requiredRole: 'user',
    },
    {
      title: 'Document Management',
      description: 'Upload and manage documents',
      icon: FileText,
      requiredRole: 'user',
    },
  ];

  const canAccessFeature = (requiredRole: string) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    if (user.role === 'moderator' && requiredRole !== 'admin') return true;
    return user.role === requiredRole;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          canAccessFeature(feature.requiredRole) && (
            <div
              key={index}
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
              <div className="mt-4">
                <span className={`inline-block text-sm px-3 py-1 rounded-full
                  ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                  {feature.requiredRole} access
                </span>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};