var name_chars = "Olsen Ogouchi".split('');
var name_element = document.getElementById('name-display');
console.log(name_element) 
var display_name = "";
var name_display_interval = setInterval(() => {
  if (name_chars.length > 0) {
    display_name += name_chars.shift();
    name_element.innerHTML = display_name;
  } else {
    clearInterval(name_display_interval);
  }
}, 600);
// var name_chars = "Olsen Ogouchi".split('');
// var name_element = document.getElementById('display-name');
// var display_name = "";
// var paused = false;
// var name_display_interval = setInterval(() => {
//   if (!paused && name_chars.length > 0) {
//     display_name += name_chars.shift();
//     name_element.innerHTML = display_name;
//   } else if (paused) {
//     paused = false;
//     name_chars = display_name.split('');
//     display_name = "";
//     name_element.innerHTML = "";
//   } else {
//     paused = true;
//   }
// }, 1000);







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




    