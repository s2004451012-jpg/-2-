
import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import AuthScreen from './components/AuthScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import BottomNav from './components/BottomNav';
import { useAppContext } from './context/AppContext';
import { AppScreen } from './types';
import { Home, Trophy, BookOpen } from 'lucide-react';


const App: React.FC = () => {
  const { currentUser } = useAppContext();
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.Home);
  
  // State for quiz flow
  const [lastScore, setLastScore] = useState<number>(0);
  const [lastTotal, setLastTotal] = useState<number>(0);
  const [lastXpGained, setLastXpGained] = useState<number>(0);

  const startQuiz = () => setCurrentScreen(AppScreen.Quiz);

  const showResults = (score: number, total: number, xpGained: number) => {
    setLastScore(score);
    setLastTotal(total);
    setLastXpGained(xpGained);
    setCurrentScreen(AppScreen.Results);
  };

  const finishQuizFlow = () => setCurrentScreen(AppScreen.Home);

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.Quiz:
        return <QuizScreen onQuizComplete={showResults} />;
      case AppScreen.Results:
        return <ResultScreen score={lastScore} totalQuestions={lastTotal} xpGained={lastXpGained} onPlayAgain={finishQuizFlow} />;
      case AppScreen.Leaderboard:
        return <LeaderboardScreen />;
      case AppScreen.Home:
      default:
        return <HomeScreen onStartQuiz={startQuiz} />;
    }
  };

  if (!currentUser) {
    return (
        <div className="bg-slate-50 min-h-screen font-sans flex flex-col items-center justify-center text-slate-800">
            <div className="w-full max-w-md mx-auto bg-white shadow-2xl rounded-2xl min-h-[90vh] md:min-h-[700px] max-h-[90vh] md:max-h-[800px] flex flex-col relative overflow-hidden">
                <AuthScreen />
            </div>
        </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans flex flex-col items-center justify-center text-slate-800">
      <div className="w-full max-w-md mx-auto bg-white shadow-2xl rounded-2xl min-h-[90vh] md:min-h-[700px] max-h-[90vh] md:max-h-[800px] flex flex-col relative overflow-hidden">
        <main className="flex-grow overflow-y-auto">
            {renderScreen()}
        </main>
        <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </div>
    </div>
  );
};

export default App;
