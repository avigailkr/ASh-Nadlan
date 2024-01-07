import * as TypeAction from "../ActionTypes";

export const saveStatisticCity = (city) => {
  return {
    type: TypeAction.SAVE_STATISTIC_CITY,
    payload: city
  };
};
export const saveStatisticTypeSale = (type) => {
  return {
    type: TypeAction.SAVE_STATISTIC_TYPE_SALE,
    payload: type
  };
};
export const saveStatisticFromYear = (fromyear) => {
    return {
      type: TypeAction.SAVE_STATISTIC_FROM_YEAR,
      payload: fromyear
    };
  };
  export const saveStatisticUntilYear = (untilyear) => {
    return {
      type: TypeAction.SAVE_STATISTIC_UNTIL_YEAR,
      payload: untilyear
    };
  };  
  export const updateShow1 = (status) => {
    return {
      type: TypeAction.UPDATE_SHOW1,
      payload: status
    };
  };