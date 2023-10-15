import axios from 'axios';//ספרייה שיש בה פונקציות לשליפה מהשרת

//users
//כל המשתמשים
export const getAllUsersFromServer=()=>{
    return axios.get("http://localhost:8080/user/getAllUsers");
}
// משתמש ע"י זהות
export const getUserByIdFromServer=(id)=>{
    return axios.get("http://localhost:8080/user/getUser",id);
}
//מחיקת משתמש
export const DeleteUserFromServer=(id)=>{
    console.log("DeleteFromServer")
    return axios.delete(`http://localhost:8080/user/deleteUser/${id}`);
}
//הוספת משתמש
export const AddUserServer=(newuser)=>{
    return axios.post("http://localhost:8080/user/addUser",newuser);
}
//התחברות
export const getLogin=(details)=>{
    return axios.post("http://localhost:8080/user/login",details);
}
//עדכון משתמש
export const UpdateUser=(user)=>{       
    return axios.put(`http://localhost:8080/user/updateUser`,user)
}
//חסימת משתמש
export const ChacimaUser=(id,flag)=>{       
    return axios.put(`http://localhost:8080/user/ChacimaUser/${id}/${flag}`)
}
//שליחת הודעה 
export const sendEmail=()=>{
    return axios.get("http://localhost:8080/user/sendemail");
}
//props
//כל הנכסים
export const getAllPropertysFromServer=()=>{
    return axios.get("http://localhost:8080/property/getAllPropertys");
}
// כל הנכסים של אדם מסויים
export const getAllPropertysByIdFromServer=(id)=>{
    return axios.get(`http://localhost:8080/property/getAllPropsByUserId/${id}`);
}
//שליפת בעל הנכס
export const getOwnerFromServer=(id)=>{
    return axios.get(`http://localhost:8080/property/getOwner/${id}`);
}
//מחיקת נכס
//נפיכתו ללא פעיל
export const NotActivePropFromServer=(id)=>{
    console.log("DeleteFromServer")
    return axios.put(`http://localhost:8080/property/NotActiveProp/${id}`);
}
//העלאת נכס
//הפיכתו לפעיל
export const ActivePropFromServer=(id)=>{
    return axios.put(`http://localhost:8080/property/activeProp/${id}`);
}
//האזור האישי-מחיקת נכס
//נפיכתו ללא פעיל
export const DeletePropFromServer=(id)=>{
    return axios.put(`http://localhost:8080/property/deleteProp/${id}`);
}

//imgs
//כל התמונות של דירה מסויימת
export const getAllImgsByIdFromServer=(idprop)=>{
    return axios.get(`http://localhost:8080/img/getAllImgByPropId/${idprop}`);
}
//דירה על פי מזהה מסויים
// export const getByIdUserFromServer=(id)=>{
//     return axios.get(`http://localhost:8080/apartment/getAllApartmentsByUserId/${id}`);
// }

//שולחים קוד מזהה ומקבלים שם עיר
export const getCityByIdFromServer=(idcity)=>{
    return axios.get(`http://localhost:8080/property/getNameCity/${idcity}`);
}
//שולחים קוד מזהה ומקבלים סוג הנכס 
export const getTypeByIdFromServer=(idtype)=>{
    return axios.get(`http://localhost:8080/property/getNameType/${idtype}`);
}


//like
//מחיקת דירה שאהבתי
export const DeleteLikeFromServer=(id,idprop)=>{
    console.log("delete")
    return axios.delete(`http://localhost:8080/like/deleteLike/${id}/${idprop}`);
}
//הוספת דירה שאהבתי
export const AddLikeFromServer=(newlike)=>{
    console.log("addd")
    return axios.post("http://localhost:8080/like/AddLike",newlike);
}
//שליפת  דירה שאהבתי 
export const getMyLikeFromServer=(id,idprop)=>{
    return axios.get(`http://localhost:8080/like/getPropLikeById/${id}/${idprop}`);
}
// //שליפת כל הדירות שאהבתי 
// export const getAllMyLikeFromServer=(id)=>{
//     return axios.get(`http://localhost:8080/like/getAllLikeById/${id}`);
// }
//שליפת כל הדירות שאהב יוזר מסויים
export const getAllLikeByIdFromServer=(idUser)=>{
    return axios.get(`http://localhost:8080/like/getAllLikeById/${idUser}`)
}


//chat
//שיחה בין 2 משתמשים
//שליפת שיחה מחדר 
// export const getChatFromServer=(id1,id2)=>{
//     return axios.get(`http://localhost:8080/chat/getChat/${id1}/${id2}`);
// }
export const getChatFromServer=(idroom)=>{
    return axios.get(`http://localhost:8080/chat/getChat/${idroom}`);
}
//הוספת הודעה
export const AddMassFromServer=(mass)=>{
    return axios.post("http://localhost:8080/chat/AddMass",mass);
}
//מחיקת צאט
export const DeleteAllMassFromServer=(idroom)=>{
    return axios.delete(`http://localhost:8080/chat/deleteMass/${idroom}`);
}
//הוספת חדר-פתיחת חדר לשיחה חדשה
export const AddRoomFromServer=(users)=>{
    return axios.post("http://localhost:8080/chat/addRoom",users);
}
//שליפת חדר-בדיקה אם יש ל2 משתמשים חדר
export const getRoomFromServer=(owner,user)=>{
    return axios.get(`http://localhost:8080/chat/getRoom/${owner}/${user}`);
}

