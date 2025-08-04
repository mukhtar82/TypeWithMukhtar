import React from 'react';

interface VirtualKeyboardProps {
  highlightKeys: string[];
  pressedKey: string;
  className?: string;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  highlightKeys,
  pressedKey,
  className = ''
}) => {
  const keyRows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
  ];

  const getKeyClassName = (key: string) => {
    let className = 'min-w-[2.5rem] h-10 rounded-lg border border-gray-300 flex items-center justify-center text-sm font-medium transition-all duration-200 ';
    
    if (pressedKey === key) {
      className += 'bg-blue-500 text-white shadow-lg scale-95 ';
    } else if (highlightKeys.includes(key)) {
      className += 'bg-yellow-200 text-yellow-800 border-yellow-400 shadow-md ';
    } else {
      className += 'bg-white text-gray-700 hover:bg-gray-50 ';
    }
    
    return className;
  };

  const getSpecialKeyClassName = (isPressed = false) => {
    let className = 'h-10 rounded-lg border border-gray-300 flex items-center justify-center text-xs font-medium transition-all duration-200 ';
    
    if (isPressed) {
      className += 'bg-blue-500 text-white shadow-lg scale-95 ';
    } else {
      className += 'bg-gray-100 text-gray-600 hover:bg-gray-200 ';
    }
    
    return className;
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Virtual Keyboard</h3>
      
      <div className="space-y-2">
        {/* Number Row */}
        <div className="flex justify-center gap-1">
          {keyRows[0].map((key) => (
            <div key={key} className={getKeyClassName(key)}>
              {key}
            </div>
          ))}
          <div className={`${getSpecialKeyClassName()} px-4`}>
            Backspace
          </div>
        </div>

        {/* Top Row */}
        <div className="flex justify-center gap-1">
          <div className={`${getSpecialKeyClassName()} px-3`}>
            Tab
          </div>
          {keyRows[1].map((key) => (
            <div key={key} className={getKeyClassName(key)}>
              {key.toUpperCase()}
            </div>
          ))}
        </div>

        {/* Home Row */}
        <div className="flex justify-center gap-1">
          <div className={`${getSpecialKeyClassName()} px-4`}>
            Caps
          </div>
          {keyRows[2].map((key) => (
            <div key={key} className={getKeyClassName(key)}>
              {key.toUpperCase()}
            </div>
          ))}
          <div className={`${getSpecialKeyClassName()} px-6`}>
            Enter
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center gap-1">
          <div className={`${getSpecialKeyClassName(pressedKey === 'shift')} px-6`}>
            Shift
          </div>
          {keyRows[3].map((key) => (
            <div key={key} className={getKeyClassName(key)}>
              {key.toUpperCase()}
            </div>
          ))}
          <div className={`${getSpecialKeyClassName(pressedKey === 'shift')} px-6`}>
            Shift
          </div>
        </div>

        {/* Space Row */}
        <div className="flex justify-center gap-1">
          <div className={`${getSpecialKeyClassName()} px-3`}>
            Ctrl
          </div>
          <div className={`${getSpecialKeyClassName()} px-3`}>
            Win
          </div>
          <div className={`${getSpecialKeyClassName()} px-3`}>
            Alt
          </div>
          <div className={`${getSpecialKeyClassName(pressedKey === ' ')} px-20`}>
            Space
          </div>
          <div className={`${getSpecialKeyClassName()} px-3`}>
            Alt
          </div>
          <div className={`${getSpecialKeyClassName()} px-3`}>
            Win
          </div>
          <div className={`${getSpecialKeyClassName()} px-3`}>
            Ctrl
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-200 border border-yellow-400 rounded"></div>
          <span className="text-gray-600">Focus Keys</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span className="text-gray-600">Active Key</span>
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;