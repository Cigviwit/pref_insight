import { createClient } from '@supabase/supabase-js';

// Debug: Log the entire import.meta.env object
console.log('import.meta.env:', JSON.stringify(import.meta.env, null, 2));

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log environment variables for debugging
console.log('Supabase URL from env:', supabaseUrl);
console.log('Supabase Anon Key from env:', supabaseAnonKey ? '***' + supabaseAnonKey.slice(-4) : 'Not set');

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  const errorMessage = 'Missing Supabase environment variables. Please check your .env file.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

// Debug: Log the URL that will be used
console.log('Using Supabase URL:', supabaseUrl);

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false
  }
});

// Test the connection on startup
(async () => {
  try {
    const { error } = await supabase.from('form_submissions').select('*').limit(1);
    if (error) throw error;
    console.log('Supabase connection successful');
  } catch (error) {
    console.error('Supabase connection error:', error);
  }
})();

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
