import React, { useState, useEffect } from 'react';
import { FormOption } from '../types/form';

interface SliderQuestionProps {
  id: string;
  options: FormOption[];
  value: string | null;
  onChange: (value: string) => void;
}

interface SliderValues {
  [key: string]: number;
}

const SliderQuestion: React.FC<SliderQuestionProps> = ({ id, options, value, onChange }) => {
  const [sliderValues, setSliderValues] = useState<SliderValues>(() => {
    const initialValues: SliderValues = {};
    options.forEach(option => {
      initialValues[option.value] = 3; // Default to middle value (3)
    });
    return initialValues;
  });

  // Initialize from saved value if it exists
  useEffect(() => {
    if (value) {
      try {
        const savedValues = JSON.parse(value);
        setSliderValues(prev => ({
          ...prev,
          ...savedValues
        }));
      } catch (e) {
        console.error('Error parsing saved slider values:', e);
      }
    }
  }, [value]);

  const handleSliderChange = (optionValue: string, newValue: number) => {
    const newValues = {
      ...sliderValues,
      [optionValue]: newValue
    };
    setSliderValues(newValues);
    
    // Store as JSON string
    onChange(JSON.stringify(newValues));
  };

  const getImportanceLabel = (value: number) => {
    switch(value) {
      case 1: return 'Least Important';
      case 2: return 'Slightly Important';
      case 3: return 'Neutral';
      case 4: return 'Important';
      case 5: return 'Most Important';
      default: return '';
    }
  };

  return (
    <div className="space-y-8">
      {options.map((option) => (
        <div key={option.value} className="space-y-3">
          <div className="flex justify-between items-center">
            <label htmlFor={`${id}-${option.value}`} className="block text-sm font-medium text-gray-700">
              {option.label}
            </label>
            <span className="text-sm font-medium text-blue-600">
              {getImportanceLabel(sliderValues[option.value])}
            </span>
          </div>
          
          <div className="relative">
            <div className="flex items-center">
              <input
                id={`${id}-${option.value}`}
                type="range"
                min="1"
                max="5"
                step="1"
                value={sliderValues[option.value] || 3}
                onChange={(e) => handleSliderChange(option.value, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            
            {/* Number indicators that align with the slider steps */}
            <div className="flex justify-between mt-1 px-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <div 
                  key={num}
                  className={`w-5 h-5 flex items-center justify-center text-xs font-medium rounded-full
                    ${sliderValues[option.value] === num 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-500'}`}
                >
                  {num}
                </div>
              ))}
            </div>
            
            {/* Labels for the ends of the scale */}
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>Least</span>
              <span>Most</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderQuestion;