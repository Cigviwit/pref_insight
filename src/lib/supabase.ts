// Mock Supabase client for local development
console.log('Running in mock mode - Supabase is disabled');

// Mock Supabase client implementation
const mockSupabase = {
  from: () => ({
    select: () => ({
      limit: () => ({
        then: (callback: any) => {
          setTimeout(() => callback({ data: [], error: null }), 100);
          return { catch: () => {} };
        }
      }),
      insert: (data: any) => ({
        select: () => ({
          then: (callback: any) => {
            console.log('Mock Supabase - Data would be inserted:', data);
            setTimeout(() => callback({ data: [data], error: null }), 100);
            return { catch: (errorCallback: any) => errorCallback({ message: 'Supabase is in mock mode' }) };
          }
        })
      })
    })
  })
} as any;

// Export the mock client
export const supabase = mockSupabase;

// Types for our database schema
export type FormSubmission = {
  id?: number;
  created_at?: string;
  email: string;
  doctor_name: string;
  institution_name: string;
  patient_identifier: string;
  relation: string;
  age: string;
  patient_age: string;
  main_income: string;
  treatment_contribution: string;
  treatment_expectations: string; // JSON string of slider values
};

// Log that we're in mock mode
console.log('Supabase is running in mock mode. No actual database operations will be performed.');
