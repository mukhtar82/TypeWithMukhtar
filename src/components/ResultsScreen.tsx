import React from 'react';
import { Home, RotateCcw, ArrowRight, Trophy, Target, Clock, Zap, Star } from 'lucide-react';
import { TypingSession, Level } from '../types/game';

interface ResultsScreenProps {
  session: TypingSession;
  level: Level;
  levelNumber: number;
  onRetry: () => void;
  onNextLevel: () => void;
  onHome: () => void;
  isLastLevel: boolean;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  session,
  level,
  levelNumber,
  onRetry,
  onNextLevel,
  onHome,
  isLastLevel
}) => {
  const getStarRating = (accuracy: number) => {
    if (accuracy >= 95) return 3;
    if (accuracy >= 85) return 2;
    if (accuracy >= 70) return 1;
    return 0;
  };

  const getGrade = (accuracy: number) => {
    if (accuracy >= 95) return { grade: 'A+', color: 'text-green-600' };
    if (accuracy >= 90) return { grade: 'A', color: 'text-green-600' };
    if (accuracy >= 85) return { grade: 'B+', color: 'text-blue-600' };
    if (accuracy >= 80) return { grade: 'B', color: 'text-blue-600' };
    if (accuracy >= 75) return { grade: 'C+', color: 'text-yellow-600' };
    if (accuracy >= 70) return { grade: 'C', color: 'text-yellow-600' };
    return { grade: 'D', color: 'text-red-600' };
  };

  const stars = getStarRating(session.accuracy);
  const grade = getGrade(session.accuracy);
  const timeTaken = Math.round((session.endTime - session.startTime) / 1000);

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <Trophy size={80} className="mx-auto text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Level Complete!
          </h1>
          <p className="text-xl text-gray-600">
            Level {levelNumber}: {level.title}
          </p>
        </div>

        {/* Results Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          {/* Grade and Stars */}
          <div className="text-center mb-8">
            <div className={`text-6xl font-bold ${grade.color} mb-2`}>
              {grade.grade}
            </div>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3].map((star) => (
                <Star
                  key={star}
                  size={32}
                  className={`${
                    star <= stars
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">
              {stars === 3 && "Outstanding performance!"}
              {stars === 2 && "Great job!"}
              {stars === 1 && "Good work!"}
              {stars === 0 && "Keep practicing!"}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="mx-auto mb-2 text-blue-600" size={24} />
              <div className="text-2xl font-bold text-blue-600">{session.wpm}</div>
              <div className="text-sm text-gray-600">WPM</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Target className="mx-auto mb-2 text-green-600" size={24} />
              <div className="text-2xl font-bold text-green-600">{Math.round(session.accuracy)}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Zap className="mx-auto mb-2 text-red-600" size={24} />
              <div className="text-2xl font-bold text-red-600">{session.errors}</div>
              <div className="text-sm text-gray-600">Errors</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="mx-auto mb-2 text-purple-600" size={24} />
              <div className="text-2xl font-bold text-purple-600">{timeTaken}s</div>
              <div className="text-sm text-gray-600">Time</div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Keystrokes:</span>
              <span className="font-semibold">{session.keystrokes}</span>
            </div>
            <div className="flex justify-between">
              <span>Correct Characters:</span>
              <span className="font-semibold">{session.keystrokes - session.errors}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRetry}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            <RotateCcw size={20} />
            Retry
          </button>
          
          {!isLastLevel ? (
            <button
              onClick={onNextLevel}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Next Level
              <ArrowRight size={20} />
            </button>
          ) : (
            <div className="text-center p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                🎉 Congratulations!
              </p>
              <p className="text-gray-600">
                You've completed all levels! You're now a typing master!
              </p>
            </div>
          )}
          
          <button
            onClick={onHome}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <Home size={20} />
            Home
          </button>
        </div>

        {/* Motivational Message */}
        <div className="text-center mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <p className="text-gray-700">
            {session.accuracy >= 95 && "Perfect accuracy! You're a typing champion! 🏆"}
            {session.accuracy >= 85 && session.accuracy < 95 && "Excellent work! Keep up the great typing! 👏"}
            {session.accuracy >= 70 && session.accuracy < 85 && "Good job! Practice makes perfect! 💪"}
            {session.accuracy < 70 && "Keep practicing! Every keystroke makes you better! 🎯"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;