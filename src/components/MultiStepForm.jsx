import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    comments: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 3:
      return <Step3 prevStep={prevStep} formData={formData} />;
    default:
      return null;
  }
};

export default MultiStepForm;
