import React from "react";


export const Answer = ({answer: {question, isCorrect, difficulty, correct_answer}}) => (
  <div className={`answer ${isCorrect ?`answer-correct` : `answer-wrong` }`}>
    <h2 className="answer__header" dangerouslySetInnerHTML={{__html: `${question}` }}></h2>
    <span>Your answer is {isCorrect ? 'correct' : 'wrong'}</span>
    <div className={`question__diff question__diff-${difficulty}`}>{difficulty}</div>
    <span>Correct answer is {correct_answer === "True" ? 'Yes' : 'No'}</span>
  </div>
);
