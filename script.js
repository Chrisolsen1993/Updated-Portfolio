var name_chars = "Olsen Ogouchi".split('');
var name_element = document.getElementsByClassName('home-content-2');
var name_display_interval = setInterval(() => {
  if (name_chars.length > 0) {
    name_element.innerHTML += name_chars.shift();
  } else {
    clearInterval(name_display_interval);
  }
}, 1000);

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("class1");
            $(".port").addClass("port1")
            $(".a-nav").addClass("a-nav1")

        }else{
            $('.navbar').removeClass("class1");
            $(".port").removeClass("port1")
            $(".a-nav1").removeClass("a-nav1")
        }

    })
// adding a click event to the menu 
$(".menu-btn").click(function(){
    $(".nav-link").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
})
})




    