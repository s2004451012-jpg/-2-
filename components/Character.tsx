
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { CHARACTER_STAGES } from '../constants';

const Character: React.FC = () => {
  const { currentUser } = useAppContext();
  const userXp = currentUser?.xp ?? 0;

  const character = [...CHARACTER_STAGES].reverse().find(stage => userXp >= stage.xpRequired) || CHARACTER_STAGES[0];
  const nextStage = CHARACTER_STAGES.find(stage => userXp < stage.xpRequired);

  const progressPercentage = nextStage ? ((userXp - character.xpRequired) / (nextStage.xpRequired - character.xpRequired)) * 100 : 100;

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg w-full">
      <div className="text-7xl mb-2 relative">
          <div className="animate-bounce">{character.emoji}</div>
      </div>
      <div className="text-center text-white">
        <p className="font-bold text-lg">{character.name}</p>
        <div className="w-48 mx-auto mt-2">
            <div className="w-full bg-black/20 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: `${progressPercentage}%`}}></div>
            </div>
             {nextStage && <p className="text-xs opacity-80 mt-1">次のレベルまで {nextStage.xpRequired - userXp} XP</p>}
        </div>
      </div>
    </div>
  );
};

export default Character;
