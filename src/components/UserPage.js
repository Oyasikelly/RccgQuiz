/** @format */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ObjQustAns from "../ObjQustAns.json";

export default function UserPage({
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
            <input type="checkBox" />
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
        {selectedTime > 0 && (
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

// function CountdownTimer() {
//   // Time intervals in minutes (converted to seconds)

//   // State to store selected time and countdown time
//   const [selectedTime, setSelectedTime] = useState(60 * 60); // Default is 60 minutes
//   const [timeLeft, setTimeLeft] = useState(selectedTime);
//   const [isRunning, setIsRunning] = useState(false); // To track if the timer is running

//   // Convert seconds to a readable minutes:seconds format
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   useEffect(() => {
//     let timerId;
//     if (isRunning && timeLeft > 0) {
//       timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//     } else if (timeLeft === 0) {
//       setIsRunning(false); // Stop the timer when it reaches 0
//     }

//     return () => clearTimeout(timerId); // Clean up the timer on unmount
//   }, [timeLeft, isRunning]);

//   // Handle time selection change
//   const handleTimeChange = (event) => {
//     const newTime = parseInt(event.target.value);
//     setSelectedTime(newTime); // Update selected time
//     setTimeLeft(newTime); // Reset the timer to the new time
//     setIsRunning(false); // Stop the timer
//   };

//   // Reset the timer
//   const resetTimer = () => {
//     setTimeLeft(selectedTime);
//     setIsRunning(false);
//   };

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <h2>Time Left: {formatTime(timeLeft)}</h2>

//       {/* Dropdown to select the time */}
//       <label>Select time: </label>
//

//       <div>
//         <button onClick={startTimer} disabled={isRunning}>
//           Start
//         </button>
//         <button onClick={resetTimer}>Reset</button>
//       </div>
//     </div>
//   );
// }
