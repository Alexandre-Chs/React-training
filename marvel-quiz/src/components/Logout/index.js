import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';


const Logout = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (checked) {
      signOut(auth)
        .then(() => {
          console.log("vous etes deconnecte");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => {
          console.log("oups il y a un probleme");
        });
    }
  }, [checked]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="logoutContainer">
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={checked} />
        <span className="slider round"  data-tip="Déconnexion"></span>
      </label>
      <ReactTooltip place="left" type="dark" effect="solid"/>
    </div>
  );
};

export default Logout;
