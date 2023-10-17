import * as TypeAction from "../ActionTypes";

const initialState = {
  city: null,  
  fromyear:2018,
  untilyear: 2023,
  typesale: null
};

const StatisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypeAction.SAVE_STATISTIC_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case TypeAction.SAVE_STATISTIC_TYPE_SALE:
      return {
        ...state,
        typesale: action.payload,
      };
    case TypeAction.SAVE_STATISTIC_FROM_YEAR:
      return {
        ...state,
        fromyear: action.payload,
      };
    case TypeAction.SAVE_STATISTIC_UNTIL_YEAR:
      return {
        ...state,
        untilyear: action.payload,
      };
    
  }
  return state;
};
export default StatisticReducer;
