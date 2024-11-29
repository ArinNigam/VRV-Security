export type Role = 'user' | 'admin' | 'moderator';

export interface User {
  id: string;
  email: string;
  password?: string;
  name: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, name: string, role: string) => void;
  logout: () => void;
  initAuth: () => Promise<void>;
}