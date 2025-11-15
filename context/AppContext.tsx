
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language, QuizResult, User } from '../types';

// --- Helper Functions ---
const getTodayDateString = () => new Date().toISOString().split('T')[0];

const getYesterdayDateString = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split('T')[0];
};

// --- Mock Database in LocalStorage ---
const DB_USERS_KEY = 'db-users';
const SESSION_USER_KEY = 'session-user-email';

const getMockUsers = (): User[] => {
  const users = localStorage.getItem(DB_USERS_KEY);
  if (users) {
    return JSON.parse(users);
  }
  // Create some initial users for the leaderboard
  const initialUsers: User[] = [
    { email: 'master@test.com', xp: 1250, streak: 15, lastQuizDate: getYesterdayDateString(), history: [] },
    { email: 'pro@test.com', xp: 880, streak: 8, lastQuizDate: getTodayDateString(), history: [] },
    { email: 'rookie@test.com', xp: 210, streak: 3, lastQuizDate: getYesterdayDateString(), history: [] },
  ];
  localStorage.setItem(DB_USERS_KEY, JSON.stringify(initialUsers));
  return initialUsers;
};

const saveMockUsers = (users: User[]) => {
  localStorage.setItem(DB_USERS_KEY, JSON.stringify(users));
};

// --- App Context ---
interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  currentUser: User | null;
  leaderboard: User[];
  login: (email: string, password?: string) => boolean;
  register: (email: string, password?: string) => boolean;
  logout: () => void;
  addResultToHistory: (result: Omit<QuizResult, 'date'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allUsers, setAllUsers] = useState<User[]>(getMockUsers);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('app-language') as Language) || Language.JA;
  });

  // Check for active session on initial load
  useEffect(() => {
    const sessionEmail = localStorage.getItem(SESSION_USER_KEY);
    if (sessionEmail) {
      const user = allUsers.find(u => u.email === sessionEmail);
      if (user) {
        setCurrentUser(user);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('app-language', lang);
    setLanguageState(lang);
  };
  
  const updateUserAndSession = (updatedUser: User) => {
      const newAllUsers = allUsers.map(u => u.email === updatedUser.email ? updatedUser : u);
      setAllUsers(newAllUsers);
      saveMockUsers(newAllUsers);
      setCurrentUser(updatedUser);
  }

  const login = (email: string, password?: string): boolean => {
    const user = allUsers.find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem(SESSION_USER_KEY, email);
      return true;
    }
    return false;
  };

  const register = (email: string, password?: string): boolean => {
    if (allUsers.some(u => u.email === email)) {
      return false; // User already exists
    }
    const newUser: User = {
      email,
      password,
      xp: 0,
      streak: 0,
      lastQuizDate: null,
      history: [],
    };
    const newAllUsers = [...allUsers, newUser];
    setAllUsers(newAllUsers);
    saveMockUsers(newAllUsers);
    setCurrentUser(newUser);
    localStorage.setItem(SESSION_USER_KEY, email);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(SESSION_USER_KEY);
  };

  const addResultToHistory = (result: Omit<QuizResult, 'date'>) => {
    if (!currentUser) return;

    const today = getTodayDateString();
    let newStreak = currentUser.streak;

    if (currentUser.lastQuizDate !== today) {
        if(currentUser.lastQuizDate === getYesterdayDateString()) {
            newStreak++; // Continue streak
        } else {
            newStreak = 1; // Reset streak
        }
    }

    const newResult: QuizResult = {
      ...result,
      date: new Date().toLocaleString('ja-JP'),
    };
    
    const updatedUser: User = {
        ...currentUser,
        xp: currentUser.xp + result.xpGained,
        streak: newStreak,
        lastQuizDate: today,
        history: [newResult, ...currentUser.history].slice(0, 10),
    }

    updateUserAndSession(updatedUser);
  };

  const leaderboard = [...allUsers].sort((a, b) => b.xp - a.xp);

  return (
    <AppContext.Provider value={{ language, setLanguage, currentUser, leaderboard, login, register, logout, addResultToHistory }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
