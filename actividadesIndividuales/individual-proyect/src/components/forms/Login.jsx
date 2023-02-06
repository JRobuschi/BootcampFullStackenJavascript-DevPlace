import "./login.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LOGIN_URL = "http://localhost:3060/users/login";

export default function LoginPage() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/store";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(
      //   LOGIN_URL,
      //   JSON.stringify({ email, password }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //     withCredentials: true,
      //   }
      // );

      var bodyFormData = {
        email: email,
        password: password,
      };

      const response = await axios.post(LOGIN_URL, bodyFormData);

      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;

      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section id="contactUs">
      <h2>Contact Us</h2>

      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">Log In</h3>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
          style={{ color: "red" }}
        >
          {errMsg}
        </p>
        <p className="form__paragraph">
          You do not have an account?{" "}
          <a href="/register" className="form__link">
            Click here
          </a>
        </p>

        <div className="form__container">
          <div className="form__group">
            <input
              type="text"
              id="user"
              ref={userRef}
              className="form__input"
              placeholder=" "
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form__label">Email:</label>
            {/* <label for="email" className="form__label">
              Email:
            </label> */}
            <span className="form__line"></span>
          </div>
        </div>

        <div className="form__container">
          <div className="form__group">
            <input
              type="password"
              id="password"
              className="form__input"
              placeholder=" "
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="form__label">Password:</label>
            {/* <label for="password" className="form__label">
              Password:
            </label> */}
            <span className="form__line"></span>
          </div>
        </div>

        <input type="submit" className="form__submit" />
      </form>
    </section>
  );
}

// import "./login.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function LoginPage() {
//   const url = "http://localhost:3060/users/login";
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [errorMessage, setErrorMessage] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedUserJSON = window.localStorage.getItem("loggedInApp");
//     if (loggedUserJSON) {
//       const user = JSON.parse(loggedUserJSON);
//       setUser(user);
//     }
//   }, []);

//   const submitLoginUser = async (e) => {
//     e.preventDefault();
//     try {
//       var bodyFormData = {
//         email: email,
//         password: password,
//       };

//       const resp = await axios.post(url, bodyFormData);

//       setEmail("");
//       setPassword("");

//       window.localStorage.setItem("loggedInApp", JSON.stringify(resp.data));
//       window.location.href = "/store";
//     } catch (error) {
//       setErrorMessage("Incorrect user or password");
//       setTimeout(() => {
//         setErrorMessage(null);
//       }, 7000);
//     }
//   };

//   return (
//     <section id="contactUs">
//       <h2>Contact Us</h2>

//       <form
//         action="/"
//         method="POST"
//         className="form"
//         onSubmit={submitLoginUser}
//       >
//         <h3 className="form__title">Log In</h3>
//         {errorMessage && <h3 className="form__error">{errorMessage}</h3>}
//         <p className="form__paragraph">
//           You do not have an account?{" "}
//           <a href="/register" className="form__link">
//             Click here
//           </a>
//         </p>

//         <div class="form__container">
//           <div class="form__group">
//             <input
//               type="text"
//               id="email"
//               className="form__input"
//               placeholder=" "
//               required
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label for="user" class="form__label">
//               Email:
//             </label>
//             <span className="form__line"></span>
//           </div>
//         </div>

//         <div class="form__container">
//           <div class="form__group">
//             <input
//               type="password"
//               id="password"
//               className="form__input"
//               placeholder=" "
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <label for="password" className="form__label">
//               Password:
//             </label>
//             <span className="form__line"></span>
//           </div>
//         </div>

//         <input type="submit" className="form__submit" value="Enter" />
//       </form>
//     </section>
//   );
// }
