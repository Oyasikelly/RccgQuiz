/** @format */

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Quiz({
  selectedTime,
  isRunning,
  timeLeft,
  setIsRunning,
  setTimeLeft,
  numberOfQuestions,
  setNumberOfQuestions,
  selectedQuestNum,
  setObjectiveAnswers,
  setUserAnswers,
  setShowSelectedAnswer,
}) {
  const [numberOfQuestAnswered, setNumberOfQuestAnswered] = useState(0);
  const [selectOption, setselectOption] = useState(
    new Array(selectedQuestNum.length).fill(null)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Update the number of questions answered when selectOption changes
  useEffect(() => {
    const selectedAnswers = selectOption.filter((value) => value !== null);
    setNumberOfQuestAnswered(selectedAnswers.length);
    setUserAnswers(selectedAnswers);
  }, [selectOption, setNumberOfQuestAnswered, setUserAnswers]);

  // Timer Logic
  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false); // Stop the timer when it reaches 0
    }

    return () => clearTimeout(timerId); // Clean up the timer on unmount
  }, [timeLeft, isRunning, setIsRunning, setTimeLeft]);

  // Convert seconds to a readable minutes:seconds format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Handle selecting an option
  function handleOptionClick(option) {
    const updatedOptions = [...selectOption];
    updatedOptions[currentQuestionIndex] = option; // Update the selected option for the current question
    setselectOption(updatedOptions);
  }

  // Move to the next question
  function handleNext() {
    if (currentQuestionIndex < selectedQuestNum.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  // Move to the Previous question
  function handlePrev() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  return (
    <div className="Quiz">
      <header>
        <div className="userImage">
          <img src="/" alt="userImg" />
        </div>
        <span>
          {numberOfQuestAnswered} out of {selectedQuestNum.length}
        </span>

        <div className="timer">
          <div className="countDown">
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
      </header>
      <main>
        <Objective
          selectOption={selectOption}
          currentQuestionIndex={currentQuestionIndex}
          handleOptionClick={handleOptionClick}
          selectedQuestNum={selectedQuestNum}
          setObjectiveAnswers={setObjectiveAnswers}
        />
      </main>
      <footer>
        <button
          className="subBtn"
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
        >
          Prev
        </button>

        {numberOfQuestAnswered !== selectedQuestNum.length ? (
          <button
            className="subBtn"
            onClick={handleNext}
            disabled={currentQuestionIndex === selectedQuestNum.length - 1}
          >
            Next
          </button>
        ) : (
          <NavLink to="/results">
            <button className="subBtn">Submit</button>
          </NavLink>
        )}
      </footer>
    </div>
  );
}

function Objective({
  selectOption,
  currentQuestionIndex,
  handleOptionClick,
  selectedQuestNum,
  setObjectiveAnswers,
}) {
  const currentQuestion = selectedQuestNum[currentQuestionIndex];

  return (
    <div className="Objective">
      <p className="ObjQuestion">{currentQuestion.Question}</p>
      <div className="ObjOptions">
        {currentQuestion.Options.map((option, index) => {
          // Set the objective answers once a question is answered
          function quesionAnswered() {
            setObjectiveAnswers(
              selectedQuestNum
                .filter((value) => value !== undefined)
                .map((answer) => answer.Answer)
            );
          }

          return (
            <p
              className={` ${
                selectOption[currentQuestionIndex] === option ? "activeAns" : ""
              }`}
              key={index}
              onClick={() => {
                handleOptionClick(option);
                quesionAnswered();
              }}
            >
              {option}
            </p>
          );
        })}
      </div>
    </div>
  );
}
