
import React, { useState, useEffect, useMemo } from 'react';
import { questions as allQuestions } from '../data/questions';
import { Question, Language } from '../types';
import { useAppContext } from '../context/AppContext';
import { QUESTIONS_PER_QUIZ, XP_PER_CORRECT_ANSWER } from '../constants';
import { CheckCircle, XCircle, ChevronRight, BookOpen } from 'lucide-react';

interface QuizScreenProps {
  onQuizComplete: (score: number, total: number, xpGained: number) => void;
}

// Helper function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizScreen: React.FC<QuizScreenProps> = ({ onQuizComplete }) => {
  const { language, addResultToHistory } = useAppContext();
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [xpGained, setXpGained] = useState(0);

  useEffect(() => {
    setQuizQuestions(shuffleArray(allQuestions).slice(0, QUESTIONS_PER_QUIZ));
  }, []);

  const currentQuestion = useMemo(() => quizQuestions[currentQuestionIndex], [quizQuestions, currentQuestionIndex]);

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswerIndex(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
      setXpGained(prevXp => prevXp + XP_PER_CORRECT_ANSWER);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
    } else {
      addResultToHistory({ score, total: quizQuestions.length, xpGained });
      onQuizComplete(score, quizQuestions.length, xpGained);
    }
  };

  if (!currentQuestion) {
    return <div className="p-4 text-center">Loading questions...</div>;
  }

  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return 'bg-white hover:bg-blue-50 border-slate-300';
    }
    if (index === currentQuestion.correctAnswerIndex) {
      return 'bg-green-100 border-green-500 text-green-800 font-bold';
    }
    if (index === selectedAnswerIndex) {
      return 'bg-red-100 border-red-500 text-red-800';
    }
    return 'bg-slate-100 border-slate-200 text-slate-500';
  };

  const renderExplanation = () => {
    const explanationText = currentQuestion.explanation[language] || currentQuestion.explanation.ja;
    const translationTitle = {
      en: 'English Translation',
      vi: 'Bản dịch tiếng Việt',
      ja: ''
    };

    return (
      <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <h3 className="font-bold text-blue-800 mb-2 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          解説
        </h3>
        <p className="text-slate-700">{currentQuestion.explanation.ja}</p>
        {language !== Language.JA && (
          <div className="mt-3 pt-3 border-t border-blue-200">
            <h4 className="font-semibold text-blue-700 text-sm">{translationTitle[language]}</h4>
            <p className="text-slate-600 text-sm">{explanationText}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <header className="p-4 bg-slate-100 border-b">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg text-slate-700">問題 {currentQuestionIndex + 1} / {quizQuestions.length}</h2>
          <div className="text-lg font-bold text-blue-600">Score: {score}</div>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-grow p-5 overflow-y-auto">
        <p className="text-lg font-semibold leading-relaxed mb-6">{currentQuestion.question}</p>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${getButtonClass(index)}`}
            >
              <span className="flex-1">{option}</span>
              {isAnswered && index === currentQuestion.correctAnswerIndex && <CheckCircle className="text-green-600" />}
              {isAnswered && index === selectedAnswerIndex && index !== currentQuestion.correctAnswerIndex && <XCircle className="text-red-600" />}
            </button>
          ))}
        </div>
        {isAnswered && renderExplanation()}
      </main>

      {isAnswered && (
        <footer className="p-4 border-t bg-white">
          <button
            onClick={handleNextQuestion}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center text-lg transition-transform transform hover:scale-105"
          >
            {currentQuestionIndex < quizQuestions.length - 1 ? '次の問題へ' : '結果を見る'}
            <ChevronRight className="w-6 h-6 ml-2" />
          </button>
        </footer>
      )}
    </div>
  );
};

export default QuizScreen;
