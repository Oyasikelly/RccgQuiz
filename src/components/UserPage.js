/** @format */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ObjQustAns from "../ObjQustAns.json";

export default function UserPage({
  checkedBox,
  setCheckedBox,
  users,
  selectedTime,
  setSelectedTime,
  timeLeft,
  setTimeLeft,
  isRunning,
  setIsRunning,
  numberOfQuestions,
  setNumberOfQuestions,
  setSelectedQuestNum,
}) {
  // Handling Checked Objective
  function handleCheckedObjective(e) {
    // const { name, value } = e.target;
    setCheckedBox(() => !checkedBox);
    // console.log(name, value);
  }

  // handling the time
  const timeOptions = ["select", 60, 50, 40, 30, 20, 10].map((min) =>
    min === "select" ? 0 : min * 60
  );
  const questionOptions = [0, 60, 50, 40, 30, 20, 10].map(
    (question) => question
  );
  function handleselectedTime(e) {
    const newTime = parseInt(e.target.value);
    setSelectedTime(newTime);
    setTimeLeft(newTime);
    setIsRunning(null);
  }

  // Start the timer
  function startTimer() {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  }
  // select questions
  function handleSelectedQuestion(e) {
    const newQuestNumber = parseInt(e.target.value);
    setNumberOfQuestions((numberOfQuestions = newQuestNumber));
  }
  function handleNewNumOfQuestion() {
    const selectedQuestNum = ObjQustAns.filter((e) => {
      return (ObjQustAns.length = numberOfQuestions);
    });
    setSelectedQuestNum(selectedQuestNum);
  }

  const [opemenue, setopenmenue] = useState(false);
  function handleCloseMenue() {
    setopenmenue((e) => !opemenue);
  }
  function handleOpenMenue() {
    setopenmenue((e) => true);
  }
  return (
    <div className="UserContainer">
      <div>
        <div className="userId">
          <div className="userIdContainer">
            <div className="userImage">
              <img src="" alt="userImg" />
            </div>
            <h1>Welcome X!</h1>
          </div>
          <i className="fa fa-reorder" onClick={handleOpenMenue}></i>
        </div>
        <div className="selectType">
          <h2>Select examination type</h2>
          <div>
            <input
              type="checkBox"
              value={checkedBox}
              onChange={handleCheckedObjective}
            />
            <label htmlFor="Objective">Objective</label>
          </div>
          {/* <div>
            <input type="checkBox" />
            <label htmlFor="German">German Objective</label>
          </div>
          <div>
            <input type="checkBox" />
            <label htmlFor="Theory">Theory</label>
          </div> */}
        </div>

        <label className="selectQust" htmlFor="numOfQuest">
          Select number of questions
        </label>
        <select
          id="numOfQuest"
          value={numberOfQuestions}
          onChange={handleSelectedQuestion}
        >
          {questionOptions.map((quest, index) => (
            <option key={index} value={quest}>
              {quest === 0 ? "Select" : quest}
            </option>
          ))}
        </select>

        <select
          htmlFor="duration"
          value={selectedTime}
          onChange={handleselectedTime}
        >
          {timeOptions.map((time, index) => (
            <option key={index} value={time}>
              {time / 60} minutes
            </option>
          ))}
        </select>

        <p>
          Answer questions carefully, failure to submit before the examination
          time will lead to automatic submission. Results will be displayed at
          the end of the examination. <br /> <strong>Good Luck X!</strong>
        </p>
        {selectedTime > 0 && checkedBox === true && numberOfQuestions !== 0 && (
          <NavLink to="/Quiz">
            <button
              onClick={() => {
                handleNewNumOfQuestion();
                startTimer();
              }}
              className="subBtn"
            >
              Start
            </button>
          </NavLink>
        )}
      </div>

      <UserSideMenue opemenue={opemenue} handleCloseMenue={handleCloseMenue} />
    </div>
  );
}

function UserSideMenue({ opemenue, handleCloseMenue }) {
  return (
    <div className={`userMenue ${opemenue === true ? "show" : "hidden"}`}>
      <div className="overlayMenue">
        <div className="userImage">
          {/* <img src="" alt="userImg" /> */}
          {/* <input /> */}
          <i className="fas fa-user-edit"></i>
        </div>
        <div className="menueContent">
          <p>
            <strong>Parish Name: </strong>Prince Of Peace Model
          </p>
          <p>
            <strong>Personal Name: </strong> Oyasi Kelly
          </p>
          <p>
            <strong>Phone Number: </strong> +234 9068318254
          </p>
          <p>
            <strong>Email Address: </strong> oyasikelly@gmail.com
          </p>
          <p>
            <strong>Residental Address: </strong> Jesus Saves Hostel
          </p>
          <p>
            <strong>Category: </strong> YAYA
          </p>
          <p>
            <strong>Class Name: </strong>Wisdom
          </p>
          <i className="fa fa-times close" onClick={handleCloseMenue}></i>
          {/* <span className="">close</span> */}
        </div>
      </div>
    </div>
  );
}
