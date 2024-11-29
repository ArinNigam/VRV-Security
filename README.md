# VRV Security Application

A Role-Based Access Control (RBAC) application built with React, TypeScript, and Tailwind CSS. This application showcases different levels of access control based on user roles.

## User Roles

The application supports three user roles with different levels of access:

1. **Admin**
   - Full access to all features and administrative functions
   - Can manage users and system settings
   - Can access all user and moderator features

2. **Moderator**
   - Access to content moderation features
   - Can view analytics
   - Access to basic user features
   - Cannot access administrative functions

3. **User**
   - Basic access to core features
   - Limited to user-level functionality

## Route Access by Role

### Public Routes (No Authentication Required)
- `/` - Home page
- `/login` - Login page
- `/signup` - Sign up page
- `/unauthorized` - Access denied page

### User Routes (All Authenticated Users)
- `/dashboard` - User dashboard
- `/features/messaging` - Messaging system
- `/features/documents` - Document management

### Moderator Routes (Moderators and Admins Only)
- `/features/analytics` - Analytics dashboard
- `/features/moderation` - Content moderation

### Admin Routes (Admins Only)
- `/admin/users` - User management
- `/admin/settings` - System settings

## Access Control Matrix

| Route                    | User | Moderator | Admin |
|-------------------------|------|-----------|--------|
| /dashboard              | ✅   | ✅        | ✅     |
| /features/messaging     | ✅   | ✅        | ✅     |
| /features/documents     | ✅   | ✅        | ✅     |
| /features/analytics     | ❌   | ✅        | ✅     |
| /features/moderation    | ❌   | ✅        | ✅     |
| /admin/users            | ❌   | ❌        | ✅     |
| /admin/settings         | ❌   | ❌        | ✅     |

## Feature Access

### User Features
- View and navigate dashboard
- Send and receive messages
- Manage personal documents
- Update profile settings

### Moderator Additional Features
- View system analytics
- Moderate user content
- Access advanced reporting

### Admin Additional Features
- Manage user accounts
- Configure system settings
- Full access to all features
- View and modify user roles

## Navigation Access

### Navbar Items
- **All Users**: Dashboard, Messages, Documents
- **Moderators**: Additional access to Analytics, Content Moderation
- **Admins**: Additional access to User Management, System Settings

## Authentication Flow
1. Users can register through the signup page
2. Upon successful registration, users are redirected to login
3. After login, users are directed to their role-specific dashboard
4. JWT tokens are used for maintaining authenticated sessions
5. Role-based route protection ensures secure access

## Security Features
- Protected routes with role-based access control
- JWT authentication
- Secure password handling
- Email validation
- Route guards for unauthorized access
- Dark mode support for better UI/UX

## Error Handling
- Toast notifications for user feedback
- Proper error messages for invalid credentials
- Redirect to unauthorized page for insufficient permissions
- Form validation with proper error messages
- Duplicate email prevention during registration