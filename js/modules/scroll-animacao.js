export  function initScrollAnimacaoRight() {
  const sectionScroll = document.querySelectorAll('[data-anime="scroll-right"]');
  const windowMetade = window.innerHeight * 0.9;
  
  if(sectionScroll.length){
    function animaScroll() {
      sectionScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
    
        if(sectionTop < 0){
          section.classList.add('active');
        }
      });
    }
    
    window.addEventListener("scroll", animaScroll);
  }
}


export  function initScrollAnimacaoLeft() {
  const sectionScroll = document.querySelectorAll('[data-anime="scroll-left"]');
  const windowMetade = window.innerHeight * 0.7;
  
  if(sectionScroll.length){
    function animaScroll() {
      sectionScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
    
        if(sectionTop < 0){
          section.classList.add('active');
        }
      });
    }
    
    window.addEventListener("scroll", animaScroll);
  }
}

export  function initScrollAnimacaoDown() {
  const sectionScroll = document.querySelectorAll('[data-anime="scroll-down"]');
  const windowMetade = window.innerHeight * 0.6;
  
  if(sectionScroll.length){
    function animaScroll() {
      sectionScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
    
        if(sectionTop < 0){
          section.classList.add('active');
        }
      });
    }
    
    window.addEventListener("scroll", animaScroll);
  }
}

export  function initScrollAnimacaoUp() {
  const sectionScroll = document.querySelectorAll('[data-anime="scroll-up"]');
  const windowMetade = window.innerHeight * 0.9;
  
  if(sectionScroll.length){
    function animaScroll() {
      sectionScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
    
        if(sectionTop < 0){
          section.classList.add('active');
        }
      });
    }
    
    window.addEventListener("scroll", animaScroll);
  }
}






