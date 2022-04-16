import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import phone from "../images/phone.png";
import store from "../redux/store";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneContainer() {
  const [totalPhone, setTotalPhone] = useState(1);


  const phones = useSelector((state) => state.phone.phones);
  const dispatch = useDispatch(totalPhone);

  return (
    <div className="container">
      <img src={phone} alt="phone"></img>
      <p>
        Disponibilité :<span id="count"> {phones}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => dispatch(buyPhone(totalPhone))}>Acheter</button>
        <input type="text" value={totalPhone} onChange={(e) => setTotalPhone(e.target.value)}></input>
      </div>
    </div>
  );
}

export default PhoneContainer;

// import React from "react";
// import { connect } from "react-redux";
// import phone from "../images/phone.png";
// import store from "../redux/store";
// import { buyPhone } from "../redux/phone/actionPhone";

// function PhoneComponent(props) {
//   console.log(props);
//   return (
//     <div className="container">
//       <img src={phone} alt="phone"></img>
//       <p>
//         Disponibilité :<span id="count"> {props.phones}</span>
//       </p>
//       <button onClick={props.buyPhone}>Acheter</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     phones: state.phones,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyPhone: () => dispatch(buyPhone()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
