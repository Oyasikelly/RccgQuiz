/** @format */
import React from "react";
import { NavLink } from "react-router-dom";
export default function LogIn() {
  return (
    <div className="LoginContainer">
      <div className="LogIn">
        <h1>Log In</h1>
        <form>
          <label htmlFor="email">Email or Phone Number</label>
          <input
            id="email"
            type="text"
            placeholder="Enter email or phone number"
            autoComplete="username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            autoComplete="new-password"
          />
          <p>
            Not signed up yet?
            <NavLink to="SignUp">
              <span>click here </span>
            </NavLink>
          </p>

          <NavLink to="/studentquizinstructions">
            <button className="subBtn">Submit</button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}
