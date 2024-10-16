/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

export default function Answers({
  selectedQuestNum,
  objectiveAnswers,
  userAnswers,
  showQuestionAnswers,
  results,
}) {
  // console.log(results);
  // const answersID = results.map((value) => value.question);
  // const wrg = ;
  // console.log(selectedQuestNum.map((value) => value.Option.id));
  console.log(
    results.map((num) => selectedQuestNum[num.question - 1].Question)
  );

  return (
    <div className="Answers">
      <h1>Answers</h1>
      <p>
        Check to see the questions you failed 😥 and the once that you got
        correctly!🤗
      </p>
      <main>
        <div className="solu_container">
          {results.map((selectedOption, i) => {
            return (
              <>
                <p className="ObjQuestion">
                  {selectedQuestNum[selectedOption.question - 1].Question}
                </p>
                <p
                  key={i}
                  className={
                    selectedOption.isCorrect ? "userAnswer" : "wrongAnswer"
                  }
                >
                  {selectedOption.selectedAnswer}
                </p>
                <p key={i} className="correctAnswer">
                  {selectedOption.correctAnswer}
                </p>
              </>
            );
          })}
        </div>
        <NavLink to="results">
          <button className="subBtn">Back to result </button>
        </NavLink>
      </main>
    </div>
  );
}
