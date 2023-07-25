import { useNavigate } from "react-router-dom";
import City from "../Filtering/City";
import CityStatic from "./CityStatic";
import SaleOrRentStatistic from "./SaleOrRentStatistic";
import Statistic1 from "./Statistic1";
import Statistic2 from "./Statistic2";
import Statistic3 from "./Statistic3";
import Statistic4 from "./Statistic4";
import YearStatistic from "./YearStatistic";

const IndexStatistic = () => {
    //שדות להוספה בדאטה
//פונקציה המקבלת שנה ומחזירה כמה דירות נתפסו

    //תאריך מכירה או השכרה אחרון
    //ככה שאני יוכל לחשב כמה דירות נמכרו בשנה זו
    // ברגע שהמוכר מעדכן שהדירה תפוסה 
    //הוא מעדכן את התאריך

    const nav=useNavigate()
    function s1(){nav("/statistic1")}
    function s2(){nav("/statistic2")}
    function s3(){nav("/statistic3")}
    function s4(){nav("/statistic4")}

  return (
    <>
      <CityStatic />
      <SaleOrRentStatistic/>
      <YearStatistic/>
      <input type="button" onClick={s1}/>
      <input type="button" onClick={s2}/>
      <input type="button" onClick={s3}/>
      <input type="button" onClick={s4}/>
      {/* <Statistic1 />
      <Statistic2 />
      <Statistic3 />
      <Statistic4 /> */}
    </>
  );
};
export default IndexStatistic;
