import React, { useState } from 'react';
import axios from "axios";

import { Link } from "react-router-dom";

// Utilities
import { encryptData } from '../utils/CryptoJS';

// css files
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleLogin = (event) => {
    event.preventDefault();

    /* 
    * Send a POST request for login
    */
    axios({
      method: 'post',
      url: 'https://cosmovoyage-api.krag.lk/api/v1/user/login',
      data: {
        username: username,
        password: password
      }
    })
      .then(function (response) {

        let output = response.data;

        if (output.success === true) {

          // User login token
          let token = output.data.token;

          // Encrypt the token and store in session storage
          sessionStorage.setItem("token", encryptData(token));

          setUsernameError('');
          setPasswordError('');

          console.log("User Logged In sucessfull!");
        }
      })
      .catch(function (error) {

        let output = error.response.data;

        if (output.success === false) {

          let errors = output.data;

          if (!Array.isArray(errors)) {
            // array does not exist or is empty
            errors.password.forEach(pass => {
              console.log(pass);
            });
          } else {
            // a lot of text fileds exists
            errors.forEach(error => {
              console.log("TextField : ");
            });
          }
        }

      });
  };

  return (
    <div>

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
                Log in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <span className="text-red-600 text-xs pt-1">{usernameError}</span>
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="text-red-600 text-xs pt-1">{passwordError}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
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
                  onClick={handleLogin}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Log in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?&nbsp;&nbsp;
                  <Link
                    to="/"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Login;