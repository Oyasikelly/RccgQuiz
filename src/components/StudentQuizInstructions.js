/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
export default function StudentQuizInstructions() {
  return (
    <div className="studentQuizInstruction">
      <h1>Welcome to the Sunday School Quiz! </h1>
      <hr />
      <ul className="instructions">
        <h2>Instructions:</h2>
        <li>
          <b>Select Your Difficulty Level:</b>
          <ul>
            <li>
              Easy (Level A):Basic questions to test your foundational
              knowledge.
            </li>

            <li>
              Medium Easy (Level B):A mix of basic and slightly challenging
              questions.
            </li>

            <li>
              Hard (Level C & D):Advanced questions for deeper understanding and
              critical thinking.
            </li>
          </ul>
        </li>
        <li>
          <b>Question Types:</b>
          <ul>
            <li>
              Objective (A, B, C, D): Select the correct option from the given
              choices.
            </li>
            <li>
              German Objectives: These questions follow a true/false or
              statement-based format.
            </li>
            <li>
              Theory Questions:Provide a brief answer to the questions in the
              space provided.
            </li>
          </ul>
        </li>
        <li>
          <b>Start the Quiz:</b>
          <ul>
            <li>
              Choose your <b>difficulty</b> level (A, B, or C/D)
            </li>
            <li>
              Click <b>Enter</b> to begin your quiz.
            </li>
          </ul>
        </li>
        <li>
          <b>Answering Questions:</b>
          <ul>
            <li>
              For multiple-choice and objective questions, click on the correct
              option.
            </li>
            <li>
              For theory questions, type your answer in the provided text box.
            </li>
          </ul>
        </li>
        <li>
          <b>Time Limit:</b>Each quiz will have a set time limit (e.g.,
          <strong>X minutes</strong>). Keep an eye on the countdown timer
          displayed at the top of the page.
        </li>
        <li>
          <b>Submit Your Quiz:</b> Once you’ve answered all questions, click the
          <strong>"Submit"</strong> button to complete the quiz. Make sure all
          answers are filled before submission.
        </li>
        <li>
          <b>Results:</b> After submission, your score and the correct answers
          will be displayed.
          <strong>Choose wisely, challenge yourself, and good luck!</strong>
        </li>
      </ul>

      <NavLink to="/UserPage">
        <button className="subBtn">Take Test</button>
      </NavLink>
    </div>
  );
}
