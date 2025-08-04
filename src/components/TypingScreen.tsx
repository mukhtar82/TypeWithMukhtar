import React, { useState, useEffect, useRef } from 'react';
import { Home, Clock, Target, Zap } from 'lucide-react';
import { Level, TypingSession } from '../types/game';
import VirtualKeyboard from './VirtualKeyboard';

interface TypingScreenProps {
  level: Level;
  levelNumber: number;
  onComplete: (session: TypingSession) => void;
  onHome: () => void;
}

const TypingScreen: React.FC<TypingScreenProps> = ({
  level,
  levelNumber,
  onComplete,
  onHome
}) => {
  const [userInput, setUserInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWPM] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isCompleted, setIsCompleted] = useState(false);
  const [pressedKey, setPressedKey] = useState<string>('');
  const [showError, setShowError] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const practiceText = level.practiceText;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (userInput.length === 1 && startTime === null) {
      setStartTime(Date.now());
    }

    if (userInput.length > 0 && startTime) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
      const wordsTyped = userInput.length / 5; // standard word length
      setWPM(Math.round(wordsTyped / timeElapsed));
      
      const correctChars = userInput.split('').filter((char, index) => char === practiceText[index]).length;
      setAccuracy(Math.round((correctChars / userInput.length) * 100));
    }
  }, [userInput, startTime, practiceText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCompleted) return;

    const value = e.target.value;
    const expectedChar = practiceText[value.length - 1];
    const typedChar = value[value.length - 1];

    if (value.length > practiceText.length) return;

    if (typedChar && typedChar !== expectedChar) {
      setErrors(prev => prev + 1);
      setShowError(true);
      setTimeout(() => setShowError(false), 500);
      // Play error sound here if implemented
      return;
    }

    setUserInput(value);
    setCurrentIndex(value.length);
    setPressedKey(typedChar);

    if (value === practiceText) {
      setIsCompleted(true);
      const session: TypingSession = {
        startTime: startTime!,
        endTime: Date.now(),
        text: practiceText,
        userInput: value,
        errors,
        wpm,
        accuracy,
        keystrokes: value.length
      };
      setTimeout(() => onComplete(session), 1000);
    }
  };

  const renderText = () => {
    return practiceText.split('').map((char, index) => {
      let className = 'text-lg font-mono ';
      
      if (index < currentIndex) {
        className += userInput[index] === char ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
      } else if (index === currentIndex) {
        className += 'bg-blue-200 text-blue-800 animate-pulse';
      } else {
        className += 'text-gray-400';
      }

      return (
        <span key={index} className={`${className} px-1 py-0.5 rounded`}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onHome}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Home size={20} />
            Home
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Level {levelNumber}: {level.title}
          </h1>
          <div></div>
        </div>

        {/* Level Info */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {level.focus}
            </h2>
            <p className="text-gray-600">{level.description}</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-3">
              <Clock className="mx-auto mb-1 text-blue-600" size={20} />
              <div className="text-lg font-bold text-blue-600">{wpm}</div>
              <div className="text-sm text-gray-600">WPM</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <Target className="mx-auto mb-1 text-green-600" size={20} />
              <div className="text-lg font-bold text-green-600">{accuracy}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <Zap className="mx-auto mb-1 text-red-600" size={20} />
              <div className="text-lg font-bold text-red-600">{errors}</div>
              <div className="text-sm text-gray-600">Errors</div>
            </div>
          </div>
        </div>

        {/* Practice Text */}
        <div className={`bg-white rounded-xl p-6 shadow-lg mb-6 ${showError ? 'animate-pulse bg-red-50 border-2 border-red-300' : ''}`}>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Practice Text:</h3>
            <div className="p-4 bg-gray-50 rounded-lg leading-relaxed">
              {renderText()}
            </div>
          </div>
          
          {/* Hidden Input */}
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-lg"
            placeholder="Start typing here..."
            autoComplete="off"
            spellCheck="false"
          />
        </div>

        {/* Virtual Keyboard */}
        <VirtualKeyboard
          highlightKeys={level.keyboardHighlight}
          pressedKey={pressedKey}
          className="mb-6"
        />

        {/* Progress Bar */}
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-600">
              {currentIndex}/{practiceText.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(currentIndex / practiceText.length) * 100}%` }}
            ></div>
          </div>
          {isCompleted && (
            <div className="text-center mt-4 text-green-600 font-semibold">
              🎉 Level Complete! Great job!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypingScreen;