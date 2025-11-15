
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Trophy, Star, Award } from 'lucide-react';

const LeaderboardScreen: React.FC = () => {
  const { leaderboard, currentUser } = useAppContext();
  
  const getRankIcon = (rank: number) => {
    if (rank === 0) return <Trophy className="w-5 h-5 text-yellow-400" />;
    if (rank === 1) return <Trophy className="w-5 h-5 text-gray-400" />;
    if (rank === 2) return <Trophy className="w-5 h-5 text-yellow-600" />;
    return <Award className="w-5 h-5 text-slate-400" />;
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="p-6 text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
        <h2 className="text-2xl font-bold flex items-center justify-center">
            <Trophy className="w-7 h-7 mr-3"/>
            リーダーボード
        </h2>
      </header>
      
      <main className="flex-grow p-4 overflow-y-auto">
        <ul className="space-y-2">
          {leaderboard.map((user, index) => (
            <li 
              key={user.email} 
              className={`flex items-center p-3 rounded-xl shadow-sm transition-transform transform hover:scale-105 ${user.email === currentUser?.email ? 'bg-blue-100 border-2 border-blue-400' : 'bg-white'}`}
            >
              <div className="flex items-center justify-center w-10 font-bold text-slate-600">
                {getRankIcon(index)}
                <span className="ml-2">{index + 1}</span>
              </div>
              <div className="flex-grow ml-4">
                <p className="font-bold text-slate-800 truncate">
                  {user.email === currentUser?.email ? 'あなた' : user.email.split('@')[0]}
                </p>
              </div>
              <div className="flex items-center font-bold text-yellow-500">
                <Star className="w-4 h-4 mr-1"/>
                <span>{user.xp}</span>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default LeaderboardScreen;
