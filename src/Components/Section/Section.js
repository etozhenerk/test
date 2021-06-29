import React from "react";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { StartButton } from "../StartButton/StartButton";

export const Section = ({
  question,
  getAnswer,
  handleRadioChange,
  option,
  answers,
  startTrivia,
  start
}) => {
  return question ? (
    <Question 
      question={question}
      getAnswer={getAnswer}
      handleRadioChange={handleRadioChange}
      option={option}
    />
  ) : (
    <>
      <Answers answers={answers} />
      <StartButton startTrivia={startTrivia} start={start} />
    </>
  );
};
