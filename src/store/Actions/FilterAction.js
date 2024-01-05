import * as TypeAction from "../ActionTypes";


export const saveCity = (city) => {
  return {
    type: TypeAction.SAVE_CITY,
    payload: city
  };
}
export const saveRoom = (room) => {
  return {
    type: TypeAction.SAVE_ROOM,
    payload: room
  };
}
export const saveTpeySale = (type) => {
  return {
    type: TypeAction.SAVE_TYPE_SALE,
    payload: type
  }
}
//שמירת טווח שנים
export const saveFromYear = (year) => {
  return {
    type: TypeAction.SAVE_FROM_YEARS,
    payload: year
  };
}
export const saveUntilYear = (year) => {
  return {
    type: TypeAction.SAVE_UNTIL_YEARS,
    payload: year
  };
}
export const saveType = (id) => {
  return {
    type: TypeAction.SAVE_TYPE,
    payload: id
  };
}
//שמירת טווח גודל
export const saveFromSize = (size1) => {
  return {
    type: TypeAction.SAVE_FROM_SIZE,
    payload: size1
  };
}
  export const saveUntilSize = (size2) => {
    return {
      type: TypeAction.SAVE_UNTIL_SIZE,
      payload: size2
    };
  };
  //שמירת טווח מחיר
  export const saveFromPrice = (price1) => {
    return {
      type: TypeAction.SAVE_FROM_PRICE,
      payload: price1
    };
  }
  export const saveUntilPrice = (price2) => {
    return {
      type: TypeAction.SAVE_UNTIL_PRICE,
      payload: price2
    };
  }
  export const saveIsClearFilter = (ans) => {
    return {
      type: TypeAction.Is_CLEAR_FILTER,
      payload: ans
    };
  };

  //האם הכפתורים נבחרו
  export const saveChooseAddFilter = (ans) => {
    return {
      type: TypeAction.Is_CHOOSE_ADD,
      payload: ans
    };
  };
  export const saveChooseCityFilter = (ans) => {
    return {
      type: TypeAction.Is_CHOOSE_CITY,
      payload: ans
    };
  };
  export const saveChoosePriceFilter = (ans) => {
    return {
      type: TypeAction.Is_CHOOSE_PRICE,
      payload: ans
    };
  };
  export const saveChooseYearFilter = (ans) => {
    return {
      type: TypeAction.Is_CHOOSE_YEAR,
      payload: ans
    };
  };
  export const saveChooseRoomFilter = (ans) => {
    return {
      type: TypeAction.Is_CHOOSE_ROOM,
      payload: ans
    };
  };
  export const saveChooseSizeFilter = (ans) => {
    return {
      type: TypeAction.Is_CHOOSE_SIZE,
      payload: ans
    };
  };
  export const saveChooseTypeFilter = (ans) => {
    return {
      type: TypeAction.Is_CHOOSE_TYPE,
      payload: ans
    };
  };
  export const saveChooseTypeSaleFilter = (ans) => {
    return {
      type: TypeAction.Is_CHOOSE_TYPE_SALE,
      payload: ans
    };
  };

  //smartagent
  export const saveArrSmartAgent = (arr) => {
    return {
      type: TypeAction.SAVE_ARR_SMARTAGENT,
      payload: arr
    };
  };
  export const deleteFromArrSmartAgent = (id) => {
    return {
      type: TypeAction.DELETE_FROM_ARR_SMARTAGENT,
      payload: id
    };
  };
  export const AddToArrSmartAgent = (smart) => {
    return {
      type: TypeAction.ADD_TO_ARR_SMARTAGENT,
      payload: smart
    };
  };