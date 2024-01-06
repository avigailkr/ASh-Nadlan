import * as TypeAction from "../ActionTypes";
export const SelectedUser = (id) => {
  return {
    type: TypeAction.SELECTED_USER,
    payload: id,
  };
};

export const AddUser = (user) => {
  return {
    type: TypeAction.ADDED_USER,
    payload: user,
  };
};
export const DeleteUser = (id) => {
  return {
    type: TypeAction.DELETED_USER,
    payload: id,
  };
};
export const SaveArrUser = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_USER,
    payload: arr,
  };
};

export const SaveUser = (u) => {
  return {
    type: TypeAction.SAVE_USER,
    payload: u,
  };
};
// export const SaveIsActive = (flag) => {
//   return {
//     type: TypeAction.SAVE_USER,
//     payload: flag,
//   };
// };

export const Exite = () => {
  console.log("property")
  return {
    type: TypeAction.Exit
  };
};

export const SaveArrUsers = (arr) => {


  return {
    type: TypeAction.SAVE_ARR_USERS,
    payload:arr
  };
};

export const UpdateActiveArrUsers = (obj) => {
alert(obj.iduser)
  return {
    type: TypeAction.UPDATE_ACTIVE_ARR_USERS,
    payload:obj
  };
};
