import React, { useState, useEffect } from 'react';
import { FormOption } from '../types/form';

interface SliderQuestionProps {
  id: string;
  options: FormOption[];
  value: string | null;
  onChange: (value: string) => void;
}

const SliderQuestion: React.FC<SliderQuestionProps> = ({ id, options, value, onChange }) => {
  const [sliderValue, setSliderValue] = useState<number>(value ? parseInt(value) : 3);
  
  useEffect(() => {
    if (value) {
      setSliderValue(parseInt(value));
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    onChange(newValue.toString());
  };

  const getLabel = (value: number) => {
    const option = options.find(opt => parseInt(opt.value) === value);
    return option ? option.label : '';
  };

  const getFaceIcon = (value: number) => {
    if (value <= 2) return '😞';
    if (value === 3) return '😐';
    return '😊';
  };

  return (
    <div className="mt-6 px-2">
      <div className="text-center mb-6">
        <span className="text-4xl">{getFaceIcon(sliderValue)}</span>
        <p className="mt-2 text-lg font-medium text-blue-700">{getLabel(sliderValue)}</p>
      </div>
      
      <div className="relative mb-6">
        <input
          id={id}
          type="range"
          min="1"
          max="5"
          step="1"
          value={sliderValue}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        
        <div className="flex justify-between w-full px-2 mt-4 text-xs text-gray-600">
          {options.map((option) => (
            <span key={option.value} className="text-center">
              {option.value}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>Very dissatisfied</span>
        <span>Very satisfied</span>
      </div>
    </div>
  );
};

export default SliderQuestion;