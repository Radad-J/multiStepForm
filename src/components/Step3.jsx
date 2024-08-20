import React from 'react';

const Step3 = ({ prevStep, formData, handleSubmit }) => {
  const { name, email, review, comments } = formData;

  return (
    <div>
      <h2 className="text-2xl font-bold">Review Your Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Review:</strong> {review}</p>
      <p><strong>Comments:</strong> {comments}</p>

      <div className="flex space-x-4">
        <button onClick={prevStep} className="p-2 bg-gray-500 text-white rounded-md">Back</button>
        <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded-md">Send</button>
      </div>
    </div>
  );
};

export default Step3;
