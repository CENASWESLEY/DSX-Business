var swiper = new Swiper(".mySwiper", {
    
    grabCursor:true,
                centeredSlides:true,
                spaceBetween:0,
                slidesPerView:3,
                loop:true,
                
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
});     



const menu = document.getElementById('header-menu-ul'),
      menuopen = document.getElementById('header-bar'),
      menuclose = document.getElementById('header-close'),
      menubg = document.getElementById('header-container')

if(menuopen){

  menuopen.addEventListener('click', () =>{

    menu.classList.add('menu-show')
    menubg.classList.add('header__bg')
  })
}
if(menuclose){

  menuclose.addEventListener('click', () =>{
  
      menu.classList.remove('menu-show')
     
    })
  }
