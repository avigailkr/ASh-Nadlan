import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../../style.css";
import ButCity from "./Button/ButCity";
import ButPrice from "./Button/ButPrice";
import ButRoom from "./Button/ButRoom";
import ButSize from "./Button/ButSize";
import ButTypeProp from "./Button/ButTypeProp";
import ButSaleOrBuy from "./Button/ButSaleOrRent";
import ButAdd from "./Button/ButAdd";
import ButBetween from "./Button/ButBetweenYear";
import { useDispatch, useSelector } from "react-redux";
import {
  AddRowInSmartAgent,
  CheckSmartAgent,
  FilterFromServer,
  GetFromServerByIdSmartAgent,
  getAllPropertysFromServer,
} from "../../../Services";
import { SaveArrProp } from "../../../store/Actions/PropAction";
import {
  AddToArrSmartAgent,
  saveArrSmartAgent,
  saveChooseAddFilter,
  saveChooseCityFilter,
  saveChoosePriceFilter,
  saveChooseRoomFilter,
  saveChooseSizeFilter,
  saveChooseTypeFilter,
  saveChooseTypeSaleFilter,
  saveChooseYearFilter,
  saveCity,
  saveFromPrice,
  saveFromSize,
  saveFromYear,
  saveIsClearFilter,
  saveRoom,
  saveTpeySale,
  saveType,
  saveUntilPrice,
  saveUntilSize,
  saveUntilYear,
} from "../../../store/Actions/FilterAction";
import { useNavigate } from "react-router-dom";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { useState } from "react";
import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Filter() {
  const nav = useNavigate();
  let dis = useDispatch();
  const filterobject = useSelector((state) => state.filter);
  const arrsource = useSelector((state) => state.prop.arrsource);
  let [opensmart, SetOpenSmart] = useState(null);
  let selectfilter = useSelector((state) => state.filter);
  let user = useSelector((state) => state.user.selectedUser);
  let [flag, setflag] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (user != null && flag == false) start();

  function start() {
    //מביא את כל הסוכנים של המשתמש
    user != null &&
      GetFromServerByIdSmartAgent(user.Id)
        .then((res) => {
          dis(saveArrSmartAgent(res.data));
        })
        .catch((err) => alert(err));

    setflag(true);
  }
  function smartagent() {
    let obj = {
      FromYear: selectfilter.fromyear,
      UntilYear: selectfilter.untilyear,
      FromPrice: selectfilter.fromprice,
      UntilPrice: selectfilter.untilprice,
      TypeProp: selectfilter.type,
      FromSize: selectfilter.fromsize,
      UntilSize: selectfilter.untilsize,
      Room: selectfilter.room,
      TypeSale: selectfilter.typesale,
      City: selectfilter.city,
      IdUser: user,
    };

    //בדיקה האם קיים סוכן עם חיפוש כזה
    CheckSmartAgent(obj)
      .then((res) => {
        console.log("CheckSmartAgent res.data");
        console.log(res.data);
        if (res.data.length != 0) {
          alert("סוכן זה קיים במערכת");
          handleClose();
        } else
          AddRowInSmartAgent(obj)
            .then((res) => {
              alert("סוכן חכם הופעל בהצלחה");
              addarrsmart(res.data[0].Id); //שולח לפונקציה שתוסיף את האובייקט למערך הסוכנים של המשתמש

              handleClose();
            })
            .catch((err) => alert(err));
      })
      .catch((err) => alert(err));

    SetOpenSmart(null);
  }

  function addarrsmart(id) {
    let obj = {
      FromYear: selectfilter.fromyear,
      UntilYear: selectfilter.untilyear,
      FromPrice: selectfilter.fromprice,
      UntilPrice: selectfilter.untilprice,
      TypeProp: selectfilter.type,
      FromSize: selectfilter.fromsize,
      UntilSize: selectfilter.untilsize,
      Room: selectfilter.room,
      TypeSale: selectfilter.typesale,
      City: selectfilter.city,
      IdUser: user,
      Id: id,
    };
    dis(AddToArrSmartAgent(obj));
    handleClose();
  }

  function filter() {
    if (
      filterobject.chooseyear == false &&
      filterobject.chooseprice == false &&
      filterobject.choosetype == false &&
      filterobject.choosesize == false &&
      filterobject.chooseroom == false &&
      filterobject.choosetypesale == false &&
      filterobject.choosecity == false &&
      filterobject.chooseadd == false
    )
      getAllPropertysFromServer()
        .then((res) => {
          console.log(res.data);
          dis(SaveArrProp(res.data));
          handleClickOpen(); //פותח דיאלוג האם ליצור סוכן
          SetOpenSmart(true);
        })
        .catch((err) => alert(err));
    else
      FilterFromServer(filterobject)
        .then((res) => {
          console.log(res.data);
          dis(SaveArrProp(res.data));
          SetOpenSmart(true);
          handleClickOpen(); //פותח דיאלוג האם ליצור סוכן
        })
        .catch((err) => alert(err));
  }

  function clear() {
    dis(saveFromYear(2000));
    dis(saveUntilYear(2023));
    dis(saveFromSize(0));
    dis(saveUntilSize(2000));
    dis(saveFromPrice(0));
    dis(saveUntilPrice(50000000));
    dis(saveRoom(1));
    dis(saveCity(null));
    dis(saveType(null));
    dis(saveTpeySale(null));
    dis(SaveArrProp(arrsource));
    dis(saveIsClearFilter(true));

    dis(saveChooseYearFilter(false));
    dis(saveChooseCityFilter(false));
    dis(saveChooseAddFilter(false));
    dis(saveChoosePriceFilter(false));
    dis(saveChooseRoomFilter(false));
    dis(saveChooseSizeFilter(false));
    dis(saveChooseTypeFilter(false));
    dis(saveChooseTypeSaleFilter(false));
  }
  return (
    <>
      <Stack spacing={2} direction="row" className="filter">
        <Button onClick={filter} variant="outlined" href="#outlined-buttons">
          סנן
        </Button>
        <Button onClick={clear} variant="outlined" href="#outlined-buttons">
          נקה
        </Button>
        <Button
          onClick={smartagent}
          variant="outlined"
          href="#outlined-buttons"
          disabled={opensmart == null ? true : false}
        >
          <SmartToyOutlinedIcon />
        </Button>
        <ButCity />
        <ButSaleOrBuy />
        <ButPrice />
        <ButRoom />
        <ButSize />
        <ButTypeProp />
        {/* <ButAdd/> */}
        <ButBetween />
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="dialog-title-smart-agent"
        >
          {"האם ליצור סוכן חכם על החיפוש האחרון"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={smartagent}>צור סוכן</Button>
          <Button onClick={handleClose} autoFocus>
            ביטול
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
