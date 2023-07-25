import * as TypeAction from "../ActionTypes";


export const saveCity = (city) => {
  return {
    type: TypeAction.SAVE_CITY,
    payload: city
  };
};
export const saveRoom = (room) => {
  return {
    type: TypeAction.SAVE_ROOM,
    payload: room
  };
};
export const saveTpeySale = (type) => {
  return {
    type: TypeAction.SAVE_TYPE_SALE,
    payload: type
  };
};
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