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
export const getLogin=(user)=>{
    return axios.post("http://localhost:8080/user/login",user);
}
//עדכון משתמש
export const UpdateUser=(user)=>{       
    return axios.put(`http://localhost:8080/user/updateUser`,user)
}
//חסימת משתמש
export const ChacimaUser=(id)=>{       
    return axios.put(`http://localhost:8080/user/ChacimaUser/${id}`)
}
//props
//כל הנכסים
export const getAllPropertysFromServer=()=>{
    return axios.get("http://localhost:8080/property/getAllPropertys");
}
//שליפת בעל הנכס
export const getOwnerFromServer=(id)=>{
    return axios.get(`http://localhost:8080/property/getOwner/${id}`);
}
//מחיקת נכס
export const DeletePropFromServer=(id)=>{
    console.log("DeleteFromServer")
    return axios.delete(`http://localhost:8080/property/deleteProp/${id}`);
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



//like
//מחיקת דירה שאהבתי
export const DeleteLikeFromServer=(id,idprop)=>{
    return axios.delete(`http://localhost:8080/like/deleteLike/${id}/${idprop}`);
}
//הוספת דירה שאהבתי
export const AddLikeFromServer=(newlike)=>{
    return axios.post("http://localhost:8080/like/AddLike",newlike);
}
//שליפת  דירה שאהבתי 
export const getMyLikeFromServer=(id,idprop)=>{
    return axios.get(`http://localhost:8080/like/getAllLikeById/${id}/${idprop}`);
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
export const getRoomFromServer=(id1,id2)=>{
    return axios.get(`http://localhost:8080/chat/getRoom/${id1}/${id2}`);
}
