import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {t} = useTranslation();

  
  const login = () => {
    if(passwordRef.current.value === "123") {
      setLoggedIn(true);
      navigate("/admin")
    } else {
      setMessage("password-is-incorrect");
    }
  }

  return (
    <div>
      <div>{message}</div>
      <label>{t("email")}</label>
      <input ref={emailRef} type="text" /> <br />
      <label>{t("password")}</label>
      <input ref={passwordRef} type="text" /> <br />
      <button onClick={login}>{t("login")}</button>
    </div>
  )
}

export default Login