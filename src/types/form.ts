export interface FormOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  title: string;
  description?: string;
  type: 'radio' | 'slider' | 'ranking';
  options: FormOption[];
  required: boolean;
}

export interface FormData {
  email?: string;
  doctorName?: string;
  institutionName?: string;
  patientIdentifier?: string;
  [key: string]: string | number | null | undefined;
}

export interface RankingData {
  [key: string]: { [rank: string]: string };
}