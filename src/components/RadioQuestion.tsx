import React from 'react';
import { FormOption } from '../types/form';

interface RadioQuestionProps {
  id: string;
  options: FormOption[];
  value: string | null;
  onChange: (value: string) => void;
}

const RadioQuestion: React.FC<RadioQuestionProps> = ({ id, options, value, onChange }) => {
  return (
    <div className="space-y-3 mt-4">
      {options.map((option) => (
        <div 
          key={option.value}
          className={`relative flex items-start p-4 rounded-lg border-2 transition-all duration-200 ${
            value === option.value 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => onChange(option.value)}
        >
          <div className="min-w-0 flex-1 text-sm">
            <label 
              htmlFor={`${id}-${option.value}`}
              className="font-medium text-gray-700 select-none cursor-pointer"
            >
              {option.label}
            </label>
          </div>
          <div className="ml-3 flex items-center h-5">
            <input
              id={`${id}-${option.value}`}
              name={id}
              type="radio"
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioQuestion;