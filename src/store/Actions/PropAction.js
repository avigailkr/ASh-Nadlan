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
export const SaveArrSource = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_SOURCE,
    payload: arr,
  };
};
export const AddToArrProp = (arr) => {
  return {
    type: TypeAction.ADD_TO_ARR_PROPERTY,
    payload: arr,
  };
}

  export const AddCity =(city)=>{
    return {
      type: TypeAction.ADDED_CITY,
      payload: city,
    };
  };
  export const SaveArrCity = (arrCity) =>{
    return {
      type: TypeAction.SAVE_ARR_CITY,
      payload: arrCity,
    };
  };
  export const SaveArrType = (arrType) =>{
    return {
      type: TypeAction.SAVE_ARR_TYPE,
      payload: arrType,
    };
  };
  export const SaveArrStatus = (arrStatus) =>{
    return {
      type: TypeAction.SAVE_ARR_STATUS,
      payload: arrStatus,
    };
};
export const SaveDetailsProp =(det) =>{
  return{
    type:TypeAction.SAVE_PROPERTY,
    payload:det,
  };
}

export const SaveArrFurniture = (arrFurniture) =>{
  return {
    type: TypeAction.SAVE_ARR_FURNITURE,
    payload: arrFurniture,
  };
};

export const SavePropsUrl = (url) =>{
  console.log("SavePropsUrl")
  console.log(url)
  return {
    type: TypeAction.SAVE_PROPS_URL,
    payload: url,
  };
};