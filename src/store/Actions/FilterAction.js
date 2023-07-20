import * as TypeAction from "../ActionTypes";

//שמירת טווח שנים
export const saveFromYear = (year) => {
  return {
    type: TypeAction.SAVE_FROM_YEARS,
    payload: year
  };
};
export const saveUntilYear = (year) => {
  return {
    type: TypeAction.SAVE_UNTIL_YEARS,
    payload: year
  };
};