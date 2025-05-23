import PatientForm from './components/PatientForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-blue-800">
              Patient Care Questionnaire
            </h1>
            <p className="text-gray-600">Share your treatment preferences</p>
          </header>
          
          <main className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <PatientForm />
          </main>
          
          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>© 2025 Patient Care. All rights reserved.</p>
            <p className="mt-1">Your information is kept private and secure.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;