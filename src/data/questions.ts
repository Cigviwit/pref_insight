import { Question } from '../types/form';

export const questions: Question[] = [
  {
    id: 'relation',
    title: 'Question 1: What best describes you',
    type: 'radio',
    options: [
      { value: 'patient', label: 'I am a patient' },
      { value: 'family_same_home', label: 'I am patient\'s family member living in the same home' },
      { value: 'family_different_home', label: 'I am patient\'s family BUT do not live with him/her' },
      { value: 'friend', label: 'I am patient\'s friend' },
      { value: 'other', label: 'Other' }
    ],
    required: true
  },
  {
    id: 'age',
    title: 'Question 2: My age is',
    type: 'radio',
    options: [
      { value: '12_or_less', label: '12 years or less' },
      { value: '13_to_19', label: '13 to 19 years' },
      { value: '20_to_39', label: '20 to 39 years' },
      { value: '40_to_59', label: '40 to 59 years' },
      { value: '60_or_more', label: '60 years or more' }
    ],
    required: true
  },
  {
    id: 'patient_age',
    title: 'Question 3: My patient\'s age is',
    type: 'radio',
    options: [
      { value: '12_or_less', label: '12 years or less' },
      { value: '13_to_19', label: '13 to 19 years' },
      { value: '20_to_39', label: '20 to 39 years' },
      { value: '40_to_59', label: '40 to 59 years' },
      { value: '60_or_more', label: '60 years or more' },
      { value: 'same_as_previous', label: 'Same as in previous question, I am the patient myself' }
    ],
    required: true
  },
  {
    id: 'main_income',
    title: 'Question 4: I am the main income provider for my family',
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    required: true
  },
  {
    id: 'treatment_contribution',
    title: 'Question 5: I am providing maximum contribution (money) towards the cost of the patient\'s treatment',
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    required: true
  },
  {
    id: 'treatment_expectations',
    title: 'Question 6: What do you expect from your treatment?',
    description: 'There are six options. Rank them from most important to least important to you.',
    type: 'ranking',
    options: [
      { value: 'best_chance_cure', label: 'Best Chance of cure' },
      { value: 'longest_survival', label: 'Longest survival possible' },
      { value: 'least_side_effects', label: 'Least side effects' },
      { value: 'minimum_visits', label: 'Minimum visits to the hospital / doctor' },
      { value: 'least_expenses', label: 'Least out of pocket expenses' },
      { value: 'clinical_trial', label: 'Entry into a clinical trial if available' }
    ],
    required: true
  }
];
