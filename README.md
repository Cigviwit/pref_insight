# Pref Insight

A patient preference collection application for healthcare providers.

## Features

- Patient information collection
- Treatment preference surveys
- Responsive design
- Data persistence with Supabase

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pref-insight.git
   cd pref-insight
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the Supabase URL and anon key with your project's credentials

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Supabase Setup

1. Create a new project at [Supabase](https://supabase.com/)
2. Run the SQL migration from `supabase/migrations/20240524000000_create_form_submissions.sql` in the SQL editor
3. Enable Row Level Security (RLS) on the `form_submissions` table
4. Add the following CORS origins to your Supabase project settings:
   - `http://localhost:3000` (or your development URL)
   - Your production domain

## Database Schema

The application uses a single table `form_submissions` with the following structure:

- `id` (bigint, primary key)
- `created_at` (timestamp with time zone)
- `email` (text)
- `doctor_name` (text)
- `institution_name` (text)
- `patient_identifier` (text)
- `relation` (text)
- `age` (text)
- `patient_age` (text)
- `main_income` (text)
- `treatment_contribution` (text)
- `treatment_expectations` (text, JSON string)

## Building for Production

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License.
