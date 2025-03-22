import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export async function fetchBlogs() {
  const { data, error } = await supabase.from('blogs').select('*');
  if (error) console.error('Error fetching blogs:', error);
  return data;
}

export async function submitContactForm(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  try {
    const { data, error } = await supabase
      .from('contacts') // Replace 'contacts' with your Supabase table name
      .insert([{ name, email, phone, message }]);

    if (error) {
      console.error('Supabase Insert Error:', error);
      throw error;
    }

    console.log('Contact form data saved:', data);
    return data;
  } catch (err) {
    console.error('Error submitting contact form:', err);
    throw err;
  }
}
