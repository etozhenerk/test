import { useState } from "react";

export const useQuestion = () => {
  const [question, setQuestion] = useState(null);

  return { question, setQuestion };
};