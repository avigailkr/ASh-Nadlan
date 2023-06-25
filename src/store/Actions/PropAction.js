import * as TypeAction from "../ActionTypes";

export const AddProp = (prop) => {
  return {
    type: TypeAction.ADDED_PROPERTY,
    payload: prop,
  };
};
export const DeleteProp = (id) => {
  return {
    type: TypeAction.DELETED_PROPERTY,
    payload: id,
  };
};
export const SaveArrProp = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_PROPERTY,
    payload: arr,
  };
};


