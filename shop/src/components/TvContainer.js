import { useState } from "react";
import phone from "../images/phone.png";
import {useDispatch, useSelector} from 'react-redux'
import {buyTv} from '../redux/tv/actionTv'

function TvContainer() {
    const [totalTv, setTotalTv] = useState(1)
    const tv = useSelector((state) => state.television.tv)
    const dispatch = useDispatch(totalTv);

    return (
        <div className="container">
            <img src={phone} alt="phone"></img>
            <p>Disponibilité TV : <span id="count">{tv}</span></p>
            <div className="btnContainer">
            <button onClick={() => dispatch(buyTv(totalTv))}>Acheter</button>
            <input type="text" value={totalTv} onChange={(e) => setTotalTv(e.target.value)}></input>    
            </div>
        </div>
    )

}

export default TvContainer;