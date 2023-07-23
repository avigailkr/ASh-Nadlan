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
export const saveType = (arr) => {
  return {
    type: TypeAction.SAVE_TYPE,
    payload: arr
  };
};
export const saveFromSize = (size1) => {
  return {
    type: TypeAction.SAVE_FROM_SIZE,
    payload: size1
  };
};
  export const saveUntilSize = (size2) => {
    return {
      type: TypeAction.SAVE_UNTIL_SIZE,
      payload: size2
    };
  };