
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Language, User } from '../types';
import Character from './Character';
import InstallModal from './InstallModal';
import { Globe, BookOpen, ChevronRight, Download, Star, Flame } from 'lucide-react';

interface HomeScreenProps {
  onStartQuiz: () => void;
}

const UserStats: React.FC<{ user: User }> = ({ user }) => (
    <div className="flex justify-around bg-black/20 rounded-xl p-3 mb-4 text-white">
        <div className="text-center">
            <div className="flex items-center justify-center font-bold text-xl">
                <Star className="w-5 h-5 mr-1 text-yellow-300" />
                {user.xp}
            </div>
            <div className="text-xs opacity-80">XP</div>
        </div>
        <div className="text-center">
            <div className="flex items-center justify-center font-bold text-xl">
                <Flame className="w-5 h-5 mr-1 text-orange-400" />
                {user.streak}
            </div>
            <div className="text-xs opacity-80">STREAK</div>
        </div>
    </div>
);


const HomeScreen: React.FC<HomeScreenProps> = ({ onStartQuiz }) => {
  const { language, setLanguage, currentUser } = useAppContext();
  const [isInstallModalOpen, setInstallModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6">
      <header className="text-center">
        <h1 className="text-2xl font-bold">ビルクリーニング特定技能2号</h1>
        <p className="text-lg font-light">評価試験 練習アプリ</p>
      </header>

      {currentUser && <UserStats user={currentUser} />}

      <main className="flex-grow flex flex-col items-center justify-center text-center my-2">
        <Character />
      </main>

      <footer className="space-y-4">
        <div className="flex items-center justify-center bg-white/20 p-2 rounded-full">
            <Globe className="w-5 h-5 mr-2" />
            <div className="flex space-x-1">
                 {(Object.values(Language) as Language[]).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        language === lang
                            ? 'bg-white text-blue-600 font-bold shadow'
                            : 'bg-transparent text-white/80'
                        }`}
                    >
                        {lang === 'ja' ? '日本語' : lang === 'en' ? 'English' : 'Tiếng Việt'}
                    </button>
                ))}
            </div>
        </div>
        
        <button
          onClick={() => setInstallModalOpen(true)}
          className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center transition-transform transform hover:scale-105"
        >
          <Download className="w-5 h-5 mr-2" />
          インストール方法
        </button>

        <button
          onClick={onStartQuiz}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-4 px-4 rounded-xl flex items-center justify-between text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          <div className="flex items-center">
            <BookOpen className="w-6 h-6 mr-3" />
            <span>クイズを始める</span>
          </div>
          <ChevronRight className="w-6 h-6" />
        </button>
      </footer>
      
      <InstallModal isOpen={isInstallModalOpen} onClose={() => setInstallModalOpen(false)} />
    </div>
  );
};

export default HomeScreen;
