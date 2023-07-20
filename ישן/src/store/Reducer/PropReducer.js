import * as TypeAction from "../ActionTypes";

const initialState = {
    arr: [],
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
                arr:action.payload
              }
  }
  return state;

}
export default PropReducer; 