import { useState } from "react";

export const useOption = () => {
  const [option, setOption] = useState(null);

  const handleRadioChange = (e) => {
    setOption(e.target.value);
  };

  return { option, setOption, handleRadioChange };
};
