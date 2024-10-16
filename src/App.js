/** @format */
import React, { useState } from "react";
import "./App.css";
import "./SignUp.css";
import "./Login.css";
import "./Instruction.css";
import "./usersPage.css";
import "./Quiz.css";
import "./Results.css";
import "./answers.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useRef } from "react";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import StudentQuizInstructions from "./components/StudentQuizInstructions";
import UserPage from "./components/UserPage";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
// import Answers from "./components/Answers";
// import ObjQustAns from "./ObjQustAns.json";

export default function App() {
  const [signUpData, setSignUpData] = useState({
    parishName: "",
    personalName: "",
    phoneNumber: "",
    emailAddress: "",
    residentialAddress: "",
    password: "",
    confirmPassword: "",
    userImage: "",
    category: "",
    className: "",
  });
  const [users, setUsers] = useState(signUpData);

  const [selectedTime, setSelectedTime] = useState("select");
  const [timeLeft, setTimeLeft] = useState(selectedTime);
  const [isRunning, setIsRunning] = useState(false); // To track if the timer is running
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [selectedQuestNum, setSelectedQuestNum] = useState(null);
  const [objectiveAnswers, setObjectiveAnswers] = useState(null);
  const [userAnswers, setUserAnswers] = useState(null);
  // const [showQuestionAnswers, setShowQuestionAnswers] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<LogIn />} />
          <Route
            path="/SignUp"
            element={
              <SignUp
                users={users}
                setUsers={setUsers}
                signUpData={signUpData}
                setSignUpData={setSignUpData}
              />
            }
          />
          <Route
            path="/studentquizinstructions"
            element={<StudentQuizInstructions />}
          />
          <Route
            path="/UserPage"
            element={
              <UserPage
                users={users}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                numberOfQuestions={numberOfQuestions}
                setNumberOfQuestions={setNumberOfQuestions}
                setSelectedQuestNum={setSelectedQuestNum}
              />
            }
          />
          <Route
            path="/Quiz"
            element={
              <Quiz
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                selectedTime={selectedTime}
                numberOfQuestions={numberOfQuestions}
                setNumberOfQuestions={setNumberOfQuestions}
                selectedQuestNum={selectedQuestNum}
                setObjectiveAnswers={setObjectiveAnswers}
                setUserAnswers={setUserAnswers}
              />
            }
          />
          <Route
            path="/results/*"
            element={
              <Result
                objectiveAnswers={objectiveAnswers}
                userAnswers={userAnswers}
                // setShowQuestionAnswers={setShowQuestionAnswers}
                selectedQuestNum={selectedQuestNum}
              />
            }
          />
          {/* <Route
            path="/answers"
            element={
              <Answers
                objectiveAnswers={objectiveAnswers}
                userAnswers={userAnswers}
                showQuestionAnswers={showQuestionAnswers}
              />
            }
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
