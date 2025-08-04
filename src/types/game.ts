export type GameState = 'title' | 'levelChart' | 'typing' | 'results' | 'howToPlay' | 'settings';

export interface Level {
  id: number;
  title: string;
  focus: string;
  description: string;
  practiceText: string;
  keyboardHighlight: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'home' | 'upper' | 'lower' | 'numbers' | 'symbols' | 'mixed' | 'sentences';
}

export interface TypingSession {
  startTime: number;
  endTime: number;
  text: string;
  userInput: string;
  errors: number;
  wpm: number;
  accuracy: number;
  keystrokes: number;
}