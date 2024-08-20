import React from 'react';
import MultiStepForm from './components/MultiStepForm';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-xl p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Review Form</h1>
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
