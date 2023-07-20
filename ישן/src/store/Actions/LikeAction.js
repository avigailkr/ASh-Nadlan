import * as TypeAction from "../ActionTypes";

export const AddLike = (objLike) => {
  return {
    type: TypeAction.ADDED_LIKE,
    payload: objLike,
  };
};
export const DeleteLike = (id) => {
  return {
    type: TypeAction.DELETED_LIKE,
    payload: id,
  };
};
export const SaveArrLike = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_LIKE,
    payload: arr,
  };
};



