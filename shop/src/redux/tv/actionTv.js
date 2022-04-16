import { BUY_TV } from "./type";

export const buyTv = (setTotalTv) => {
  return {
    type: BUY_TV,
    payload: setTotalTv,
  };
};
