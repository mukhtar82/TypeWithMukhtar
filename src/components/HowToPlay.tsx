import React from 'react';
import { ArrowLeft, Target, Keyboard, BarChart3, Clock } from 'lucide-react';

interface HowToPlayProps {
  onBack: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-800">How to Play</h1>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Objective */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-indigo-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-800">🎯 Objective</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Learn typing step by step</li>
              <li>• Focus on one or two keys per level</li>
              <li>• Get a chart showing keys before you start</li>
              <li>• Improve speed and accuracy gradually</li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 font-semibold">
                💡 Tip: Always return your fingers to the home row (A S D F G H J K L ;)!
              </p>
            </div>
          </div>

          {/* Keyboard Layout */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Keyboard className="text-indigo-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-800">🧱 Keyboard Layout</h2>
            </div>
            <div className="space-y-3 font-mono text-lg">
              <div>
                <span className="font-semibold text-gray-700">Upper Row:</span>
                <span className="ml-4">Q W E R T Y U I O P</span>
              </div>
              <div className="bg-yellow-50 p-2 rounded">
                <span className="font-semibold text-yellow-800">Home Row:</span>
                <span className="ml-4 text-yellow-800">A S D F G H J K L ;</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Lower Row:</span>
                <span className="ml-4">Z X C V B N M , . /</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Number Row:</span>
                <span className="ml-4">` 1 2 3 4 5 6 7 8 9 0 - =</span>
              </div>
            </div>
          </div>

          {/* Game Flow */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="text-indigo-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-800">🧠 Game Flow</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Level Preview</h3>
                  <p className="text-gray-600">See which keys you'll practice and the pattern to type</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Practice Typing</h3>
                  <p className="text-gray-600">Type the practice text with live feedback and error alerts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">View Results</h3>
                  <p className="text-gray-600">See your speed, accuracy, and earn stars based on performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scoring */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-indigo-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-800">⭐ Scoring System</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⭐⭐⭐</div>
                <div className="font-semibold text-yellow-800">3 Stars</div>
                <div className="text-sm text-yellow-700">95%+ Accuracy</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⭐⭐</div>
                <div className="font-semibold text-blue-800">2 Stars</div>
                <div className="text-sm text-blue-700">85-94% Accuracy</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⭐</div>
                <div className="font-semibold text-green-800">1 Star</div>
                <div className="text-sm text-green-700">70-84% Accuracy</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">🎯 Focus on Accuracy</h3>
                <p className="text-sm">Speed will come naturally with practice. Focus on hitting the right keys first.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🏠 Home Row Position</h3>
                <p className="text-sm">Keep your fingers on ASDF (left hand) and JKL; (right hand) when not typing.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">👁️ Don't Look Down</h3>
                <p className="text-sm">Try to type without looking at the keyboard. Use the virtual keyboard for reference.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">⏱️ Practice Daily</h3>
                <p className="text-sm">Regular practice for 15-30 minutes daily will improve your skills quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowToPlay;
