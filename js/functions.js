function topFunction() {
  $("#right-col").animate({ scrollTop: 0 }, "200");
};

 $(document).ready(function() { 
    $("#menuLink").click(function() { 
        $("#menuDesk").slideToggle(); 
    }); 
});
$(document).ready(function() { 
    $("#menuDesk").click(function() { 
        if ($(window).width() < 1000) {
            $("#menuDesk").slideToggle(); 
        }
    }); 
});

$(document).ready(function(){
            $("a").on('click', function(event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){
                        window.location.hash = hash;
                    });
                }
            });
        });