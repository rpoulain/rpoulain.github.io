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
window.onload = function(){ 
    if(myPDF){
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("resumeLink");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    }
    else{
        $(document).ready(function(){
            $('#resumeLink').attr('target', '_blank');
            $('#resumeLink').attr('href', 'https://gotsave.github.io/resumeRaphaelPoulain.pdf');
        });
    }
};