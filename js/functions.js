$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        }
    });
});
function topFunction() {
  $('html, body').animate({ scrollTop: 0 }, 700);
};
 $(document).ready(function() { 
    $("#menuLink").click(function() { 
        $("#menuDesk").slideToggle(); 
        $("#menuOpen").fadeToggle("slow", "linear"); 
        $("#menuClose").fadeToggle("slow", "linear"); 
    }); 
});
$(document).ready(function() { 
    $("#menuDesk").click(function() { 
        if ($(window).width() < 1000) {
            $("#menuDesk").slideToggle(); 
            $("#menuOpen").fadeToggle("slow", "linear"); 
            $("#menuClose").fadeToggle("slow", "linear"); 
        }
    }); 
});

