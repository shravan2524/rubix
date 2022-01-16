import React,{useState} from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <form action="" method="post">
      <div>
        <input type="text" name="username" placeholder="Username/Email" />
      </div>
      <div>
        <input type="text" name="password" placeholder="Password" />
      </div>
      <button type="submit">Login</button>
      <hr />
      <a href=""><img className={styles["google-logo"]} src="https://img.icons8.com/fluency/48/000000/google-logo.png"/></a>
    </form>
  );
};

const Signup = () => {
  return (
    <form action="" method="post">
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <div>
        <input type="text" name="email" placeholder="Email" />
      </div>
      <div>
        <input type="text" name="password" placeholder="Password" />
      </div>
      <div>
        <input type="text" name="password" placeholder="Confirm Password" />
      </div>
      <button type="submit">Sign up</button>
      <hr />
      <a href=""><img className={styles["google-logo"]} src="https://img.icons8.com/fluency/48/000000/google-logo.png"/></a>
    </form>
  );
};

const LogPage = () => {
 const [wantLogin,setWantLogin]=useState(true)

  const wantLoginHandler=()=>{
    setWantLogin(true);
  }
  const wantSigninHandler=()=>{
    setWantLogin(false);
  }

  return (
    <React.Fragment>
      <div className={styles["main-container"]}>
        <div className={styles["login-container"]}>
          <nav className={styles["login-navbar"]}>
            <ul className={styles["login-navbar__list"]}>
              <li className={styles["login-navbar__list--itemlogin"]} onClick={wantLoginHandler} >Login</li>
              <li className={styles["login-navbar__list--item"]} onClick={wantSigninHandler}>Sign Up</li>
            </ul>
          </nav>
          <div className={styles["form-container"]}>
            {wantLogin&&<Login />}
            {!wantLogin && <Signup />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LogPage;
