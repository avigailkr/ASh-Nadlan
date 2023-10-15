import * as TypeAction from "../ActionTypes";

const initialState = {
    arr: [],
}

const ImgReducer=(state=initialState,action)=>{
  switch(action.type){
          case TypeAction.DELETED_IMG:
              let arr1 = state.arr.filter((item) => { return item.id !== action.payload })
              return {
                  ...state,
                  arr: arr1
              }
          case TypeAction.ADDED_IMG:
              return {
                  ...state,
                arr: [...state.arr,action.payload] 
              }
              case TypeAction.SAVE_ARR_IMG:
              return {
                ...state,
                arr:action.payload
              }
  }
  return state;

}
export default ImgReducer; 