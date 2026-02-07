import React from 'react';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((opt, idx) => (
        <button key={idx} onClick={() => onAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
