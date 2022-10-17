$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        dots: true,
        center:false,
        stagePadding: 10,
        responsiveBaseElement: 'body',
        animateOut: 'fadeOut',
        nav:true,
        responsive: {
            0: {
                items: 1,
                center:true,
                margin:30,
                
            },
            770: {
                items: 2,
                
            },
            1000: {
                items: 3,
    
            }
        }
    })

    $('.owl-two').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        dots: true,
        center:false,
        stagePadding: 10,
        responsiveBaseElement: 'body',
        animateOut: 'fadeOut',
        nav:true,
        responsive: {
            0: {
                items: 1,
                center:true,
                margin:30,
                nav:true,
                
            },
            770: {
                items: 2,
                nav:true,
                
            },
            1000: {
                items: 3,
                nav:true,
    
            }
        }
    })

    $('.owl-two').find('.owl-nav').removeClass('disabled');
    $('.owl-two').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });
   
  });



