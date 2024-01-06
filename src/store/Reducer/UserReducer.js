import * as TypeAction from "../ActionTypes";

const initialState = {
    arr: [],
    selectedUser: null,
    // active:null,
    message: null,
    arrusers:[]
}

const UserReducer=(state=initialState,action)=>{
 
  switch(action.type){
          case TypeAction.SELECTED_USER:
              return{
                arr:state.arr,
                selectedTask:action.payload
            }
          case TypeAction.DELETED_USER:
              let arr1 = state.arr.filter((item) => { return item.Id != action.payload })
              //let song = state.selectedSong && state.selectedSong.id === action.idSong ? null : state.selectedSong;
              return {
                ...state,
                  arr: arr1 ,
                  selectedTask:state.selectedTask
              }
          case TypeAction.ADDED_USER:
              return {
                ...state,
                arr: [...state.arr,action.payload] ,
                selectedUser:action.payload
              }

              case TypeAction.SAVE_ARR_USER:
              return {
                ...state,
                arr:action.payload
              }
              case TypeAction.SAVE_USER:
              return {
                ...state,
                selectedUser:action.payload
              }
              // case TypeAction.SAVE_ISACTIVE:
              // return {
              //   ...state,
              //   active:action.payload
              // }

              case TypeAction.Exit:{
               
               return {
                ...state,
                arr: [],
                selectedUser: null,
                message: null
               }}

               case TypeAction.SAVE_ARR_USERS:{
                console.log("arruserersssssss")
                console.log(action.payload)
                return {
                 ...state,
                 arrusers:action.payload
                }}


                case TypeAction.UPDATE_ACTIVE_ARR_USERS:{
               
                  console.log("state.arrusers")
                  console.log(state.arrusers)
                  console.log(action.payload)
 
                  state.arrusers.map((item, index) => {
                    if (item.iduser == action.payload.iduser) {

                  //     console.log("item.active")
                  // console.log(item.active)
                  // console.log("action.payload.active")
                  // console.log(action.payload.active)

                        if(item.active==1)
                        item.active=0
                      else
                      item.active=1
                    }})

                    console.log(state.arrusers)
                    
                  return {
                   ...state,
                   arrusers:state.arrusers
                  }}
 

  }
  return state;

}
export default UserReducer;