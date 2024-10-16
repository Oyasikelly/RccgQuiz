/** @format */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function SignUp({ users, setUsers, signUpData, setSignUpData }) {
  const [userSet, setUserSet] = useState(new Array());
  function handleSignUpInfo(e) {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  }

  // Handle Form Submission
  function handleSignUpSubmission(e) {
    e.preventDefault();
    setUsers(signUpData);

    // userArray.push(users);
    setUserSet((prevUser) => new Set(prevUser).add(users));
    if (userSet.size >= 2) {
      console.log(userSet);
    } else {
      console.log("empty");
    }
  }

  return (
    <div className="signUpContainer">
      <div className="signUp">
        <h1>Sign Up!</h1>
        <form onSubmit={handleSignUpSubmission}>
          <label htmlFor="parishName">Parish Name</label>
          <input
            type="text"
            name="parishName"
            id="parishName"
            placeholder="Enter parish name"
            value={signUpData.parishName}
            onChange={handleSignUpInfo}
          />
          <label htmlFor="personalName">Personal Name</label>
          <input
            type="text"
            name="personalName"
            id="personalName"
            placeholder="Enter your name"
            value={signUpData.personalName}
            onChange={handleSignUpInfo}
          />
          <label htmlFor="phoneNumber"> Phone Number</label>
          <input
            type="num"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={signUpData.phoneNumber}
            onChange={handleSignUpInfo}
          />
          <label htmlFor="emailAddress"> Email Address</label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            autoComplete="username"
            placeholder="Enter your email address"
            value={signUpData.email}
            onChange={handleSignUpInfo}
          />
          <label htmlFor="residentialAddress">Residential Address</label>
          <input
            type="text"
            name="residentialAddress"
            id="residentialAddress"
            placeholder="Enter your residential address"
            value={signUpData.homeAddress}
            onChange={handleSignUpInfo}
          />
          <label htmlFor="passWord"> PassWord </label>
          <input
            type="password"
            name="password"
            id="passWord"
            placeholder="Enter your password"
            autoComplete="new-password"
            value={signUpData.password}
            onChange={handleSignUpInfo}
          />
          <label htmlFor="ConfirmPassWord">Confirm PassWord </label>
          <input
            type="password"
            name="confirmPassword"
            id="ConfirmPassWord"
            placeholder="Retype your password"
            autoComplete="new-password"
            value={signUpData.confirmPassword}
            onChange={handleSignUpInfo}
          />
          <label htmlFor="uploadImg">Upload Image </label>
          <input
            type="file"
            name="userImage"
            id="uploadImg"
            placeholder="upload an image"
            value={signUpData.uploadedImage}
            onChange={handleSignUpInfo}
          />
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={signUpData.category}
            onChange={handleSignUpInfo}
          >
            <option htmlFor="select">select</option>
            <option htmlFor="YAYA">YAYA</option>
            <option htmlFor="Adults">Adults</option>
          </select>
          <label htmlFor="class">Class Name</label>
          <select
            name="className"
            id="class"
            value={signUpData.className}
            onChange={handleSignUpInfo}
          >
            <option htmlFor="select">select</option>
            <option htmlFor="widsom">Widsom</option>
            <option htmlFor="holiness">Holiness</option>
            <option htmlFor="Adults">Adults</option>
          </select>

          <NavLink to="/">
            <button className="subBtn">Submit</button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}
