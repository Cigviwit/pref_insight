import React from 'react';

interface PatientInfoFormProps {
  formData: {
    email: string;
    doctorName: string;
    institutionName: string;
    patientIdentifier: string;
  };
  onChange: (field: keyof PatientInfoFormProps['formData'], value: string) => void;
}

const PatientInfoForm: React.FC<PatientInfoFormProps> = ({ formData, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name as keyof PatientInfoFormProps['formData'], value);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Patient Information
      </h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700 mb-1">
            Doctor's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={formData.doctorName || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-1">
            Institution Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="institutionName"
            name="institutionName"
            value={formData.institutionName || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="patientIdentifier" className="block text-sm font-medium text-gray-700 mb-1">
            Patient's Registration Number or Initials <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="patientIdentifier"
            name="patientIdentifier"
            value={formData.patientIdentifier || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PatientInfoForm;
