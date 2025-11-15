
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: {
    ja: string;
    en: string;
    vi: string;
  };
}

export interface QuizResult {
  date: string;
  score: number;
  total: number;
  xpGained: number;
}

export interface User {
  email: string;
  // In a real application, this would be a securely hashed password.
  // For this prototype, we'll store it as plain text.
  password?: string;
  xp: number;
  streak: number;
  lastQuizDate: string | null; // YYYY-MM-DD format
  history: QuizResult[];
}

export enum Language {
  JA = 'ja',
  EN = 'en',
  VI = 'vi',
}

export enum AppScreen {
  Auth = 'auth',
  Home = 'home',
  Quiz = 'quiz',
  Results = 'results',
  Leaderboard = 'leaderboard',
}
