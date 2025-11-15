
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
  Home = 'home',
  Quiz = 'quiz',
  Results = 'results',
  Leaderboard = 'leaderboard',
}
