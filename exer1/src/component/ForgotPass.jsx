import React,{useState} from 'react'

 const ForgotPass = ({signOut , signout}) => {

    const [email, setEmail] = useState("");
    const [sw, setsw] = useState(false);
    const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
      const checkEmailVidation = (e) => {
        if (validateEmail(e.target.value)) {
            setEmail(e.target.value);
            setsw(true);
        }
        else{
            setsw(false);
        }
      };
    const sendNewPass = ()=>{
        if(sw) alert("رمز جدید با موفقیت ارسال شد");
        else alert("ایمیل اشتباه است.")
    }

    return (
        <div className={signout ? "show--info--body--invisible" :"show--info--body"}>
            <h1>بازیابی رمز عبور</h1>
            <input type="email" placeholder="ایمیل خود را وارد کنید" required onChange={(e) => checkEmailVidation(e)}/>
            <label className={sw ? "invisible-label":"visible-label"}>ایمیل وارد شده اشتباه است!</label>
            <button className="btn" onClick={sendNewPass}>ارسال</button>
            <button className="btn" onClick={signOut}>خروج</button>
        </div>
    )
}
export default ForgotPass;