//the hero section slider 
let heroSlides = document.querySelectorAll(".slide1");
let currentSlideIndex = 0;

function changeHeroSlide() {
  // Remove active class from all slides
  heroSlides.forEach(function(singleSlide) {
    singleSlide.classList.remove("active");
  });

  // Add active class to current slide
  heroSlides[currentSlideIndex].classList.add("active");

  // Move to next slide
  currentSlideIndex++;

  // Reset index if it exceeds length
  if (currentSlideIndex >= heroSlides.length) {
    currentSlideIndex = 0;
  }
}

// Auto change every 3 seconds
setInterval(changeHeroSlide, 3000);
//end of the hero section slider 

//start of the typing effect 

// const text = "Popular Tours";
// const typingSpeed = 120;
// const deletingSpeed = 80;
// const delayAfterTyping = 1000;

// let i = 0;
// let isDeleting = false;

// function typeLoop(){
//   const element = document.getElementById("typing");

//   if(!isDeleting){
//     // Typing
//     element.textContent = text.substring(0, i+1);
//     i++;

//     if(i === text.length){
//       setTimeout(() => isDeleting = true, delayAfterTyping);
//     }
//   } else {
//     // Deleting
//     element.textContent = text.substring(0, i-1);
//     i--;

//     if(i === 0){
//       isDeleting = false;
//     }
//   }

//   setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
// }

// typeLoop();

//end of the typing effect
//start of the  feature image scroller
// let fea_slides = document.querySelectorAll(".fea-slide");
// let fea_index = 0;

// function show_slide1() {
//   fea_slides.forEach(slide => slide.classList.remove("active"));

//   index++;
//   if (index >= fea_slides.length) {
//     index = 0;
//   }

//   fea_slides[index].classList.add("active");
// }

// show_slide1(); 
// setInterval(show_slide1, 3000);


// the featured section slider
let feaSlides = document.querySelectorAll(".fea-slide");
let currentFeaSlideIndex = 0;

function changeFeaSlide() {

  // Remove active class from all slides
  feaSlides.forEach(function(singleSlide) {
    singleSlide.classList.remove("active");
  });

  // Add active class to current slide
  feaSlides[currentFeaSlideIndex].classList.add("active");

  // Move to next slide
  currentFeaSlideIndex++;

  // Reset index if it exceeds length
  if (currentFeaSlideIndex >= feaSlides.length) {
    currentFeaSlideIndex = 0;
  }
}

// Auto change every 3 seconds
setInterval(changeFeaSlide, 3000);


function createTypingEffect(elementId, text, typingSpeed = 120, deletingSpeed = 80, delay = 1000){

  let i = 0;
  let isDeleting = false;
  const element = document.getElementById(elementId);

  function loop(){

    if(!isDeleting){
      element.textContent = text.substring(0, i + 1);
      i++;

      if(i === text.length){
        setTimeout(() => isDeleting = true, delay);
      }

    } else {
      element.textContent = text.substring(0, i - 1);
      i--;

      if(i === 0){
        isDeleting = false;
      }
    }

    setTimeout(loop, isDeleting ? deletingSpeed : typingSpeed);
  }

  loop();
}


 createTypingEffect("typing_luxury_train","Luxury Trains")
 createTypingEffect("typing_fea","Featured Programs")
 createTypingEffect("typing_destinations","Destinations")
 createTypingEffect("typing","Popular Tours")
 