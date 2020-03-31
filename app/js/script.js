$(document).ready(function() {
    $('select').niceSelect();
  });
  $(".numbox").mask("+7 (999) 999-99-99");


  $(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
  });


  $('.reviews__slider .swiper-container').each(function(){
    var projectsSlider = new Swiper(this, {
     
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  }   
  });
  });