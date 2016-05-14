/**
 * Modified version of main.js from The Crimson's 2014/2015 survey.
 */

$(document).ready(function() {
  $("#general").waypoint(function(direction) {
    if (direction === "down") {
      $("nav").addClass("stuck");
    } else if (direction === "up") {
      $("nav").removeClass();
    }
  });

  $("section").waypoint(function(direction) {
    if (direction === 'down') {
      $("nav li a").removeClass();
      return $("nav li a[href='#" + this.element.id + "']").addClass("active");
    }
  }, {
    offset: 200
  });

  $("section").waypoint(function(direction) {
    if (direction === 'up') {
      $("nav li a").removeClass();
      return $("nav li a[href='#" + this.element.id + "']").addClass("active");
    }
  }, {
    offset: -200
  });

  // Scroll to a section when the link is clicked.
  $("nav li a").click(function(e) {
    e.preventDefault();
    var href = $(e.target).attr("href");
    return $("html, body").animate({
      scrollTop: $(href).offset().top
    }, 1000);
  });

});