//שליפת כל המשתמשים שהתכתבו עם בעל דירה מסויים
export const getAllMyClientsFromServer=(ownerid)=>{
    return axios.get(`http://localhost:8080/chat/getAllMyClients/${ownerid}`);
}
//שליפת כל בעלי הדירות שהתכתבתי שמשתמש מסויים התכתב איתם
export const getAllMyOwnerFromServer=(userid)=>{
    return axios.get(`http://localhost:8080/chat/getAllMyOwner/${userid}`);
}
//דירה
//הוספת דירה
export const addPropToServer= async (det)=>{
    const res=await axios.post("http://localhost:8080/property/addProp",det);
    return res;
}

//ערים
//כל הערים
export const getAllCityisFromServer=()=>{
    return axios.get("http://localhost:8080/property/getAllCityis");
}

//כל סוגי הנכסים
export const getAllTypeFromServer=()=>{
    return axios.get("http://localhost:8080/property/getAllTypeProp");
}

//סטטוס
export const getStatusFromServer=()=>{
    return axios.get("http://localhost:8080/property/getStatus");
}


//filtering-סינונים
export const FilterFromServer=(obj)=>{
    console.log("obj")
    console.log(obj)
    return axios.post('http://localhost:8080/filter/getAllPropsByFilter',obj);
} 
// //עיר
export const getPropByCityFromServer=(id)=>{
    return axios.get(`http://localhost:8080/filter/getAllPropsByCity/${id}`);
} 
//כל שמות הערים 
export const getAllNameCitysFromServer=()=>{
    return axios.get(`http://localhost:8080/filter/getAllNamesCity`);
} 
//מזהה עיר
export const getIdCityByNameFromServer=(name)=>{
    return axios.get(`http://localhost:8080/filter/getIdCity/'${name}'`);
} 
// //חדר
// export const getPropByRoom=(roomnum)=>{
//     return axios.get(`http://localhost:8080/filter/getAllPropsByRoom/${roomnum}`);
// }
// //מחיר
// export const getPropByPriceFromServer=(minprice,maxprice)=>{
//     return axios.get(`http://localhost:8080/filter/getAllPropsByPrice/${minprice}/${maxprice}`);
// } 
// //מטר רבוע
// export const getPropBySize=(minsize,maxsize)=>{
//     return axios.get(`http://localhost:8080/filter/getAllPropsBySize/${minsize}/${maxsize}`);
// }
//סוג דירה
// export const getPropByType=(name)=>{
//     return axios.get(`http://localhost:8080/filter/getAllPropsByTypeProp/${name}`);
// }
export const getNamesType=()=>{
    return axios.get("http://localhost:8080/filter/getAllTypeProp");
}
export const getIdType=(type)=>{
    return axios.get(`http://localhost:8080/filter/getIdTypeProp/${type}`);
}


export const getIdTypeSale=(typesale)=>{
    alert(typesale)
    return axios.get(`http://localhost:8080/filter/getIdTypeSaleProp/${typesale}`);
}
// //סוג מכירה
// //למכירה או להשכרה
// export const getPropByTypeSale=(id)=>{
//     return axios.get(`http://localhost:8080/filter/getAllPropsByTypeSale/${id}`);
// }
// //מצב
// export const getPropByStatus=(id)=>{
//     return axios.get(`http://localhost:8080/filter/getAllPropsByStatus/${id}`);
// }
// //קומה
// export const getPropByFloor=(minfloor,maxfloor)=>{
//     return axios.get(`http://localhost:8080/filter/getAllPropsByFloor/${minfloor}/${maxfloor}`);
// }
// //שנה
// export const getPropByYear=(fromyear,untilyear)=>{
//     return axios.get(`http://localhost:8080/filter/getAllPropsByYears/${fromyear}/${untilyear}`);
// }



//statistic-סטטיסטיקות

//מספר דירות למכירה או להשכרה
export const getNumPropToSaleOrRent=(idsale)=>{
    return axios.get(`http://localhost:8080/statistic/numPropToSale/${idsale}`);
}

// מספר דירות למכירה או להשכרה בשנה מסויימת לפי עיר
export const getNumPropByYear=(idcity,idtypesale,year)=>{
    return axios.get(`http://localhost:8080/statistic/statisticCountProperty/${idcity}/${idtypesale}/${year}`);
}

//שליפת פרטי דירה על פי אי די
export const getDetailsOfPropById = (id)=>{
    return axios.get(`http://localhost:8080/property/getDetailsProp/${id}`)
}



// upload image
export const uploadImage = async (img)=>{
    const response= await axios.post(`http://localhost:8080/img/uploadImage`, img);
    return response;
}

//get idProp
export const getFromServerIdProp = async () =>{
     const res = await axios.get("http://localhost:8080/property/getIdProp");
     return res;
}

//update od images - id's
export const updateIdOfImage = () =>{
    return axios.post(`http://localhost:8080/img/updateIdImage`);
}

//bring all images from server by id property
export const bringImagesFromServer =(id)=>{
    return axios.get(`http://localhost:8080/img/getAllImagesById/${id}`)
}

export const bringAllImagesFromServer =()=>{
    return axios.get(`http://localhost:8080/img/getAllImages`)
}
// //bring all images from images file in server
// export const bringImagesFileFromServer = ()=>{
//     return axios.get("http://localhost:8080/images");
// }
