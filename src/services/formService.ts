import { supabase, FormSubmission } from '../lib/supabase';

export const submitForm = async (formData: FormSubmission) => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([formData])
      .select();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { data: null, error };
  }
};

export const getFormSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    return { data: null, error };
  }
};
