import React from 'react';
import { Question } from '../types/form';
import RadioQuestion from './RadioQuestion';
import SliderQuestion from './SliderQuestion';
import RankingQuestion from './RankingQuestion';

interface QuestionCardProps {
  question: Question;
  value: string | null;
  onChange: (questionId: string, value: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, value, onChange }) => {
  const handleChange = (newValue: string) => {
    onChange(question.id, newValue);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg">
      <div className="px-6 py-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {question.title}
        </h3>
        
        {question.description && (
          <p className="text-gray-600 mb-4 text-sm">
            {question.description}
          </p>
        )}
        
        {question.type === 'radio' && (
          <RadioQuestion
            id={question.id}
            options={question.options}
            value={value}
            onChange={handleChange}
          />
        )}
        
        {question.type === 'slider' && (
          <SliderQuestion
            id={question.id}
            options={question.options}
            value={value}
            onChange={handleChange}
          />
        )}
        
        {question.type === 'ranking' && (
          <RankingQuestion
            id={question.id}
            options={question.options}
            value={value}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionCard;