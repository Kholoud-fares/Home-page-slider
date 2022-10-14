//search
let search = document.querySelector(".ic");
let input = document.querySelector("#search");
console.log(search)
console.log(input)
search.addEventListener("click",function(){
  input.classList.toggle("show");
  input.classList.toggle("hide");
  search.classList.toggle("fa-search")
  search.classList.toggle("fa-close")
})




//slider

let slides = document.querySelectorAll("#slider");
let btns = document.querySelectorAll(".btn1");

slides.forEach(function(slide,index){
  slide.style.left = `${index * 100}%`
})

let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("right")) {
      counter++;
      slider();
     
    
    } else if (styles.contains("left")) {
      counter--;
      slider();
     
     
    }
  });
});
 
function slider(){
  if(counter === slides.length){
    counter = 0;
  }

  if(counter < 0){
    counter = slides.length - 1;
  }
  
  slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}

