import React from "react";
import { Answer } from "./Answer";

export const Answers = ({answers}) => (
  <section className="answers">
    {answers.map((answer,i) => <Answer key={i} answer={answer} />)}
  </section>
);
