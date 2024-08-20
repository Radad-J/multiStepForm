import React from 'react';
import emailjs from 'emailjs-com';

const Step3 = ({ prevStep, formData }) => {
  const { name, email, review, comments } = formData;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_3d4toci',
      'template_cygpec2',
      formData,
      'U9Snkk7BOs-HNEwxZ'
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.error('Failed to send email:', error.text);
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">Review Your Submission</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Review:</strong> {review}</p>
      <p><strong>Comments:</strong> {comments || 'No comments provided.'}</p>
      <div className="flex justify-between">
        <button onClick={prevStep} className="p-2 bg-gray-500 text-white rounded-md">Back</button>
        <button onClick={sendEmail} className="p-2 bg-green-500 text-white rounded-md">Send</button>
      </div>
    </div>
  );
};

export default Step3;
