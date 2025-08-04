import React, { useState, useEffect } from 'react';
import { Keyboard, Trophy, Target, Clock, BarChart3, Settings, Info, Home, Play } from 'lucide-react';
import TitleScreen from './components/TitleScreen';
import LevelChart from './components/LevelChart';
import TypingScreen from './components/TypingScreen';
import ResultsScreen from './components/ResultsScreen';
import HowToPlay from './components/HowToPlay';
import SettingsScreen from './components/SettingsScreen';
import { GameState, Level, TypingSession } from './types/game';
import { levels } from './data/levels';

function App() {
  const [gameState, setGameState] = useState<GameState>('title');
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [typingSession, setTypingSession] = useState<TypingSession | null>(null);
  const [progress, setProgress] = useState<number[]>(() => {
    const saved = localStorage.getItem('typing-progress');
    return saved ? JSON.parse(saved) : Array(30).fill(0);
  });

  useEffect(() => {
    localStorage.setItem('typing-progress', JSON.stringify(progress));
  }, [progress]);

  const handleLevelSelect = (levelIndex: number) => {
    setCurrentLevel(levelIndex);
    setGameState('typing');
  };

  const handleLevelComplete = (session: TypingSession) => {
    setTypingSession(session);
    
    // Update progress
    const newProgress = [...progress];
    const score = Math.round(session.accuracy);
    if (score > newProgress[currentLevel]) {
      newProgress[currentLevel] = score;
      setProgress(newProgress);
    }
    
    setGameState('results');
  };

  const handleNextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setGameState('typing');
    } else {
      setGameState('levelChart');
    }
  };

  const handleRetry = () => {
    setGameState('typing');
  };

  const handleHome = () => {
    setGameState('title');
  };

  const currentLevelData = levels[currentLevel];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {gameState === 'title' && (
        <TitleScreen
          onStartGame={() => setGameState('levelChart')}
          onLevelChart={() => setGameState('levelChart')}
          onSettings={() => setGameState('settings')}
          onHowToPlay={() => setGameState('howToPlay')}
        />
      )}
      
      {gameState === 'levelChart' && (
        <LevelChart
          levels={levels}
          progress={progress}
          onLevelSelect={handleLevelSelect}
          onHome={handleHome}
        />
      )}
      
      {gameState === 'typing' && (
        <TypingScreen
          level={currentLevelData}
          levelNumber={currentLevel + 1}
          onComplete={handleLevelComplete}
          onHome={handleHome}
        />
      )}
      
      {gameState === 'results' && typingSession && (
        <ResultsScreen
          session={typingSession}
          level={currentLevelData}
          levelNumber={currentLevel + 1}
          onRetry={handleRetry}
          onNextLevel={handleNextLevel}
          onHome={handleHome}
          isLastLevel={currentLevel === levels.length - 1}
        />
      )}
      
      {gameState === 'howToPlay' && (
        <HowToPlay onBack={handleHome} />
      )}
      
      {gameState === 'settings' && (
        <SettingsScreen onBack={handleHome} />
      )}
    </div>
  );
}

export default App;