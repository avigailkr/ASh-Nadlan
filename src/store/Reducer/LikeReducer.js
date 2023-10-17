import * as TypeAction from "../ActionTypes";

const initialState = {
    arr: [],
    message: null
}

const LikeReducer=(state=initialState,action)=>{
  switch(action.type){
          case TypeAction.DELETED_LIKE:
              let arr1 = state.arr.filter((item) => { return item.id !== action.payload })
              return {
                  ...state,
                  arr: arr1
              }
          case TypeAction.ADDED_LIKE:
              return {
                  ...state,
                arr: [...state.arr,action.payload] 
              }
              case TypeAction.SAVE_ARR_LIKE:
              return {
                ...state,
                arr:action.payload
              }
  }
  return state;

}
export default LikeReducer; 