import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Dashboard } from '../pages/Dashboard';
import { UserManagement } from '../pages/admin/UserManagement';
import { Settings } from '../pages/admin/Settings';
import { Analytics } from '../pages/features/Analytics';
import { ContentModeration } from '../pages/features/ContentModeration';
import { Messaging } from '../pages/features/Messaging';
import { Documents } from '../pages/features/Documents';
import { ProtectedRoute } from './ProtectedRoute';
import { Unauthorized } from '../pages/Unauthorized';
import { Home } from '../pages/Home';
import { useAuthStore } from '../store/authStore';

export const AppRoutes: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Home />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/dashboard" replace /> : <Signup />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Feature Routes */}
      <Route
        path="/features/analytics"
        element={
          <ProtectedRoute allowedRoles={['admin', 'moderator']}>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/features/moderation"
        element={
          <ProtectedRoute allowedRoles={['admin', 'moderator']}>
            <ContentModeration />
          </ProtectedRoute>
        }
      />
      <Route
        path="/features/messaging"
        element={
          <ProtectedRoute>
            <Messaging />
          </ProtectedRoute>
        }
      />
      <Route
        path="/features/documents"
        element={
          <ProtectedRoute>
            <Documents />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <UserManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};