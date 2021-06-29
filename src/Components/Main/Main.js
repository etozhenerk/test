import React from "react";
import { Section } from "../Section/Section";
import { StartButton } from "../StartButton/StartButton";
import { useFetch } from "../Hooks/useFetch";
import { useQuestion } from "../Hooks/useQuestion";
import { useOption } from "../Hooks/useOption";
import { useStart } from "../Hooks/useStart";
import { useAnswers } from "../Hooks/useAnswers";

export const Main = () => {

  const { start, setStart } = useStart();
  const { response, error } = useFetch(start);
  const { question, setQuestion } = useQuestion();
  const { option, setOption, handleRadioChange } = useOption();
  const { answers, setAnswers } = useAnswers();

  const getAnswer = (e) => {
    e.preventDefault();
    if (option) {
      const isCorrect = option === question.correct_answer;
      const nextQuestion = response.pop();
      setAnswers([
        ...answers,
        {
          question: question.question,
          isCorrect,
          correct_answer: question.correct_answer,
          difficulty: question.difficulty,
        },
      ]);
      setQuestion(nextQuestion);
      setOption(null);
    }
  };

  const startTrivia = (param) => {
    setStart(param);
    if (!error) {
      const firstQuestion = response.pop();
      setQuestion(firstQuestion);
    }
    if(answers.length >= 10){
      setAnswers([]);
    }
  };
  return (
    <main className="main">
      {start ? (
        error ? (
          <p>Ooops...</p>
        ) : (
          <Section
            question={question}
            getAnswer={getAnswer}
            handleRadioChange={handleRadioChange}
            option={option}
            answers={answers}
            startTrivia={startTrivia}
            start={start}
          />
        )
      ) : (
        <StartButton startTrivia={startTrivia} start={start} />
      )}
    </main>
  );
};
