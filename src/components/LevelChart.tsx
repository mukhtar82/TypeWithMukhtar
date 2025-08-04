import React from 'react';
import { Home, Lock, CheckCircle, Star } from 'lucide-react';
import { Level } from '../types/game';

interface LevelChartProps {
  levels: Level[];
  progress: number[];
  onLevelSelect: (levelIndex: number) => void;
  onHome: () => void;
}

const LevelChart: React.FC<LevelChartProps> = ({
  levels,
  progress,
  onLevelSelect,
  onHome
}) => {
  const getDifficultyColor = (difficulty: Level['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'advanced': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'expert': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStarRating = (score: number) => {
    if (score >= 95) return 3;
    if (score >= 85) return 2;
    if (score >= 70) return 1;
    return 0;
  };

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onHome}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Home size={20} />
            Home
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Level Chart</h1>
          <div></div>
        </div>
        
        <div className="text-center text-gray-600 mb-8">
          <p>All levels are unlocked! Choose any level to practice your typing skills.</p>
        </div>
      </div>

      {/* Level Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {levels.map((level, index) => {
            const score = progress[index];
            const stars = getStarRating(score);
            const isCompleted = score > 0;

            return (
              <div
                key={level.id}
                onClick={() => onLevelSelect(index)}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Level Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-indigo-600">
                    Level {level.id}
                  </span>
                  {isCompleted && (
                    <CheckCircle size={20} className="text-green-500" />
                  )}
                </div>

                {/* Level Title */}
                <h3 className="font-semibold text-gray-800 mb-2 leading-tight">
                  {level.title}
                </h3>

                {/* Level Focus */}
                <p className="text-sm text-gray-600 mb-3">
                  Focus: {level.focus}
                </p>

                {/* Difficulty Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(level.difficulty)}`}>
                    {level.difficulty}
                  </span>
                </div>

                {/* Progress */}
                {isCompleted ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Best Score:</span>
                      <span className="font-semibold text-gray-800">{score}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={`${
                            star <= stars
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500">
                    Not attempted yet
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LevelChart;