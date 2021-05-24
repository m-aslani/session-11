import React, { useState } from "react";
import "./App.css";
import ForgotPass from "./component/ForgotPass";
import Login from "./component/Login";
import ShowInfo from "./component/ShowInfo";
import Signup from "./component/Signup";

function App() {
  const [option, setOption] = useState(1);
  const [data, setdata] = useState([]);
  const [flag, setflag] = useState(false);
  const [myUser, setmyUser] = useState({});
  const [forgotPass, setforgotPass] = useState(false);
  const [signout, setsignout] = useState(false);

  const addNewUser = (newUser) => {
    setdata([...data, newUser]);
    setmyUser(newUser);
    setflag(true);
  };

const sigOut = ()=>{
  setOption(1);
}

  const checkUser = (email, pass) => {
    data.map((data, index) => {
      if (data.email === email && data.pass === pass) {
        setmyUser(data);
        setflag(true);
      }
    });
    if(!flag) alert("ایمیل یا رمز عبور اشتباه است")
  };

  const handleForgotPass = ()=>{
    setforgotPass(true);
    setsignout(false);
}

const backToMain = ()=>{
  setsignout(true);
  setforgotPass(false);
}

  return (
    <div className="container">
      <div className="body">
        <div className="btn-container">
          <button
            className={option === 1 ? "active" : "head-btn"}
            onClick={() => setOption(1)}
          >
            ورود
          </button>
          <button
            className={option === 2 ? "active" : "head-btn"}
            onClick={() => setOption(2)}
          >
            ثبت نام
          </button>
        </div>
        <div className="header">
          {option === 1 ? <h1>خوش آمدید</h1> : <h1>رایگان ثبت نام کنید</h1>}
        </div>
        {option === 2 ? (
          <Signup newUser={addNewUser} />
        ) : (
          <Login entranceValidation={checkUser} handleForgotPass={handleForgotPass} />
        )}
        {flag && <ShowInfo user={myUser} signOut={backToMain} signout={signout}/>}
        {forgotPass && <ForgotPass signOut={backToMain} signout={signout}/>}
      </div>
    </div>
  );
}

export default App;
