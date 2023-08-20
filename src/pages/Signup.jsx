import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Utilities
import { encryptData } from '../utils/CryptoJS';
import ErrorManager from '../utils/ErrorManager';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gender, setGender] = useState('');

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    /* 
    * Send a POST request for signupemail
    */
    axios({
      method: 'post',
      url: process.env.REACT_APP_API + '/api/v1/user/register',
      data: {
        username: username,
        password: password,
        password_confirmation: confirmPassword,
        first_name: firstName,
        last_name: lastName,
        email: email,
        contact_number: contactNumber,
        gender: gender,
      }
    })
      .then(function (response) {

        let output = response.data;

        if (output.success === true) {

          document.querySelector("#username-error").innerHTML = "";
          document.querySelector("#password-error").innerHTML = "";
          document.querySelector("#password_confirmation-error").innerHTML = "";
          document.querySelector("#first_name-error").innerHTML = "";
          document.querySelector("#last_name-error").innerHTML = "";
          document.querySelector("#email-error").innerHTML = "";
          document.querySelector("#contact_number-error").innerHTML = "";
          document.querySelector("#gender-error").innerHTML = "";

          // User login token
          let token = output.data.token;

          if (remember === true) {
            localStorage.setItem("remember", true);
            // Encrypt the token and store in local storage
            localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_NAME, encryptData(token));
          } else {
            localStorage.setItem("remember", false);
            // Encrypt the token and store in session storage
            sessionStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_NAME, encryptData(token));
          }

          document.getElementById("validation-error").classList.remove("flex");
          document.getElementById("validation-error").classList.add("hidden");
          document.getElementById("user-account-created").classList.remove("hidden");
          document.getElementById("user-account-created").classList.add("flex");

          console.log("User account created sucessfull!");

          setTimeout(() => {
            return navigate("/");
          }, "3000");
        }
      })
      .catch(function (error) {

        document.querySelector("#username-error").innerHTML = "";
        document.querySelector("#password-error").innerHTML = "";
        document.querySelector("#password_confirmation-error").innerHTML = "";
        document.querySelector("#first_name-error").innerHTML = "";
        document.querySelector("#last_name-error").innerHTML = "";
        document.querySelector("#email-error").innerHTML = "";
        document.querySelector("#contact_number-error").innerHTML = "";
        document.querySelector("#gender-error").innerHTML = "";

        document.getElementById("validation-error").classList.remove("hidden");
        document.getElementById("validation-error").classList.add("flex");
        document.getElementById("user-account-created").classList.remove("flex");
        document.getElementById("user-account-created").classList.add("hidden");

        let output = error.response.data;

        ErrorManager(output);

      });
  };

  return (
    <div>

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 mt-20 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2 rounded-full"
              src={window.location.origin + "/favicon.png"}
              alt="logo"
            />
            Welcome to {process.env.REACT_APP_NAME}
          </a>
          <div className="w-full sm:bg-white rounded-lg shadow-none sm:shadow dark:border md:mt-0 mb-20 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6">

                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <span className="text-red-600 text-xs pt-1" id="username-error"></span>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="new-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="text-red-600 text-xs pt-1" id="password-error"></span>
                </div>

                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm-password"
                    autocomplete="new-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span className="text-red-600 text-xs pt-1" id="password_confirmation-error"></span>
                </div>

                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your first name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="E.g.: Jhon"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <span className="text-red-600 text-xs pt-1" id="first_name-error"></span>
                </div>

                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="E.g. : Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <span className="text-red-600 text-xs pt-1" id="last_name-error"></span>
                </div>

                <div>
                  <label
                    htmlFor="contact_number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your contact number
                  </label>
                  <input
                    type="text"
                    name="contact-number"
                    id="contact_number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="94-777-190-590"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                  <span className="text-red-600 text-xs pt-1" id="contact_number-error"></span>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                  />
                  <span className="text-red-600 text-xs pt-1" id="email-error"></span>
                </div>

                <div>
                  <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your gender</label>
                  <select
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                  >
                    <option selected disabled value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Femal</option>
                    <option value="rather_not_say">Rather not say</option>
                    <option value="other">Other</option>
                  </select>
                  <span className="text-red-600 text-xs pt-1" id="gender-error"></span>

                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        checked={remember}
                        onChange={(e) => setRemember(!remember)}
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* <a
                    href="/"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Forgot password?
                  </a> */}
                </div>

                <button
                  type="submit"
                  onClick={handleSignup}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?&nbsp;&nbsp;
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div
        id="user-account-created"
        className="fixed top-4 right-4 hidden items-center p-4 mb-4 ml-4 border border-green-300 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 w-fit"
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">
          User account created sucessfully.
        </div>
        &nbsp;&nbsp;
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
          data-dismiss-target="#user-account-created"
          aria-label="Close"
          id="user-account-created-close-bt"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>

      <div
        id="validation-error"
        className="fixed top-4 right-4 hidden items-center p-4 mb-4 border border-red-300 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">
          Validation error. Check the information provided.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
          data-dismiss-target="#alert-2"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default SignUp;