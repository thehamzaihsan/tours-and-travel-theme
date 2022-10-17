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
    disableScroll();
}

function Closepopup(id){
    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.opacity = 0;
    document.getElementById("loading-bg").style.display = "none";
    enableScroll();
    return false;
}


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}