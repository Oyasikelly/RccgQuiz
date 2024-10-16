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

  // Selected Number Of Questions Array
  const selectedQuestNumArray = selectedQuestNum;
  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false); // Stop the timer when it reaches 0
    }

    return () => clearTimeout(timerId); // Clean up the timer on unmount
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isRunning]);

  // Convert seconds to a readable minutes:seconds format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const [selectOption, setselectOption] = useState(
    new Array(selectedQuestNumArray.length).map(() => null)
  );

  // Counting Answered Questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handle selecting an option
  function handleOptionClick(option) {
    const updatedOptions = [...selectOption];
    updatedOptions[currentQuestionIndex] = option; // update the selected option for the current question
    setselectOption(updatedOptions);
    // console.log(updatedOptions);
  }

  // Move to the next question
  function handleNext() {
    if (currentQuestionIndex < selectedQuestNumArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }
  // Move to the Previous quesion
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
          {numberOfQuestAnswered} out of {selectedQuestNumArray.length}
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
          setselectOption={setselectOption}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          handleOptionClick={handleOptionClick}
          selectedQuestNumArray={selectedQuestNumArray}
          numberOfQuestAnswered={numberOfQuestAnswered}
          setNumberOfQuestAnswered={setNumberOfQuestAnswered}
          setObjectiveAnswers={setObjectiveAnswers}
          setUserAnswers={setUserAnswers}
          setShowSelectedAnswer={setShowSelectedAnswer}
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

        {numberOfQuestAnswered !== selectedQuestNumArray.length ? (
          <button
            className="subBtn"
            onClick={handleNext}
            disabled={currentQuestionIndex === selectedQuestNumArray.length - 1}
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
  setselectOption,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  handleOptionClick,
  selectedQuestNumArray,
  numberOfQuestAnswered,
  setNumberOfQuestAnswered,
  setObjectiveAnswers,
  setUserAnswers,
}) {
  const currentQuestion = selectedQuestNumArray[currentQuestionIndex];
  return (
    <div className="Objective">
      <p className="ObjQuestion">{currentQuestion.Question}</p>
      <div className="ObjOptions">
        {currentQuestion.Options.option.map((option, index) => {
          function quesionAnswered(option) {
            setObjectiveAnswers(
              selectedQuestNumArray
                .filter((value) => value !== undefined)
                .map((answer) => answer.Answer)
            );
            // toSaveSelectedId.push(currentQuestion.Options.id);
            const selectedAnswers = selectOption.filter(
              (value) => value !== undefined
            );
            setNumberOfQuestAnswered(selectedAnswers.length);
            setUserAnswers(selectedAnswers);
          }
          return (
            <p
              className={` ${
                selectOption[currentQuestionIndex] === option ? "activeAns" : ""
              }`}
              key={index}
              onClick={() => {
                handleOptionClick(option);
                quesionAnswered(option);
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
