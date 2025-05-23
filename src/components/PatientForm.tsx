import React, { useState, useCallback } from 'react';
import { questions } from '../data/questions';
import { FormData } from '../types/form';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import FormNavigation from './FormNavigation';
import FormHeader from './FormHeader';
import SuccessMessage from './SuccessMessage';
import PatientInfoForm from './PatientInfoForm';

const PatientForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 for patient info
  const [formData, setFormData] = useState<FormData>({
    email: '',
    doctorName: '',
    institutionName: '',
    patientIdentifier: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const isPatientInfoComplete = useCallback(() => {
    return (
      formData.email?.trim() !== '' &&
      formData.doctorName?.trim() !== '' &&
      formData.institutionName?.trim() !== '' &&
      formData.patientIdentifier?.trim() !== ''
    );
  }, [formData]);
  
  // Removed auto-advance functionality to prevent automatic form advancement
  
  const isOnPatientInfo = currentStep === -1;
  
  const currentQuestion = !isOnPatientInfo ? questions[currentStep] : null;
  const totalSteps = questions.length;
  
  const isCurrentStepValid = isOnPatientInfo 
    ? isPatientInfoComplete()
    : Boolean(currentQuestion && formData[currentQuestion.id]);
  
  const handleChange = useCallback(<K extends keyof FormData>(
    questionId: K, 
    value: FormData[K]
  ) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  }, []);
  
  const handlePrevious = useCallback(() => {
    if (currentStep > -1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);
  
  const handleNext = useCallback(() => {
    if (currentStep === -1) {
      // If on patient info, validate and move to first question
      if (isPatientInfoComplete()) {
        setCurrentStep(0);
      }
    } else if (currentStep < totalSteps - 1 && isCurrentStepValid) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, isPatientInfoComplete, totalSteps, isCurrentStepValid]);
  
  const handleSubmit = useCallback(() => {
    if (isCurrentStepValid) {
      console.log('Form submitted with data:', formData);
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
    }
  }, [formData, isCurrentStepValid]);
  
  // Reset functionality removed as per UI changes
  
  if (isSubmitted) {
    return <SuccessMessage />;
  }
  
  return (
    <div className="max-w-2xl mx-auto w-full">
      <FormHeader />
      
      {!isOnPatientInfo ? (
        <ProgressBar 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
        />
      ) : (
        <div className="flex justify-end mt-6">
          <button
            onClick={handleNext}
            disabled={!isPatientInfoComplete()}
            className={`px-6 py-2 rounded-md text-white ${isPatientInfoComplete() 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Next
          </button>
        </div>
      )}
      
      <div className="min-h-[300px]">
        {isOnPatientInfo ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <PatientInfoForm 
              formData={{
                email: formData.email || '',
                doctorName: formData.doctorName || '',
                institutionName: formData.institutionName || '',
                patientIdentifier: formData.patientIdentifier || ''
              }}
              onChange={(field: keyof Pick<FormData, 'email' | 'doctorName' | 'institutionName' | 'patientIdentifier'>, value: string) => {
                setFormData(prev => ({
                  ...prev,
                  [field]: value
                }));
              }}
            />
          </div>
        ) : (
          <QuestionCard
            question={currentQuestion!}
            value={formData[currentQuestion!.id] as string | null}
            onChange={handleChange}
          />
        )}
      </div>
      
      <FormNavigation
        currentStep={isOnPatientInfo ? 0 : currentStep}
        totalSteps={totalSteps}
        isCurrentStepValid={!!isCurrentStepValid}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={handleSubmit}
        showNext={!isOnPatientInfo}
      />
    </div>
  );
};

export default PatientForm;