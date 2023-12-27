import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const baseURL = import.meta.env.VITE_BASE_URL;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const [error, setError] = useState(null);

  const login = async (e) => {
    console.log(`${baseURL}/login`);
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials:"include",
      });
      console.log(username,password);

      if (!response.ok) {
        throw new Error(`Login failed with status ${response.status}`);
      }

      const userInfo = await response.json();
      setUserInfo(userInfo);
      setRedirect(true);
    } catch (error) {
      // console.error("Login error:", error.message);
      setError("Invalid username or password. Please try again.");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a className="form-recovery" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="form-group">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div class="pen-footer"><a href="https://www.behance.net/gallery/30478397/Login-Form-UI-Library" target="_blank"><i class="material-icons">arrow_backward</i>View on Behance</a><a href="https://github.com/andyhqtran/UI-Library/tree/master/Login%20Form" target="_blank">View on Github<i class="material-icons">arrow_forward</i></a></div> */}
    </div>
  );
};

export default LoginPage;

// --------------------------------------------------------
// import React from "react";
// import { useContext, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

// const baseURL = import.meta.env.VITE_BASE_URL;

// const LoginPage = () => {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [redirect, setRedirect] = useState(false)
//   const {setUserInfo} = useContext(UserContext)

//   const login = async (e) =>{
//     e.preventDefault()
//     const response = await fetch(`${baseURL}/login`, {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//       credentials:"include"
//     })
//     if (response.ok) {
//       response.json().then((userInfo) =>{
//         setUserInfo(userInfo);
//         setRedirect(true)
//         console.log("asdwasdwd");
//       })
//     }
//   }
//   if (redirect) {
//     return <Navigate to ="/"/>
//   }

//   return (
//     <div>
//       <div className="form">
//         <div className="form-toggle"></div>
//         <div className="form-panel one">
//           <div className="form-header">
//             <h1>Account Login</h1>
//           </div>
//           <div className="form-content">
//             <form onSubmit={login} >
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <input
//                   id="username"
//                   type="text"
//                   name="username"
//                   required="required"
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   required="required"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="form-remember">
//                   <input type="checkbox" />
//                   Remember Me
//                 </label>
//                 <a className="form-recovery" href="#">
//                   Forgot Password?
//                 </a>
//               </div>
//               <div className="form-group">
//                 <button type="submit" >Log In</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* <div class="pen-footer"><a href="https://www.behance.net/gallery/30478397/Login-Form-UI-Library" target="_blank"><i class="material-icons">arrow_backward</i>View on Behance</a><a href="https://github.com/andyhqtran/UI-Library/tree/master/Login%20Form" target="_blank">View on Github<i class="material-icons">arrow_forward</i></a></div> */}
//     </div>
//   );
// };

// export default LoginPage;
