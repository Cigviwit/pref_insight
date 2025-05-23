import React from 'react';

interface SuccessMessageProps {
  // No props needed after removing the reset functionality
}

const SuccessMessage: React.FC<SuccessMessageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
      <div className="text-5xl mb-6 animate-bounce">
        ✅
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Thank You!
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-md">
        Your responses have been successfully submitted. This information will help your healthcare team provide the best care possible.
      </p>
      
      {/* Removed Complete Another Form button as per user request */}
    </div>
  );
};

export default SuccessMessage;