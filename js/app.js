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



//popup
var buttons = document.querySelectorAll(".popupbutton");

for(const button of buttons){

    button.addEventListener('click', function(){
        console.log(button);
        id = button.getAttribute('data-target');
        console.log(id);
        Openpopup(id);     
    });

}

var closebuttons = document.querySelectorAll(".close-popupbutton");

for(const button of closebuttons){

    button.addEventListener('click', function(){
        id = this.getAttribute('data-target');
        console.log(id);
        Closepopup(id);     
    });

}



function Openpopup(id){
    console.log(id);
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.opacity = 1;
    document.getElementById("loading-bg").style.display = "block";
    document.getElementById('body')[0].style.overflowY = "hidden";
}

function Closepopup(id){
    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.opacity = 0;
    document.getElementById("loading-bg").style.display = "none";
    document.getElementById('body').style.overflowY = "hidden";
    return false;
}

//formvalidation
    let issubmittable = false;
    var inputarea     =  document.querySelector('#inputarea');
    var form          = document.forms['contact-form'];
    var submitbtn     = document.querySelector('.submit-btn');
    var numarea       = document.querySelector('#wordcount');
    var name_form   = form.name;
    var password      = form.password;
    var check         = form.check;
    var namevalid = false , passvalid =false, areavalid =false , checkvalid = false , dropdownvalid = false;
    let input_array   = [namevalid , passvalid , areavalid , checkvalid , dropdownvalid];
    var dropdown      = form.dropdown;

    inputarea.addEventListener('focusout', function(){
        var numcount = this.value.length;
        if(numcount > 100 || numcount == 0 || this.value == "")
        {
            areavalid  = false;
            this.classList.add('animation-headshake');
        }
        else if(numcount <= 100){
            areavalid = true;   
            this.classList.remove('animation-headshake');
        }
        input_array[2] = areavalid;
        formchecker(input_array);
   })

   inputarea.addEventListener('keyup' , function(){
         var numcount = this.value.length;
        numarea.innerHTML = numcount + "/100";  
   })


    name_form.addEventListener('focusout' , function(){
        if(this.value == "" || this.value.length == null){
            namevalid = false;
            this.classList.add('animation-headshake');
        }
        else if(this.value.length > 0){
            namevalid = true;
            this.classList.remove('animation-headshake');
        }

        input_array[0] = namevalid;
        formchecker(input_array);

    })


    password.addEventListener('focusout', function(){
        let regExp = /@/;
        let ismatch = regExp.test(this.value);
        console.log(ismatch);
        if(this.value == "" && this.value.length == 0  && ismatch == false){
            passvalid = false;
            this.classList.add('animation-headshake');
        }
        else if(this.value.length > 0 && ismatch == true ){
            passvalid = true;
            this.classList.remove('animation-headshake');
        }

        input_array[1] = passvalid;
        formchecker(input_array);
        

    })

    check.addEventListener( 'focusout' , function(){

        if(this.checked){
            checkvalid = true;
            this.classList.remove('animation-headshake');
        }
        else{
            checkvalid = false;
            this.classList.add('animation-headshake');
        }
        input_array[3] = checkvalid;
        formchecker(input_array);
    })


    dropdown.addEventListener('focusout' , function(){
        if(this.value == ""){
            dropdownvalid = false;
            this.classList.add('animation-headshake');
        }
        else{
            dropdownvalid = true;
            this.classList.remove('animation-headshake');
        }
        input_array[4] = dropdownvalid;
        formchecker(input_array);
    })

function formchecker(input_array){
    value1 = input_array[0];
    value2 = input_array[1];
    value3 = input_array[2];
    value4 = input_array[3];
    value5 = input_array[4];
    console.log(input_array);
    
    if(value1 == true && value2 == true && value3 == true && value4 == true && value5 == true){
        issubmittable = true;
    }
    else{
        issubmittable = false;
    }
    console.log(issubmittable);
    formvalidation();
}
function formvalidation(){
         
    if (issubmittable){
        console.log("enabled");
        submitbtn.classList.remove('disabled');
    }
    if(issubmittable == false){
        console.log("disabled");
        submitbtn.classList.add('disabled');
    }

}


