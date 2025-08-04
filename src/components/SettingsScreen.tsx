import React, { useState } from 'react';
import { ArrowLeft, Volume2, VolumeX, Palette, Monitor } from 'lucide-react';

interface SettingsScreenProps {
  onBack: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [theme, setTheme] = useState('light');
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [fontSize, setFontSize] = useState('medium');

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
      localStorage.removeItem('typing-progress');
      alert('Progress has been reset successfully!');
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Audio Settings */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              {soundEnabled ? (
                <Volume2 className="text-indigo-600" size={24} />
              ) : (
                <VolumeX className="text-gray-400" size={24} />
              )}
              <h2 className="text-xl font-semibold text-gray-800">Audio Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Sound Effects</h3>
                  <p className="text-sm text-gray-600">Play sounds for keystrokes and errors</p>
                </div>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    soundEnabled ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      soundEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Display Settings */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="text-indigo-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-800">Display Settings</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Font Size</h3>
                <div className="flex gap-2">
                  {['small', 'medium', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                        fontSize === size
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Show Virtual Keyboard</h3>
                  <p className="text-sm text-gray-600">Display the on-screen keyboard during practice</p>
                </div>
                <button
                  onClick={() => setShowKeyboard(!showKeyboard)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showKeyboard ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showKeyboard ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="text-indigo-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-800">Theme Settings</h2>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Color Theme</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'light', name: 'Light', colors: 'bg-white border-gray-300' },
                  { id: 'dark', name: 'Dark', colors: 'bg-gray-800 border-gray-600' },
                  { id: 'auto', name: 'Auto', colors: 'bg-gradient-to-r from-white to-gray-800' }
                ].map((themeOption) => (
                  <button
                    key={themeOption.id}
                    onClick={() => setTheme(themeOption.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      theme === themeOption.id
                        ? 'border-indigo-600 shadow-lg'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className={`w-full h-8 rounded mb-2 ${themeOption.colors}`}></div>
                    <div className="text-sm font-medium text-gray-800">{themeOption.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Management</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-medium text-red-800 mb-2">Reset Progress</h3>
                <p className="text-sm text-red-700 mb-4">
                  This will permanently delete all your progress and statistics. This action cannot be undone.
                </p>
                <button
                  onClick={handleResetProgress}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Reset All Progress
                </button>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">About Typing with Mukhtar</h2>
            <div className="text-gray-700 space-y-2">
              <p>Version 1.0.0</p>
              <p>A comprehensive typing trainer designed to help you master touch typing through progressive lessons.</p>
              <p className="text-sm">Created with ❤️ for aspiring typists everywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;