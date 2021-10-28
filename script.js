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
// owl project script


})
    