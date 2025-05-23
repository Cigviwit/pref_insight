import React, { useState, useCallback } from 'react';
import { FormOption } from '../types/form';

interface RankingQuestionProps {
  id: string;
  options: FormOption[];
  value: string | null;
  onChange: (value: string) => void;
}

const RankingQuestion: React.FC<RankingQuestionProps> = ({ id, options, value, onChange }) => {
  const [rankedOptions, setRankedOptions] = useState<FormOption[]>([]);
  const [availableOptions, setAvailableOptions] = useState<FormOption[]>([...options]);

  const handleRankOption = useCallback((option: FormOption) => {
    // Add to ranked options
    const newRanked = [...rankedOptions, option];
    setRankedOptions(newRanked);
    
    // Remove from available options
    const newAvailable = availableOptions.filter(opt => opt.value !== option.value);
    setAvailableOptions(newAvailable);

    // Update form value with comma-separated ranked values
    onChange(newRanked.map(opt => opt.value).join(','));
  }, [rankedOptions, availableOptions, onChange]);

  const handleRemoveRanked = useCallback((option: FormOption, index: number) => {
    // Remove from ranked options
    const newRanked = rankedOptions.filter((_, i) => i !== index);
    setRankedOptions(newRanked);
    
    // Add back to available options
    setAvailableOptions(prev => [...prev, option].sort((a, b) => 
      a.label.localeCompare(b.label)
    ));

    // Update form value with comma-separated ranked values
    onChange(newRanked.map(opt => opt.value).join(','));
  }, [rankedOptions, onChange]);

  return (
    <div className="space-y-4">
      {/* Ranked Items */}
      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Your ranking (drag to reorder):</h4>
        <div className="space-y-2">
          {rankedOptions.length === 0 ? (
            <p className="text-sm text-gray-500 italic">No items ranked yet</p>
          ) : (
            <div className="space-y-2">
              {rankedOptions.map((option, index) => (
                <div 
                  key={`ranked-${option.value}`}
                  className="flex items-center bg-blue-50 rounded-lg p-3"
                >
                  <span className="font-medium text-blue-700 w-6">{index + 1}.</span>
                  <span className="flex-grow">{option.label}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveRanked(option, index)}
                    className="text-red-500 hover:text-red-700"
                    aria-label={`Remove ${option.label} from ranking`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Available Options */}
      {availableOptions.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Available options:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {availableOptions.map((option) => (
              <button
                key={`available-${option.value}`}
                type="button"
                onClick={() => handleRankOption(option)}
                className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RankingQuestion;
