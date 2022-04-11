import React, { useState, useEffect } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if(password.length > 5 && email !== '') {
      setBtn(true)
    } else if (btn){
      setBtn(false )
    }
  }, [password, email])

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then(user => {
      setEmail('')
      setPassword('')
      navigate('/welcome', {replace: true})
      
    })
    .catch(err => {
      setError(err);
      setEmail('');
      setPassword('');
    })
  }
  

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {error !=='' && <span>{error.message}</span>}
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  autoComplete="off"
                  required
                ></input>
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  autoComplete="off"
                  required
                ></input>
                <label htmlFor="password">Mot de passe</label>
              </div>

              {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/signup">
                Nouveau sur marvel Quiz ? Incrivez-vous maintenant.
              </Link>
              <br/>
              <Link className="simpleLink" to="/forgetpassword">
                Mot de passe oublié ? Récupérez-le ici. 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
