import React from 'react';
import { Keyboard, BarChart3, Settings, Info, Play } from 'lucide-react';

interface TitleScreenProps {
  onStartGame: () => void;
  onLevelChart: () => void;
  onSettings: () => void;
  onHowToPlay: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({
  onStartGame,
  onLevelChart,
  onSettings,
  onHowToPlay
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Keyboard size={80} className="mx-auto text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Typing with Mukhtar
          </h1>
          <p className="text-gray-600 text-lg">
            👋 Welcome to your personal typing trainer!
          </p>
        </div>

        {/* Menu Buttons */}
        <div className="space-y-4">
          <button
            onClick={onStartGame}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Play size={24} />
            Start Game
          </button>
          
          <button
            onClick={onLevelChart}
            className="w-full bg-white text-gray-800 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-1"
          >
            <BarChart3 size={24} />
            Level Chart
          </button>
          
          <button
            onClick={onSettings}
            className="w-full bg-white text-gray-800 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-1"
          >
            <Settings size={24} />
            Settings
          </button>
          
          <button
            onClick={onHowToPlay}
            className="w-full bg-white text-gray-800 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-1"
          >
            <Info size={24} />
            How to Play
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p>Train your fingers, boost your speed!</p>
        </div>
      </div>
    </div>
  );
};

export default TitleScreen;