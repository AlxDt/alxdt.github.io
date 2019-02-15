$(document).ready(() => {
  let navMinY = 29;

  if ($(document).width() <= 975) {
    $(".links .dropdown > a").click((e) => e.preventDefault());
  }

  $(window).scroll((evt) => {
    let curr_window_scroll = $(window).scrollTop();

    if ($(document).width() > 975) {
      if (curr_window_scroll > navMinY && !$("#navigation").hasClass("fixed")) {
        $("#navigation").addClass("fixed");
        $("body").css("margin-top", (navMinY + 25 + $("#navigation").height()) + "px");
      } else if (curr_window_scroll <= navMinY) {
        $("#navigation").removeClass("fixed");
        $("body").css("margin-top", "0px");
      }
    }
  });

  $(".links .dropdown").click((e) => {
    if (!$(e.target).parent().hasClass("active")) {
      $(".links .dropdown").removeClass("active");
      $(e.target).parent("li").addClass("active")
    } else {
      $(e.target).parent("li").removeClass("active");
    }
  })

  $("#bars").click((e) => {
    $(".links").toggleClass("show");
  })
});