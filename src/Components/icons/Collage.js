// <!-- import imag1 from "../../image/m1 (3).png";
// // import "../style.css";
// const Collage=()=>{
// const arr=[];
// let index=0;
//    const currentSlide=(n)=>{
//     index=n;
//     show();


//    }
//    const show=()=>{
//     console.log("index");
//     console.log(index)

//    }
//      return<>
//      {/* <div className="slideshow-container">
// <div className="mySlides">
//   <div className="numbertext">1 / 3</div>
//   <img src={imag1} />
//   <div className="text">Caption Text</div>
// </div>

// <div className="mySlides">
//   <div className="numbertext">2 / 3</div>
//   <img src={imag1}/>
//   <div className="text">Caption Two</div>
// </div>

// <div className="mySlides">
//   <div className="numbertext">3 / 3</div>
//   <img src={imag1}/>
//   <div className="text">Caption Three</div>
// </div> */}

// {/* <a className="prev" onClick={plusSlides(-1)}>❮</a>
// <a className="next" onClick={plusSlides(1)}>❯</a> */}

// {/* </div>
// <br/> */}

// <div>
//   <button  onClick={currentSlide(1)} className="dot"/> 
//   <button className="dot" onClick={currentSlide(2)}/> 
//   <button className="dot" onClick={currentSlide(3)}/> 
// </div>

//     </>
   
//   }
//   export default Collage; -->

  import { PlaylistAddCheckCircleRounded } from "@mui/icons-material";


 import "../style.css";
const Collage=()=>{
  
  let imag1="m1 (3).png";
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log("slides")
    console.log(slides)
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      document.slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      document.dots[i].className = dots[i].className.replace(" active", "");
    }
    document.slides[slideIndex-1].style.display = "block";
    document.dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
return <>
<h2 >Slideshow Gallery</h2>

<div className="container">
  <div className="mySlides">
    <div className="numbertext">1 / 6</div>
    <img src="img_woods_wide.jpg" style="width:100%"/>
  </div>

  <div className="mySlides">
    <div className="numbertext">2 / 6</div>
    <img src="img_5terre_wide.jpg" style="width:100%"/>
  </div>

  <div className="mySlides">
    <div className="numbertext">3 / 6</div>
    <img src="img_mountains_wide.jpg" style="width:100%"/>
  </div>
    
  <div className="mySlides">
    <div className="numbertext">4 / 6</div>
    <img src="img_lights_wide.jpg" style="width:100%"/>
  </div>

  <div className="mySlides">
    <div className="numbertext">5 / 6</div>
    <img src="img_nature_wide.jpg" style="width:100%"/>
  </div>
    
  <div className="mySlides">
    <div className="numbertext">6 / 6</div>
    <img src="img_snow_wide.jpg" style="width:100%"/>
  </div>
    
  <a className="prev" onClick={plusSlides(-1)}>❮</a>
  <a className="next" onClick={plusSlides(1)}>❯</a>

  <div className="caption-container">
    <p id="caption"></p>
  </div>

  <div className="row">
    <div className="column">
      <img className="demo cursor" src="img_woods.jpg" style="width:100%" onClick={currentSlide(1)} alt="The Woods"/>
    </div>
    <div className="column">
      <img className="demo cursor" src="img_5terre.jpg" style="width:100%" onClick={currentSlide(2)} alt="Cinque Terre"/>
    </div>
    <div className="column">
      <img className="demo cursor" src="img_mountains.jpg" style="width:100%" onClick={currentSlide(3)} alt="Mountains and fjords"/>
    </div>
    <div className="column">
      <img className="demo cursor" src={imag1} style="width:100%" onClick={currentSlide(4)} alt="Northern Lights"/>
    </div>
    <div className="column">
      <img className="demo cursor" src={imag1} style="width:100%" onClick={currentSlide(5)} alt="Nature and sunrise"/>
    </div>    
    <div className="column">
      <img className="demo cursor" src={imag1} style="width:100%" onClick={currentSlide(6)} alt="Snowy Mountains"/>
    </div>
  </div>
</div></> 

   
  }
  export default Collage;
