import "../style.css";
const Changeimg=()=>{
    let slideIndex = 1;
    let imag1="m1 (3).png";
  function currentSlide(n) {
    console.log("currentSlide");
    slideIndex = n;
    showSlides(slideIndex=n);
  }
  showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        // slides[i].style.display = "none"; 
        console.log("*") 
      }
      for (i = 0; i < dots.length; i++) {
        // dots[i].className = dots[i].className.replace(" active", "");
        console.log("**") 
      }
      // slides[slideIndex-1].style.display = "block";  
      // dots[slideIndex-1].className += " active";
      console.log("***") 
    }
     return<>
     <div className="slideshow-container">
<div className="mySlides">
  <div className="numbertext">1 / 3</div>
  <img src={imag1} />
  <div className="text">Caption Text</div>
</div>

<div className="mySlides">
  <div className="numbertext">2 / 3</div>
  <img src={imag1}/>
  <div className="text">Caption Two</div>
</div>

<div className="mySlides">
  <div className="numbertext">3 / 3</div>
  <img src={imag1}/>
  <div className="text">Caption Three</div>
</div>

<a className="prev" onClick={plusSlides(-1)}>❮</a>
<a className="next" onClick={plusSlides(1)}>❯</a>

</div>
<br/>

<div>
  <span className="dot" onClick={currentSlide("1")}></span> 
  <span className="dot" onClick={currentSlide("2")}></span> 
  <span className="dot" onClick={currentSlide("3")}></span> 
</div>

    </>
   
  }
  export default Changeimg;
