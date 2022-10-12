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

  
  //Animation on Scroll

const observer = new IntersectionObserver( (enteries) => {
    enteries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    })
});



const hiddenelements = document.querySelectorAll('.hidden')
  hiddenelements.forEach((el)=> observer.observe(el));



//counter-animation
var num_place = document.querySelector('.number')
var final_number = 70;