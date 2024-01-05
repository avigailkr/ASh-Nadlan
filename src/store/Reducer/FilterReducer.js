import * as TypeAction from "../ActionTypes";

const initialState = {
  fromyear: 2000,
  untilyear: 2023,
  fromprice: 0,
  untilprice: 5000000,
  type: null,
  fromsize: 0,
  untilsize: 5000,
  room: 1,
  typesale: null,
  city:null,
  clear:false,


  //choose
  chooseyear:false,
  chooseprice:false,
  choosetype:false,
  choosesize:false,
  chooseroom:false,
  choosetypesale:false,
  choosecity:false,
  chooseadd:false,

//smartagent
  arrsmartagent:[]

};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypeAction.SAVE_FROM_YEARS:
      return {
        ...state,
        fromyear: action.payload,
      };
    case TypeAction.SAVE_UNTIL_YEARS:
      return {
        ...state,
        untilyear: action.payload,
      };
      case TypeAction.SAVE_FROM_PRICE:
      return {
        ...state,
        fromprice: action.payload,
      };
    case TypeAction.SAVE_UNTIL_PRICE:
      return {
        ...state,
        untilprice: action.payload,
      };
    case TypeAction.SAVE_FROM_SIZE:
      return {
        ...state,
        fromsize: action.payload,
      };
    case TypeAction.SAVE_UNTIL_SIZE:
      return {
        ...state,
        untilsize: action.payload,
      };
    case TypeAction.SAVE_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case TypeAction.SAVE_TYPE_SALE:
      return {
        ...state,
        typesale: action.payload,
      };
      case TypeAction.SAVE_CITY:
      return {
        ...state,
        city: action.payload,
      }; 
      case TypeAction.SAVE_TYPE:
      return {
        ...state,
        type: action.payload
      };
      case TypeAction.Is_CLEAR_FILTER:
      return {
        ...state,
        clear: action.payload
      };





      case TypeAction.Is_CHOOSE_ADD:
      return {
        ...state,
        chooseadd: action.payload
      };
      case TypeAction.Is_CHOOSE_CITY:
      return {
        ...state,
        choosecity: action.payload
      };
      case TypeAction.Is_CHOOSE_PRICE:
      return {
        ...state,
        chooseprice: action.payload
      };
      case TypeAction.Is_CHOOSE_ROOM:
      return {
        ...state,
        chooseroom: action.payload
      };
      case TypeAction.Is_CHOOSE_SIZE:
      return {
        ...state,
        choosesize: action.payload
      };
      case TypeAction.Is_CHOOSE_TYPE:
      return {
        ...state,
        choosetype: action.payload
      };
      case TypeAction.Is_CHOOSE_TYPE_SALE:
      return {
        ...state,
        choosetypesale: action.payload
      };
      case TypeAction.Is_CHOOSE_YEAR:
      return {
        ...state,
        chooseyear: action.payload
      };

      //smartagent
      case TypeAction.SAVE_ARR_SMARTAGENT:
      return {
        ...state,
        arrsmartagent: action.payload
      };
      case TypeAction.DELETE_FROM_ARR_SMARTAGENT:
        let arr = state.arrsmartagent.filter((item) => { return item.Id != action.payload })
      return {
        ...state,
        arrsmartagent: arr
      };
      case TypeAction.ADD_TO_ARR_SMARTAGENT:
      return {
        ...state,
        arrsmartagent: [...state.arrsmartagent,action.payload]
      };
  }
  return state;
};
export default FilterReducer;
