import * as TypeAction from "../ActionTypes";

export const AddImg = (obj) => {
  return {
    type: TypeAction.ADDED_IMG,
    payload: obj,
  };
};
export const DeleteImg = (id) => {
  return {
    type: TypeAction.DELETED_IMG,
    payload: id,
  };
};
export const SaveArrImg = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_IMG,
    payload: arr,
  };
};
