console.log("aaa");
$(function () {
  $(".c-menu__button").on("click", function () {
    if ($(".p-sidemenu").hasClass("off")) {
      $(".p-sidemenu").removeClass("off");
      $("#c-is-button").animate({ right: "0" }, 300);
      $(".main").addClass("main-off");
      $("#overlay").addClass("is-overlay");
      // $("#overlay").fadeIn();
      // $("#c-is-button").animate({ marginLeft: "400px" }, 300).addClass("on");
    } else {
      $(".p-sidemenu").addClass("off");
      $("#c-is-button").animate({ right: "-500px" }, 300, function () {
        $(".p-sidemenu").toggleClass("off");
      });
      $(".main").removeClass("main-off");
      $("#overlay").removeClass("is-overlay");
      // $("#overlay").fadeOut();
      // $(".p-sidemenu").animate({ right: "0" }, 300);
    }
  });
  $(".batsu").on("click", function () {
    // $(".p-sidemenu").animate({ right: "-367px" }, 300);
    $("#c-is-button").animate({ right: "-500px" }, 300, function () {
      $(".p-sidemenu").toggleClass("off");
    });
    $(".main").removeClass("main-off");
    $("#overlay").toggleClass("is-overlay");
    // $("#overlay").fadeOut();
  });

  // $(".c-menu__button").on("click", function () {
  //   if ($(".p-sidemenu").hasClass("off")) {
  //     $(".p-sidemenu").removeClass("off");
  //     $("#c-is-button").animate({ marginLeft: "400px" }, 300).addClass("on");
  //   } else {
  //     $(".p-sidemenu").addClass("off");
  //     $(".p-sidemenu").animate({ right: "0" }, 300);
  //   }
  // });
});
