import { useState } from "react";

export const useStart = () => {
  const [start, setStart] = useState(false);

  return { start, setStart };
};