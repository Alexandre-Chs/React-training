// ACTION
const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";

function buyPhone() {
  return {
    type: BUY_PHONE,
  };
}

function buyTablet() {
  return {
    type: BUY_TABLET,
  };
}

function buyTV() {
  return {
    type: BUY_TV,
  };
}

//REDUCER
const initialStatePhone = {
  phones: 5,
  tablet: 10,
};

const initialStateTv = {
  tv: 20,
};

const PhonesReducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
      break;
    case BUY_TABLET:
      return {
        ...state,
        tablet: state.tablet - 1,
      };
      break;

    default:
      return state;
  }
};

const TvReducer = (state = initialStateTv, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - 1,
      };
    default:
      return state;
  }
};

//COMBINE REDUCER
const rootReducer = Redux.combineReducers({
  phone: PhonesReducer,
  tv: TvReducer,
})

// REDUX
const store = Redux.createStore(rootReducer);

const availablePhones = document.getElementById("count");
availablePhones.innerHTML = store.getState().phone.phones;
const availableTablet = document.getElementById("count-tab");
availableTablet.innerHTML = store.getState().phone.tablet;
const availableTv = document.getElementById("count-tv");
availableTv.innerHTML = store.getState().tv.tv


document.getElementById("buy-phone").addEventListener("click", function () {
  store.dispatch(buyPhone());
});

document.getElementById("buy-tablet").addEventListener("click", function () {
  store.dispatch(buyTablet());
});

document.getElementById("buy-tv").addEventListener("click", function () {
  store.dispatch(buyTV());
});

store.subscribe(() => {
  availablePhones.innerHTML = store.getState().phone.phones;
  availableTablet.innerHTML = store.getState().phone.tablet;
  availableTv.innerHTML = store.getState().tv.tv;
});
