import { DisabledByDefault } from "@mui/icons-material";
import * as TypeAction from "../ActionTypes";

const initialState = {
  arr: [],
  selectedRoom: null,
  message: null,
  client: null
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypeAction.SELECTED_ROOM:
      return {
        ...state,
        selectedRoom: action.payload,
      };

    case TypeAction.DELETED_CHAT:
      return {
        ...state,
        arr: [],
      };
    case TypeAction.ADDED_MASSAGE:
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };

    case TypeAction.SAVE_ARR_MASSAGES:
      console.log("action.payload")
      console.log(action.payload)
      return {
        ...state,
        arr: action.payload
      };
    case TypeAction.SAVE_NAME_CLIENT:
      return {
        ...state,
        client: action.payload
      };
  }
  return state;
};
export default ChatReducer;
