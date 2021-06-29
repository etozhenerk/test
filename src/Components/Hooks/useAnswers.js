import { useState } from "react";

export const useAnswers = () => {
  const [answers, setAnswers] = useState([]);

  return { answers, setAnswers };
};