//-------------------- חצים
//back
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
//next
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Arrow=(funback,funnext,index)=>{
return <div className="div-imges">   
<ArrowBackIosIcon className="imges" onClick={funback}/>
 <ArrowForwardIosIcon className="imges" onClick={funnext}/> 
 
</div>
}
export default Arrow;