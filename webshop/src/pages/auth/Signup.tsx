import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

function Signup() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {t} = useTranslation();
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUqTsIJ3SvpwWnXqx8kg5wjargBscDXY8";
  
  const signup = () => {
    if(!(passwordRef.current && emailRef.current && passwordRepeatRef.current)) {
      return;
    }


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
      <input ref={passwordRepeatRef} type="password" /> <br /> <br />
      <Button variant='outline-success' onClick={signup}>{t("signup")}</Button>
    </div>
  )
}

export default Signup