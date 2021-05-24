import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Signup = ({ newUser }) => {
  const [showPass, setshowPass] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [state, setstate] = useState([
    "Tehran",
    "Khorasan razavi",
    "Yazd",
    "Esfehan",
    "Khoozestan",
    "Lorestan",
    "kordestan",
    "ّFars",
    "Kerman",
    "Gilan",
  ]);
  const [cities, setcities] = useState([
    [
      "tehran",
      "rey",
      "firooz kooh",
      "varamin",
      "malaard",
      "damavand",
      "pardis",
      "pakdasht",
      "shemiran",
      "shahriar",
    ],
    [
      "mashhad",
      "sabzevar",
      "neyshaboor",
      "torbat",
      "ghoochan",
      "gonabad",
      "binalood",
      "sarakhs",
      "fariman",
      "golbahar",
    ],
    [
      "ardakan",
      "yazd",
      "meybod",
      "ashkezar",
      "behbad",
      "bafgh",
      "mehriz",
      "taft",
      "abr kooh",
      "khatam",
    ],
    [
      "aran va bid gol",
      "ardestan",
      "kashan",
      "esfahan",
      "khansar",
      "natanz",
      "najaf abad",
      "naeen",
      "golpaygan",
      "mobarake",
    ],
    [
      "andimeshk",
      "dezfool",
      "shoosh",
      "lali",
      "izeh",
      "shooshtar",
      "hoveyze",
      "abaadaan",
      "ahvaz",
      "behbahaan",
    ],
    [
      "azna",
      "boroojerd",
      "pol dokhtar",
      "chagni",
      "khorram abaad",
      "dolfan",
      "dorood",
      "selsele",
      "kooh dasht",
    ],
    [
      "sanandaj",
      "saghez",
      "marivan",
      "bane",
      "gharve",
      "kamiran",
      "bijar",
      "dehgalan",
      "sarv abaad",
    ],
    [
      "shiraz",
      "abade",
      "firooz abad",
      "marvdasht",
      "larestan",
      "mehr",
      "rostam",
      "jahrom",
      "darab",
      "zarghan",
    ],
    [
      "kerman",
      "raver",
      "zarand",
      "rafsanjan",
      "anaar",
      "sirjan",
      "jiroft",
      "kerman",
      "faryiab",
      "raber",
      "bam",
    ],
    [
      "rasht",
      "lahijan",
      "roodsar",
      "langarood",
      "bandar anzali",
      "roodbar",
      "foman",
      "astara",
      "khamam",
      "masal",
    ],
  ]);

  const [city, setcity] = useState([]);
  const [selectedState, setselectedState] = useState("استان را انتخاب کنید");
  const [selectedCiry, setselectedCiry] = useState("شهر را انتخاب کنید");
  let num;
  const [flag, setflag] = useState(false);
  const [sw, setsw] = useState(false);

  const togglePass = () => {
    setshowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(sw){
    newUser({
      firstName,
      lastName,
      email,
      pass,
    });
    setfirstName("");
    setlastName("");
    setEmail("");
    setPass("");
}
else{
    alert("اطلاعات به درستی وارد نشده است!")
}
  };

  const changeState = (e) => {
    console.log(e.target.value);
    setselectedState(e.target.value);
    for (let i = 0; i < state.length; i++) {
      if (state[i] === e.target.value) {
        num = i;
      }
    }
    console.log(num);
    console.log(cities[num]);
    setcity(cities[num]);
    // console.log(state.findIndex(e.target.value));
  };

  const changeCity = (e) => {
    console.log(e.target.value);
    setselectedCiry(e.target.value);
  };

  const changeEducation = () => {
    setflag(true);
  };

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

  const showmessage = ()=>{
    alert("لطفا نام را وارد کنید")
  }

  return (
    <div className="sign-up">
      <div className="name">
        <input
          type="text"
          placeholder=" نام خانوادگی"
          required
          onChange={(e) => setlastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="نام"
          
          onChange={(e) => setfirstName(e.target.value)}
        />
      </div>
      <input
        type="email"
        placeholder="پست اکترونیک"
        required
        onChange={(e) => checkEmailVidation(e)}
      />
      {/* <label className={sw ? "invisible-label":"visible-label"}>ایمیل وارد شده اشتباه است!</label> */}
      <div className="pass-wrapper">
        <input
          type={showPass ? "text" : "password"}
          placeholder="رمز ورود"
          required
          onChange={(e) => setPass(e.target.value)}
        />
        {showPass === true ? (
          <FaEye className="icon" onClick={() => togglePass()} />
        ) : (
          <FaEyeSlash className="icon" onClick={() => togglePass()} />
        )}
      </div>
      <select
        name="state"
        id="state"
        placeholder="استان"
        value={selectedState}
        onChange={(e) => changeState(e)}
      >
        {state.map((s, i) => {
          return <option key={i}>{s}</option>;
        })}
      </select>
      <select
        name="city"
        id="city"
        placeholder="شهر"
        value={selectedCiry}
        onChange={(e) => changeCity(e)}
      >
        <option>استان را انتخاب کنید</option>
        {city.map((c, i) => {
          return <option key={i}>{c}</option>;
        })}
      </select>
      <div className="set-uni">
        <select value="تحصیلات خود را انتخاب کنید" onChange={changeEducation}>
          <option>دیپلم</option>
          <option>کارشناسی</option>
          <option>کارشناسی ارشد</option>
          <option>دکتری</option>
        </select>
        <input
          type="text"
          placeholder="محل تحصیل خود را وارد کنید"
          className={!flag ? "invisible-input" : ""}
          required
        />
      </div>
      <div className="footer">
        <button className="submit" onClick={firstName ? handleSubmit:showmessage}>
          {"ثبت نام کنید"}
        </button>
      </div>
    </div>
  );
};

export default Signup;
