import React from 'react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isCurrentStepValid: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  showNext?: boolean;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  isCurrentStepValid,
  onPrevious,
  onNext,
  onSubmit,
  showNext = true
}) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  // Always show the Next button if showNext is not provided or true
  const shouldShowNext = (showNext ?? true) === true;
  
  return (
    <div className="flex justify-between mt-8">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstStep}
        className={`px-4 py-2 rounded-md ${isFirstStep
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100'
        }`}
      >
        ← Previous
      </button>
      
      {isLastStep ? (
        <button
          type="button"
          onClick={onSubmit}
          disabled={!isCurrentStepValid}
          className={`px-4 py-2 rounded-md ${!isCurrentStepValid
            ? 'bg-green-300 text-white cursor-not-allowed'
            : 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800'
          }`}
        >
          Submit
        </button>
      ) : shouldShowNext ? (
        <button
          type="button"
          onClick={onNext}
          disabled={!isCurrentStepValid}
          className={`px-4 py-2 rounded-md ${!isCurrentStepValid
            ? 'bg-blue-300 text-white cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
          }`}
        >
          Next →
        </button>
      ) : null}
    </div>
  );
};

export default FormNavigation;