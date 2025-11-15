
import React from 'react';
import { useAppContext } from '../context/AppContext';
import Character from './Character';
import { Repeat, Calendar, Star } from 'lucide-react';
import { CHARACTER_STAGES } from '../constants';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  xpGained: number;
  onPlayAgain: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, xpGained, onPlayAgain }) => {
  const { currentUser } = useAppContext();
  
  const user = currentUser!; // We can assume user exists on this screen
  const previousXp = user.xp - xpGained;

  // Find the character stage before and after this quiz
  const previousStage = [...CHARACTER_STAGES].reverse().find(s => previousXp >= s.xpRequired) || CHARACTER_STAGES[0];
  const currentStage = [...CHARACTER_STAGES].reverse().find(s => user.xp >= s.xpRequired) || CHARACTER_STAGES[0];
  const didLevelUp = currentStage.level > previousStage.level;

  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  
  const getResultMessage = () => {
    if (percentage === 100) return { text: "パーフェクト！素晴らしい！", color: "text-yellow-400" };
    if (percentage >= 80) return { text: "高得点！おめでとう！", color: "text-green-500" };
    if (percentage >= 50) return { text: "合格ライン！その調子！", color: "text-blue-500" };
    return { text: "もう一息！頑張ろう！", color: "text-red-500" };
  };

  const message = getResultMessage();
  const evolutionMessage = didLevelUp ? currentStage.message : '';

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="p-6 text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <h2 className="text-2xl font-bold">クイズ結果</h2>
      </header>
      
      <main className="flex-grow p-6 overflow-y-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center mb-6">
          <h3 className={`text-xl font-bold mb-2 ${message.color}`}>{message.text}</h3>
          <p className="text-6xl font-bold text-slate-800 my-4">{score}<span className="text-3xl font-normal text-slate-500"> / {totalQuestions}</span></p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="font-bold text-lg text-yellow-500 mt-3">+ {xpGained} XP</p>
        </div>

        <div className="text-center mb-6">
          <Character />
          {didLevelUp && evolutionMessage && (
            <p className="mt-2 font-semibold text-yellow-600 animate-pulse">{evolutionMessage}</p>
          )}
        </div>
        
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg mb-3 flex items-center text-slate-700">
            <Calendar className="w-5 h-5 mr-2 text-indigo-500" />
            最近の記録
          </h3>
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {user.history.length > 0 ? (
              user.history.map((result, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                  <span className="text-sm text-slate-500">{result.date}</span>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-yellow-600 text-sm">+{result.xpGained} XP</span>
                    <span className="font-bold text-slate-700 flex items-center">
                      <Star className={`w-4 h-4 mr-1 ${result.score === result.total ? 'text-yellow-400 fill-current' : 'text-slate-400'}`} />
                      {result.score} / {result.total}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center text-slate-500 p-4">まだ記録がありません。</p>
            )}
          </ul>
        </div>
      </main>

      <footer className="p-4 border-t bg-white">
        <button
          onClick={onPlayAgain}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center text-lg transition-transform transform hover:scale-105"
        >
          <Repeat className="w-5 h-5 mr-2" />
          ホームに戻る
        </button>
      </footer>
    </div>
  );
};

export default ResultScreen;
