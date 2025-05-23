import React from 'react';

const FormHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-3xl">
        💊
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
        Patient Treatment Preferences
      </h1>
      <p className="mt-2 text-center text-gray-600 max-w-lg">
        Please complete this questionnaire to help us understand your treatment preferences and provide you with the best possible care.
      </p>
    </div>
  );
};

export default FormHeader;