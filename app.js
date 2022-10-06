var dropdown = document.querySelector('.dropdown');
var navbarDropdown = document.querySelector('#navbarDropdown');
var dropdownmenu = document.querySelector('.dropdown-menu');
var owlnext = document.querySelector('.owl-next');
var owlprev = document.querySelector('.owl-prev');



dropdown.addEventListener('mouseover' , function(){
    navbarDropdown.classList.add('show');
    dropdownmenu.classList.add('show');
});


dropdown.addEventListener('mouseout' , function(){
    navbarDropdown.classList.remove('show');
    dropdownmenu.classList.remove('show');
});

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
        
  });
  
  