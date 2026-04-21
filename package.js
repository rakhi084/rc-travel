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

createTypingEffect("page3Packagehero","India Tour Packages")
createTypingEffect("page3popularpackage","Popular Tour Packages")