
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language, QuizResult, User } from '../types';

// --- Helper Functions ---
const getTodayDateString = () => new Date().toISOString().split('T')[0];

const getYesterdayDateString = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split('T')[0];
};

// --- Single User in LocalStorage ---
const APP_USER_KEY = 'app-user';

// Mock users for the leaderboard, excluding the main player
const MOCK_LEADERBOARD_USERS: User[] = [
    { email: 'master@test.com', xp: 1250, streak: 15, lastQuizDate: getYesterdayDateString(), history: [] },
    { email: 'pro@test.com', xp: 880, streak: 8, lastQuizDate: getTodayDateString(), history: [] },
    { email: 'rookie@test.com', xp: 210, streak: 3, lastQuizDate: getYesterdayDateString(), history: [] },
];

const getAppUser = (): User => {
  const userStr = localStorage.getItem(APP_USER_KEY);
  if (userStr) {
    return JSON.parse(userStr);
  }
  // Create a default user if none exists
  const defaultUser: User = {
    email: 'player@app.com', // A default identifier
    xp: 0,
    streak: 0,
    lastQuizDate: null,
    history: [],
  };
  localStorage.setItem(APP_USER_KEY, JSON.stringify(defaultUser));
  return defaultUser;
};

const saveAppUser = (user: User) => {
  localStorage.setItem(APP_USER_KEY, JSON.stringify(user));
};


// --- App Context ---
interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  currentUser: User;
  leaderboard: User[];
  addResultToHistory: (result: Omit<QuizResult, 'date'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(getAppUser);
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('app-language') as Language) || Language.JA;
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('app-language', lang);
    setLanguageState(lang);
  };
  
  const updateUser = (updatedUser: User) => {
      saveAppUser(updatedUser);
      setCurrentUser(updatedUser);
  }

  const addResultToHistory = (result: Omit<QuizResult, 'date'>) => {
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

    updateUser(updatedUser);
  };

  const leaderboard = [...MOCK_LEADERBOARD_USERS, currentUser].sort((a, b) => b.xp - a.xp);

  return (
    <AppContext.Provider value={{ language, setLanguage, currentUser, leaderboard, addResultToHistory }}>
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
