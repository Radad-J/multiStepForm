import React from 'react';

const Step1 = ({ nextStep, handleChange, formData }) => {
  const { name, email } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (name && email) nextStep();
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleNext}>
      <h2 className="text-2xl font-bold">Identification</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Your Name"
        className="p-2 border rounded-md"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Your Email"
        className="p-2 border rounded-md"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Next</button>
    </form>
  );
};

export default Step1;
