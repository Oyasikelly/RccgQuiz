/** @format */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function SignUp({ users, setUsers, signUpData, setSignUpData }) {
  const [currentSection, setCurrentSection] = useState(1);
  const [userSet, setUserSet] = useState(new Array());
  function handleSignUpInfo(e) {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  }
  const {
    category,
    className,
    confirmPassword,
    emailAddress,
    parishName,
    password,
    personalName,
    phoneNumber,
    residentialAddress,
    userImage,
  } = signUpData;

  const arr = [
    category,
    className,
    confirmPassword,
    emailAddress,
    parishName,
    password,
    personalName,
    phoneNumber,
    residentialAddress,
    userImage,
  ];

  // const { a, b, c, d, e, f, g, h } = signUpData;
  // console.log(
  //   category,
  //   className,
  //   confirmPassword,
  //   emailAddress,
  //   parishName,
  //   password,
  //   personalName,
  //   phoneNumber,
  //   residentialAddress,
  //   userImage
  // );
  // Handle Next And Previous Sections
  const handleNext = () => {
    setCurrentSection((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrentSection((prev) => (prev > 1 ? prev - 1 : prev));
  };
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
  // function handleStyle(){
  //   width=
  // }
  return (
    <div className="signUpContainer">
      <div className="signUp">
        <h3
          style={{
            borderTop: "5px solid var(--LightTextColor)",
            borderRadius: "1rem",
            width: `${
              currentSection === 1
                ? "33%"
                : currentSection === 2
                ? "66%"
                : currentSection === 3
                ? "100%"
                : "100%"
            }`,
            alignSelf: "flex-start",
            textAlign: "center",
          }}
        >
          {/* {currentSection === 2
            ? "Almost There!"
            : currentSection === 3
            ? "ENd! !"
            : "Sign Up!"} */}
        </h3>
        <SignUpStage
          signUpData={signUpData}
          handleSignUpInfo={handleSignUpInfo}
          onSubmit={handleSignUpSubmission}
          currentSection={currentSection}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}

function SignUpStage({
  signUpData,
  onSubmit,
  currentSection,
  handlePrevious,
  handleNext,
  handleSignUpInfo,
}) {
  return (
    <>
      <form onSubmit={onSubmit}>
        {currentSection === 1 && (
          <>
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
          </>
        )}
        {currentSection === 2 && (
          <>
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
          </>
        )}
        {currentSection === 3 && (
          <>
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
              {signUpData.category === "YAYA" && (
                <>
                  <option htmlFor="widsom">Widsom</option>
                  <option htmlFor="holiness">Holiness</option>
                </>
              )}
              {signUpData.category === "Adults" && (
                <option htmlFor="Adults">Adults</option>
              )}
            </select>
          </>
        )}
        {currentSection === 3 && (
          <NavLink to="/">
            <button className="subBtn">Submit</button>
          </NavLink>
        )}
      </form>

      <div className="Btns">
        {currentSection > 1 && (
          <button className="subBtn prev" onClick={handlePrevious}>
            Prev
          </button>
        )}
        <button
          className="subBtn"
          onClick={handleNext}
          disabled={currentSection === 3}
        >
          Next
        </button>
      </div>
    </>
  );
}

// import React, { useState } from "react";

// const FormComponent = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     input1: "",
//     input2: "",
//     input3: "",
//     input4: "",
//     input5: "",
//     input6: "",
//     input7: "",
//     input8: "",
//     input9: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleNext = () => {
//     setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
//   };

//   const handlePrevious = () => {
//     setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {currentStep === 1 && (
//           <div>
//             <h3>Section 1</h3>
//             <input
//               type="text"
//               name="input1"
//               value={formData.input1}
//               onChange={handleChange}
//               placeholder="Input 1"
//             />
//             <input
//               type="text"
//               name="input2"
//               value={formData.input2}
//               onChange={handleChange}
//               placeholder="Input 2"
//             />
//             <input
//               type="text"
//               name="input3"
//               value={formData.input3}
//               onChange={handleChange}
//               placeholder="Input 3"
//             />
//           </div>
//         )}

//         {currentStep === 2 && (
//           <div>
//             <h3>Section 2</h3>
//             <input
//               type="text"
//               name="input4"
//               value={formData.input4}
//               onChange={handleChange}
//               placeholder="Input 4"
//             />
//             <input
//               type="text"
//               name="input5"
//               value={formData.input5}
//               onChange={handleChange}
//               placeholder="Input 5"
//             />
//             <input
//               type="text"
//               name="input6"
//               value={formData.input6}
//               onChange={handleChange}
//               placeholder="Input 6"
//             />
//           </div>
//         )}

//         {currentStep === 3 && (
//           <div>
//             <h3>Section 3</h3>
//             <input
//               type="text"
//               name="input7"
//               value={formData.input7}
//               onChange={handleChange}
//               placeholder="Input 7"
//             />
//             <input
//               type="text"
//               name="input8"
//               value={formData.input8}
//               onChange={handleChange}
//               placeholder="Input 8"
//             />
//             <input
//               type="text"
//               name="input9"
//               value={formData.input9}
//               onChange={handleChange}
//               placeholder="Input 9"
//             />
//           </div>
//         )}

//         <div>
//           {currentStep > 1 && (
//             <button type="button" onClick={handlePrevious}>
//               Previous
//             </button>
//           )}
//           {currentStep < 3 ? (
//             <button type="button" onClick={handleNext}>
//               Next
//             </button>
//           ) : (
//             <button type="submit">Submit</button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormComponent;
