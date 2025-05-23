import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  // Calculate progress as a percentage of completed steps
  // Add 1 to currentStep since it's 0-based for the question number
  const currentQuestion = currentStep + 1;
  const progress = Math.round((currentQuestion / totalSteps) * 100);
  
  return (
    <div className="w-full mt-2 mb-6">
      <div className="flex justify-between mb-1 text-sm text-blue-700">
        <span>Question {currentQuestion} of {totalSteps}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;