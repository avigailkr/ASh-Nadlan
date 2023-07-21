import * as TypeAction from "../ActionTypes";

const initialState = {
        from:null,
        until:null,
        type:[]
    

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
                case TypeAction.SAVE_TYPE:
                  console.log(initialState.type)
                return{
                    ...state,
                    type:action.payload
                }
                
                
                
              
  }
  return state;

}
export default FilterReducer; 

