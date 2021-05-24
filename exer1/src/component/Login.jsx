import React,{useState} from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = ({entranceValidation , handleForgotPass}) => {
    const [showPass, setshowPass] = useState(false);
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [sw, setsw] = useState(false);

     const togglePass = () =>{
         setshowPass(!showPass);
     }

     const handleEntrance = ()=>{
          entranceValidation(email,pass);
     }

     const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
      const checkEmailVidation = (e) => {
        if (validateEmail(e.target.value)) {
            setemail(e.target.value);
            setsw(true);
        }
        else{
            setsw(false);
        }
      };

    return (
        <div className= "sign-up">
            <input type="email" placeholder="پست اکترونیک" required onChange={(e) => checkEmailVidation(e)}/>
            <label className={sw ? "invisible-label":"visible-label"}>ایمیل وارد شده اشتباه است!</label>
            <div className="pass-wrapper">
            <input type={showPass ? "text" : "password"} placeholder="رمز ورود" required onChange={(e) => setpass(e.target.value)}/>
            {showPass===true ? <FaEye className="icon" onClick={()=>togglePass()}/> 
            :
             <FaEyeSlash className="icon" onClick={()=>togglePass()}/> }   
            </div>
            <p onClick={handleForgotPass}>فراموش کردید؟</p>
            <div className="footer">
        <button className="submit" onClick={handleEntrance}>
          {"ورود" }
        </button>
        </div>
        
        </div>
    )
}
export default Login;