import * as TypeAction from "../ActionTypes";

const initialState = {
    arr: [],
    selectedRoom: null,
    message: null,

}

const ChatReducer=(state=initialState,action)=>{
  switch(action.type)
  {
              case TypeAction.SELECTED_ROOM:
                return{
                    ...state,
                    selectedRoom:action.payload
                }
                
              case TypeAction.DELETED_CHAT:
                  return {
                      ...state,
                      arr:[]
                  }
              case TypeAction.ADDED_MASSAGE:
                  return {
                    ...state,
                    arr: [...state.arr,action.payload]
                  }
              
              case TypeAction.SAVE_ARR_MASSAGES:
              return {
                ...state,
                arr:action.payload
              }

  }
  return state;

}
export default ChatReducer; 

