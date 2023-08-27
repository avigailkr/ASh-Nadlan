import * as TypeAction from "../ActionTypes";

const initialState = {
    arr: [],
    arrSourc:[],
    message: null
}

const PropReducer=(state=initialState,action)=>{
  switch(action.type){
          case TypeAction.DELETED_PROPERTY:
              let arr1 = state.arr.filter((item) => { return item.Id != action.payload })
              
              return {
                  ...state,
                  arr: arr1
              }
          case TypeAction.ADDED_PROPERTY:
              return {
                  ...state,
                arr: [...state.arr,action.payload] 
              }
              case TypeAction.SAVE_ARR_PROPERTY:
              return {
                ...state,
                arr:action.payload,
                arrSourc:action.payload
              } 
              case TypeAction.ADD_TO_ARR_PROPERTY:
                // איך מוסיפים דירות למערך הדירות שלא הופיעו כבר בסינון???????????????
              return {
                ...state,
                arr:action.payload
              }
              case TypeAction.ADDED_CITY:
              return {
                ...state,
                arrCity: [...state.arrCity,action.payload]
              }
          case TypeAction.SAVE_ARR_CITY:
            return {
              ...state,
              arrCity:action.payload
            } 
          case TypeAction.SAVE_ARR_TYPE:
            return {
              ...state,
              arrType:action.payload
            }
          case TypeAction.SAVE_ARR_STATUS:
            return{
              ...state,
              arrStatus:action.payload
            }  
}
  return state;

}
export default PropReducer; 