
import * as TypeAction from "../ActionTypes";

//חדר נבחר
export const selectedRoom = (id) => {
  return {
    type: TypeAction.SELECTED_ROOM,
    payload: id
  };
};

//שליחת הודעה הוספה למערך
export const addMassage = (mass) => {
  return {
    type: TypeAction.ADDED_MASSAGE,
    payload: mass
  };
};

//מחיקת כל ההתכתבות
export const deleteChat = () => {
  return {
    type: TypeAction.DELETED_CHAT
  };
};

//שמירת מערך ההודעות
export const saveArrChat = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_MASSAGES,
    payload: arr
  };
};















// import * as TypeAction from "../ActionTypes";
// export const selectedRoom = (id) => {
//   return {
//     type: TypeAction.SELECTED_ROOM,
//     payload: id,
//   };
// };

// export const AddRoom = (room) => {
//   return {
//     type: TypeAction.ADDED_ROOM,
//     payload: room,
//   };
// };
// export const DeleteRoom = (id) => {
//   return {
//     type: TypeAction.DELETED_ROOM,
//     payload: id,
//   };
// };
// export const SaveArrRoom = (arr) => {
//   return {
//     type: TypeAction.SAVE_ARR_ROOM,
//     payload: arr,
//   };
// };


