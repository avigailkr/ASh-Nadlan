import { useDispatch } from "react-redux";
import {Exite} from '../store/Actions/UserAction';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Exit=()=>{
    useEffect(()=>{nav("/property")},[])
const nav=useNavigate();
const dis=useDispatch();
dis(Exite());

}

export default Exit;