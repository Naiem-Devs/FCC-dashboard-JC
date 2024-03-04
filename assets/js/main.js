(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.side__nav').toggleClass('siteBar');   
    $(this).toggleClass('active');   
  }); 

 // menu 
  $('.barbtn').click( function (){ 
    $('.side__nav').toggleClass('hide');   
    $(this).toggleClass('active');   
    $("body").toggleClass('active');   
  }); 



  var sellBtn = document.querySelectorAll('.sellCarBlk__btn button')

  sellBtn.forEach(sellBtns => {
      sellBtns.addEventListener('click', () => {
          sellBtnRemove()
          sellBtns.parentElement.parentElement.parentElement.classList.add('active')
      })
  })

  function sellBtnRemove () {
      sellBtn.forEach(sellBtns => {
          sellBtns.parentElement.parentElement.parentElement.classList.remove('active')
      })
  }

  $('.niceselect__blk select').niceSelect();

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
