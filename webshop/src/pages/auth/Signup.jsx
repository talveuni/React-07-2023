import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Signup() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRepeatRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {t} = useTranslation();
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUqTsIJ3SvpwWnXqx8kg5wjargBscDXY8";
  
  const signup = () => {
    if(passwordRef.current.value === passwordRepeatRef.current.value) {
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true
      }
      const headers = {"Content-Type": "application/json"}
      fetch(url, {
        method:"POST", 
        body: JSON.stringify(payload), 
        headers: headers
      })
        .then(res=> res.json())
        .then(data=> {
          if(data.error=== undefined){
            sessionStorage.setItem("id_token", data.idToken);
            sessionStorage.setItem("refresh_token", data.refreshToken);
            setLoggedIn(true);
            navigate("/admin")
          } else {
            setMessage(data.error.message)
          }
         
        })
    } else {
      setMessage(t("passwords-dont-match"));
    }
  }

  return (
    <div>
      <div>{t(message)}</div>
      <label>{t("email")}</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>{t("password")}</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      <label>{t("repeat-password")}</label><br />
      <input ref={passwordRepeatRef} type="password" /> <br />
      <button onClick={signup}>{t("signup")}</button>
    </div>
  )
}

export default Signup