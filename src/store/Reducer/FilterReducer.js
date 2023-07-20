import * as TypeAction from "../ActionTypes";

const initialState = {
        from:null,
        until:null
    

}

const FilterReducer=(state=initialState,action)=>{
  switch(action.type)
  {
              case TypeAction.SAVE_FROM_YEARS:
                return{
                    ...state,
                    from:action.payload
                }
                case TypeAction.SAVE_UNTIL_YEARS:
                return{
                    ...state,
                    until:action.payload
                }
                
                
                
              
  }
  return state;

}
export default FilterReducer; 

