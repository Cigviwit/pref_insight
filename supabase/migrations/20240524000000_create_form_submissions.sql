-- Create form_submissions table
CREATE TABLE IF NOT EXISTS public.form_submissions (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT NOT NULL,
  doctor_name TEXT NOT NULL,
  institution_name TEXT NOT NULL,
  patient_identifier TEXT NOT NULL,
  relation TEXT NOT NULL,
  age TEXT NOT NULL,
  patient_age TEXT NOT NULL,
  main_income TEXT NOT NULL,
  treatment_contribution TEXT NOT NULL,
  treatment_expectations TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (adjust as needed for your security requirements)
CREATE POLICY "Enable insert for anonymous users" ON public.form_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Create policy to allow authenticated users to read their own data (if needed)
-- CREATE POLICY "Enable read access for authenticated users" ON public.form_submissions
--   FOR SELECT TO authenticated USING (auth.uid() = user_id);
