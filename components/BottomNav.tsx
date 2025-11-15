
import React from 'react';
import { AppScreen } from '../types';
import { Home, Trophy, LogOut } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface BottomNavProps {
  currentScreen: AppScreen;
  setCurrentScreen: (screen: AppScreen) => void;
}

const NavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${
        isActive ? 'text-blue-500' : 'text-slate-500 hover:text-blue-500'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, setCurrentScreen }) => {
  const { logout } = useAppContext();
  
  const isNavVisible = [AppScreen.Home, AppScreen.Leaderboard].includes(currentScreen);
  if (!isNavVisible) return null;

  return (
    <nav className="flex justify-around items-center bg-white border-t border-slate-200 shadow-inner h-16">
      <NavItem
        label="ホーム"
        icon={<Home className="w-6 h-6" />}
        isActive={currentScreen === AppScreen.Home}
        onClick={() => setCurrentScreen(AppScreen.Home)}
      />
      <NavItem
        label="ランキング"
        icon={<Trophy className="w-6 h-6" />}
        isActive={currentScreen === AppScreen.Leaderboard}
        onClick={() => setCurrentScreen(AppScreen.Leaderboard)}
      />
      <NavItem
        label="ログアウト"
        icon={<LogOut className="w-6 h-6" />}
        isActive={false}
        onClick={logout}
      />
    </nav>
  );
};

export default BottomNav;
