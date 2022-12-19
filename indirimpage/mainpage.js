$(document).ready(function() {
    $("ul#menu li.open").hover(function() {
      $(this).find("ul").slideDown();
    },function() {
      $(this).find("ul").slideUp();
    });
    $('.modal').modal();
  });

 