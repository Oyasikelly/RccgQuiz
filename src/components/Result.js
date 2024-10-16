/** @format */

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Answers from "./Answers";
export default function Result({
  objectiveAnswers,
  setObjectiveAnswers,
  userAnswers,
  setUserAnswers,
  setShowQuestionAnswers,
  selectedQuestNum,
}) {
  console.log(objectiveAnswers);
  console.log(userAnswers);

  const checkIncorrectAnswers = (correct, selected) => {
    const results = [];
    correct.forEach((answer, index) => {
      if (answer !== selected[index]) {
        results.push({
          question: index + 1,
          selectedAnswer: selected[index],
          correctAnswer: answer,
          isCorrect: false,
        });
      } else {
        results.push({
          question: index + 1,
          selectedAnswer: selected[index],
          correctAnswer: answer,
          isCorrect: true,
        });
      }
    });
    return results;
  };

  const results = checkIncorrectAnswers(objectiveAnswers, userAnswers);
  // setShowQuestionAnswers(results);
  console.log(results);
  const wrongAnswers = results.filter((wrong) => wrong.isCorrect === false);
  const result = (
    (1 - wrongAnswers.length / objectiveAnswers.length) *
    100
  ).toFixed(0);

  return (
    <div className="Results">
      <Routes>
        <Route
          path="/answers"
          element={
            <Answers
              selectedQuestNum={selectedQuestNum}
              objectiveAnswers={objectiveAnswers}
              userAnswers={userAnswers}
              results={results}
            />
          }
        />
      </Routes>
      <div className="resultContainer">
        <div className="percentageOfPerformance">
          <div className="innerContainer">
            <h1>{result}%</h1>
          </div>
        </div>
        <h3>
          <i>You can do better John!</i>
        </h3>
        <p>
          You failed: {wrongAnswers.length} out of {objectiveAnswers.length}
        </p>
        <p>
          <strong>Name:</strong> John Peter
        </p>
        <p>
          <strong>Name Of Parish:</strong> Prince Of Peace
        </p>
        <p>
          <strong>Name Of Class:</strong> Wisdom
        </p>
      </div>
      <footer>
        <NavLink to="/UserPage">
          <button className="subBtn ResetTest">Take Test Again</button>
        </NavLink>
        <NavLink to="/results/answers">
          <button className="subBtn correctAnswer">See answers</button>
        </NavLink>
      </footer>
    </div>
  );
}
