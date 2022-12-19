jQuery(document).ready(function() {
    var sec = 5
    var timer = setInterval(function() {
       $("#timer span").text(sec--);
       if (sec == 0) {
    $("#button").delay(1000).fadeIn(1000);
    $("#timer").hide(1000) .fadeOut(fast);}
    },1000);
    });