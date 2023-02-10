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

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

    }
    else{
        $(document).ready(function(){
            $('#resumeLink').attr('target', '_blank');
            $('#resumeLink').attr('href', 'https://gotsave.github.io/resumeRaphaelPoulain.pdf');
        });
    }

    var modall = document.getElementById("citeModal");

    $(".citeLink").on('click', function(event){
      modall.style.display = "block";
    });

    $(".close").on('click', function(event){
      modall.style.display = "none";
      if (myPDF) {
        modal.style.display = "none";
      }
    });


    document.onkeydown = function (evt) {
        if (evt.keyCode == 27) {
          modall.style.display = "none";
          if (myPDF) {
            modal.style.display = "none";
          }
        }
    };

    window.onclick = function(event) {
      if (event.target == modall) {
        modall.style.display = "none";
      }
      if (myPDF && event.target == modal) {
        modal.style.display = "none";
      }
    }
};
