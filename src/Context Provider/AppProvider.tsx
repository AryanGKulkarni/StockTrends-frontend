// context/AppContext.tsx
"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { WatchlistType } from '@/helpers/types';

// Define the context types
interface WatchlistContextProps {
  watchlistData: WatchlistType[];
  setWatchlistData: React.Dispatch<React.SetStateAction<WatchlistType[]>>;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create contexts
const WatchlistContext = createContext<WatchlistContextProps | undefined>(undefined);
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Combined Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [watchlistData, setWatchlistData] = useState<WatchlistType[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <WatchlistContext.Provider value={{ watchlistData, setWatchlistData }}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    </WatchlistContext.Provider>
  );
};

// Custom hooks for consuming the contexts
export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
