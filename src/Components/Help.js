import { useEffect, useState } from "react";
import { getAllLikeByIdFromServer } from "../Services";

const Help=()=>{  
    const [num, setNum]=useState([1, 2, 3, 4, 5, 6]);
    const [pic, setPic]=useState(["p1.jpg", "p2.jpg", "p3.jpg","p4.jpg", "p5.jpg", "p6.jpg"]);

    plusSlides=(n) => {
        showSlides(slideIndex += n);
      }
      
    currentSlide=(n) => {
        showSlides(slideIndex = n);
      }
      
    showSlides=(n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
      }
    
//   useEffect(()=>{getAllLikeByIdFromServer(2).then(res=>console.log(res.data))})
    
    return <>
        {/* <h1>לעזרה</h1>
        <p>
            פנה למנהל האתר במייל
        </p>

        <p>
        shila.juhhb@gmail.com
        </p>
        <p>
        או בטלפון
        </p>
        <p>
        07-3456383
        </p>
        <p>כל הזכויות שמורות SA@</p> */}


<h2 style="text-align:center">Slideshow Gallery</h2>

<div class="container">

{pic.map((item,index)=>{
 
 <div class="mySlides">
    <div class="numbertext">{index} / {pic.length}</div>
    <img src={item} style="width:100%">
  </div>
})}
    
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  {/* <div class="caption-container">
    <p id="caption"></p>
  </div> */}

{
    pic.map((item)=>{

<div class="row">
    <div class="column">
      <img class="demo cursor" src={item} style="width:100%" onclick="currentSlide(1)">
    </div>
</div>
    })
}
  
    
  
</div>

{/* <script>
let slideIndex = 1;
showSlides(slideIndex);


</script> */}
    
        
    </>
    
}
export default Help;