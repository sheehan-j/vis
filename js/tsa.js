$( document ).ready(function() {
  advisorSlide=0;
  canClickAdvisor=true;

  console.log("tsa.js active");


  //HOME PAGE BUTTON//
  $("#learnMore").click(function(e) {
    e.preventDefault();

    $("html,body").velocity({
      scrollTop: $("#tsaOverview").offset().top
    }, 600);
  });


  //ADVISOR CAROUSEL//
  $(".advisorIndicatorRight").on("click", function() {
    $("#advisorPictureCarousel").carousel("next");
  });

  $(".advisorIndicatorLeft").on("click", function() {
    $("#advisorPictureCarousel").carousel("prev");
  });

  $(".officerIndicatorRight").on("click", function() {
    $("#officerPictureCarousel").carousel("next");
  });

  $(".officerIndicatorLeft").on("click", function() {
    $("#officerPictureCarousel").carousel("prev");
  });

  $(".conferenceIndicatorRight").on("click", function() {
    $("#conferenceTextCarousel").carousel("next");
  });

  $(".conferenceIndicatorLeft").on("click", function() {
    $("#conferenceTextCarousel").carousel("prev");
  });

  // function changeAdvisorSlide(direction) {
  //   canClickAdvisor=false;
  //   var currentSlide;
  //
  //   switch (advisorSlide) {
  //     case 0:
  //       currentSlide="Hudson";
  //       break;
  //     case 1:
  //       currentSlide="Patula";
  //       break;
  //     case 2:
  //       currentSlide="Frank";
  //       break;
  //   }
  //   if(direction=="right") {
  //     if(currentSlide=="Hudson") {
  //       $("#hudsonSlide").velocity({
  //         opacity: 0
  //       }, 500, function() {
  //         $("#hudsonSlide").addClass("hiderow");
  //         $("#patulaSlide").removeClass("hiderow");
  //         $("#patulaSlide").velocity({
  //           opacity: 1
  //         }, 500);
  //         advisorSlide++;
  //       });
  //     }
  //     if(currentSlide=="Patula") {
  //       $("#patulaSlide").velocity({
  //         opacity: 0
  //       }, 500, function() {
  //         $("#patulaSlide").addClass("hiderow");
  //         $("#frankSlide").removeClass("hiderow");
  //         $("#frankSlide").velocity({
  //           opacity: 1
  //         }, 500);
  //         advisorSlide++;
  //       });
  //     }
  //     if(currentSlide=="Frank") {
  //       $("#frankSlide").velocity({
  //         opacity: 0
  //       }, 500, function() {
  //         $("#frankSlide").addClass("hiderow");
  //         $("#hudsonSlide").removeClass("hiderow");
  //         $("#hudsonSlide").velocity({
  //           opacity: 1
  //         }, 500);
  //         advisorSlide=0;
  //       });
  //     }
  //   }
  //   if(direction=="left") {
  //     if(currentSlide=="Hudson") {
  //       $("#hudsonSlide").velocity({
  //         opacity: 0
  //       }, 500, function() {
  //         $("#hudsonSlide").addClass("hiderow");
  //         $("#frankSlide").removeClass("hiderow");
  //         $("#frankSlide").velocity({
  //           opacity: 1
  //         }, 500);
  //         advisorSlide=2;
  //       });
  //     }
  //     if(currentSlide=="Patula") {
  //       $("#patulaSlide").velocity({
  //         opacity: 0
  //       }, 500, function() {
  //         $("#patulaSlide").addClass("hiderow");
  //         $("#hudsonSlide").removeClass("hiderow");
  //         $("#hudsonSlide").velocity({
  //           opacity: 1
  //         }, 500);
  //         advisorSlide--;
  //       });
  //     }
  //     if(currentSlide=="Frank") {
  //       $("#frankSlide").velocity({
  //         opacity: 0
  //       }, 500, function() {
  //         $("#frankSlide").addClass("hiderow");
  //         $("#patulaSlide").removeClass("hiderow");
  //         $("#patulaSlide").velocity({
  //           opacity: 1
  //         }, 500);
  //         advisorSlide--;
  //       });
  //     }
  //   }
  //   canClickAdvisor=true;
  // }


  //NEW MEMBERS GUIDE CAROUSEL//
  $(".carousel-control-members").click(function(e) {
    e.preventDefault();
    controlMembersCarousel(this);
  });

  function controlMembersCarousel(element) {
    $(".members-active").removeClass("members-active");
    $(element).addClass("members-active");
  }


  //COMPETITIONS CAROUSELS
  $(".carousel-control-engineering").click(function(e) {
    e.preventDefault();
    controlEngineeringCarousel(this);
  });

  function controlEngineeringCarousel(element) {
    $(".engineering-active").removeClass("engineering-active");
    $(element).addClass("engineering-active");
  }

  $(".carousel-control-design1").click(function(e) {
    e.preventDefault();
    controlDesign1Carousel(this);
  });

  function controlDesign1Carousel(element) {
    $(".design1-active").removeClass("design1-active");
    $(element).addClass("design1-active");
  }

  $(".carousel-control-design2").click(function(e) {
    e.preventDefault();
    controlDesign2Carousel(this);
  });

  function controlDesign2Carousel(element) {
    $(".design2-active").removeClass("design2-active");
    $(element).addClass("design2-active");
  }

  $(".carousel-control-modeling").click(function(e) {
    e.preventDefault();
    controlModelingCarousel(this);
  });

  function controlModelingCarousel(element) {
    $(".modeling-active").removeClass("modeling-active");
    $(element).addClass("modeling-active");
  }

  $(".carousel-control-development").click(function(e) {
    e.preventDefault();
    controlDevelopmentCarousel(this);
  });

  function controlDevelopmentCarousel(element) {
    $(".development-active").removeClass("development-active");
    $(element).addClass("development-active");
  }

  $(".carousel-control-presentation").click(function(e) {
    e.preventDefault();
    controlPresentationCarousel(this);
  });

  function controlPresentationCarousel(element) {
    $(".presentation-active").removeClass("presentation-active");
    $(element).addClass("presentation-active");
  }

  $(".carousel-control-onsite").click(function(e) {
    e.preventDefault();
    controlOnsiteCarousel(this);
  });

  function controlOnsiteCarousel(element) {
    $(".onsite-active").removeClass("onsite-active");
    $(element).addClass("onsite-active");
  }

  //ACTIVITIES PAGE SCROLLING
  $("#activitiesScroll").mousewheel(function(event, delta) {
    var _width = $('#activitiesScroll').outerWidth()
    var _scrollWidth = $('#activitiesScroll')[0].scrollWidth;
    var _scrollLeft = $('#activitiesScroll').scrollLeft();

    if (_scrollWidth - _width === _scrollLeft &&delta<0){
        return;
    }
    if (_scrollLeft===0 &&delta>0){
        return;
    }

    this.scrollLeft -= delta;
    event.preventDefault();
  });

  // var wonderlandScrolled=false;
  // var bootcampScrolled=false;
  //
  // $("#wonderlandDiv").mousewheel(function(event, delta) {
  //   if (delta<0 && wonderlandScrolled==false) {
  //     $("html,body").animate({
  //       scrollTop: $("#wonderlandDiv").offset().top
  //     }, 600);
  //     wonderlandScrolled=true;
  //   } else if (delta<0 && wonderlandScrolled==true) {
  //     $("html,body").animate({
  //       scrollTop: $("#bootcampDiv").offset().top
  //     }, 600);
  //     bootcampScrolled=true;
  //     wonderlandScrolled=false;
  //   }
  // });
});
