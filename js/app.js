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




