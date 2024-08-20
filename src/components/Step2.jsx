import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  const { review, comments } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (review) nextStep();
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleNext}>
      <h2 className="text-2xl font-bold">Review</h2>
      <div className="flex justify-between">
        <label>
          <input
            type="radio"
            name="review"
            value="unhappy"
            onChange={handleChange}
            checked={review === 'unhappy'}
            className="mr-2"
          />
          Unhappy 😞
        </label>
        <label>
          <input
            type="radio"
            name="review"
            value="could be better"
            onChange={handleChange}
            checked={review === 'could be better'}
            className="mr-2"
          />
          Could be better 😐
        </label>
        <label>
          <input
            type="radio"
            name="review"
            value="satisfied"
            onChange={handleChange}
            checked={review === 'satisfied'}
            className="mr-2"
          />
          Satisfied 🙂
        </label>
        <label>
          <input
            type="radio"
            name="review"
            value="very satisfied"
            onChange={handleChange}
            checked={review === 'very satisfied'}
            className="mr-2"
          />
          Very satisfied 😃
        </label>
      </div>
      <textarea
        name="comments"
        value={comments}
        onChange={handleChange}
        placeholder="Any comments?"
        className="p-2 border rounded-md"
      />
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="p-2 bg-gray-500 text-white rounded-md">Back</button>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Next</button>
      </div>
    </form>
  );
};

export default Step2;
