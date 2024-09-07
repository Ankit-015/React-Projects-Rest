import React from "react";
import Options from "./Options";

export default function Questions({ question, dispatch, answer }) {
  // console.log(question);
  return (
    <div>
      <h2>{question?.question}</h2>
      <Options
        question={question}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
}
