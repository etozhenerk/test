import React from "react";

export const Question = ({
  question: { question, category, difficulty },
  getAnswer,
  handleRadioChange,
  option,
}) => (
  <section className="question">
    <div className={`question__diff question__diff-${difficulty}`}>
      {difficulty}
    </div>
    <h2
      className="question__header"
      dangerouslySetInnerHTML={{ __html: question }}
    ></h2>

    <div className="question__options">
      <label className="question__radio" htmlFor="true">
        <input
          id="true"
          type="radio"
          value="True"
          onChange={handleRadioChange}
          checked={option === "True"}
        />
        Yes
      </label>

      <label className="question__radio" htmlFor="false">
        <input
          id="false"
          type="radio"
          value="False"
          onChange={handleRadioChange}
          checked={option === "False"}
        />
        No
      </label>
    </div>
    <p>
      <input
        className="question__button"
        type="button"
        value="Choose"
        onClick={(e) => getAnswer(e)}
      />
    </p>
  </section>
);
