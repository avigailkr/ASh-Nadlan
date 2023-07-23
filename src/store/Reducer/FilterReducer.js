import * as TypeAction from "../ActionTypes";

const initialState = {
        fromyear:null,
        untilyear:null,
        type:[],
        fromsize:null,
        untilsize:null
}

const FilterReducer=(state=initialState,action)=>{
  switch(action.type)
  {
              case TypeAction.SAVE_FROM_YEARS:
                return{
                    ...state,
                    fromyear:action.payload
                }
                case TypeAction.SAVE_UNTIL_YEARS:
                return{
                    ...state,
                    untilyear:action.payload
                }
                case TypeAction.SAVE_FROM_SIZE:
                return{
                    ...state,
                    fromsize:action.payload
                }
                case TypeAction.SAVE_UNTIL_SIZE:
                return{
                    ...state,
                    untilsize:action.payload
                }
                 
  }
  return state;

}
export default FilterReducer; 

