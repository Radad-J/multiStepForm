import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import emailjs from 'emailjs-com';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    comments: '',
  });
  const [emailSent, setEmailSent] = useState(false); // New state for email sent status
  const [emailError, setEmailError] = useState(false); // New state for email error status

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = () => {
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setEmailSent(true); // Update state to show success message
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setEmailError(true); // Update state to show error message
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 3:
      return (
        <div>
          <Step3 prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />
          {emailSent && <p className="text-green-500">Your email has been sent successfully!</p>} {/* Success Message */}
          {emailError && <p className="text-red-500">Failed to send the email. Please try again.</p>} {/* Error Message */}
        </div>
      );
    default:
      return null;
  }
};

export default MultiStepForm;
