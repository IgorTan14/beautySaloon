$(function(){
   
  $('.brands').slick({

  responsive: [
    {
      breakpoint: 4024,
      settings: "unslick"
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        Infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      }
    },
  ]
})
    
    $('.header__burger').on('click', function(){ 
        $('.burger__content').toggleClass('burger__content--active');
        $('.header__burger').toggleClass('header__burger--active');
  })

  var containerEl1 = document.querySelector('[data-ref="gallery__wrapper"]');

  var config = {
     controls: {
        scope: 'local'
     }
  };
  var mixer1 = mixitup(containerEl1, config);



  $('.gallery__list-item-button').on('click', function(){ 
    $('.gallery__list-item-button').removeClass('gallery__list-item-button--active');
    $(this).addClass('gallery__list-item-button--active');
})


$("#rateYo-1").rateYo({
  rating: 5,
  spacing: "5px",
  multiColor: {
    "startColor": "#FF0000", 
    "endColor": "#F39C12"  
  }
  });
  $("#rateYo-2").rateYo({
    rating: 5,
    spacing: "5px",
    multiColor: {
      "startColor": "#FF0000", 
      "endColor": "#F39C12"  
    }
    });
    $("#rateYo-3").rateYo({
      rating: 5,
      spacing: "5px",
      multiColor: {
        "startColor": "#FF0000", 
        "endColor": "#F39C12"  
      }
    });

    $('.reviews__inner').slick({
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      variableWidth: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      Infinity: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            centerPadding: '0px',
          }
        },
        
    
      ]
    })


});