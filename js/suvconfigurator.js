$(document).ready(function() {

  console.log('suvconfigurator.js is active');

  var readyToUnload = false;

  window.addEventListener('beforeunload', function(e) {
    if (!readyToUnload){
      e.preventDefault();
      e.returnValue='';
    }
  });

  $("#confirm-leave-button").click(function(){
    readyToUnload = true;
    window.location.href="suv.html";
  });

  var colorActive = "orange";

  $("#orange-color-selector").click(function() {
    if (colorActive !== "orange") {
      changeCarColor("orange");
      colorActive="orange";
    }
  });
  $("#blue-color-selector").click(function() {
    if (colorActive !== "blue") {
      changeCarColor("blue");
      colorActive="blue";
    }
  });
  $("#gray-color-selector").click(function() {
    if (colorActive !== "gray") {
      changeCarColor("gray");
      colorActive="gray";
    }
  });
  $("#white-color-selector").click(function() {
    if (colorActive !== "white") {
      changeCarColor("white");
      colorActive="white";
    }
  });
  $("#black-color-selector").click(function() {
    if (colorActive !== "black") {
      changeCarColor("black");
      colorActive="black";
    }
  });
  $("#matteblack-color-selector").click(function() {
    if (colorActive !== "matteblack") {
      changeCarColor("matteblack");
      colorActive="matteblack";
    }
  });

  var interiorActive = "black";
  $("#black-interior-selector").click(function() {
    if (interiorActive!=="black") {
      changeInteriorColor("black");
      interiorActive = "black";
    }
  });
  $("#white-interior-selector").click(function() {
    if (interiorActive!=="white"){
      changeInteriorColor("white");
      interiorActive="white";
    }
  });

  var wheelsActive = "silver";
  $("#silver-wheels-selector").click(function() {
    if (wheelsActive!=="silver"){
      changeWheelsColor("silver");
      wheelsActive="silver";
    }
  });
  $("#black-wheels-selector").click(function() {
    if (wheelsActive!=="black"){
      changeWheelsColor("black");
      wheelsActive="black";
    }
  });

  function changeCarColor(next) {

    $(".color-selector-active").removeClass("color-selector-active");
    $("#" + next + "-color-selector").addClass("color-selector-active");

    var original = $(".color-visible");

    $(original).velocity({
       opacity: 0
     }, 350, function() {
     $(this).removeClass("color-visible");
     $("#" + next + "-car-configurator").addClass("color-visible");
     $("#" + next + "-car-configurator").velocity({
       opacity: 1
     }, 500);
    });

  }

  function changeInteriorColor(next) {

    $(".interior-selector-active").removeClass("interior-selector-active");
    $("#" + next + "-interior-selector").addClass("interior-selector-active");

    var original = $(".interior-visible");

    $(original).velocity({
       opacity: 0
     }, 350, function() {
     $(this).removeClass("interior-visible");
     $("#" + next + "-interior-configurator").addClass("interior-visible");
     $("#" + next + "-interior-configurator").velocity({
       opacity: 1
     }, 500);
    });

  }

  function changeWheelsColor(next) {

    $(".wheels-selector-active").removeClass("wheels-selector-active");
    $("#" + next + "-wheels-selector").addClass("wheels-selector-active");

    var original = $(".wheels-visible");

    $(original).velocity({
       opacity: 0
     }, 350, function() {
     $(this).removeClass("wheels-visible");
     $("#" + next + "-wheels-configurator").addClass("wheels-visible");
     $("#" + next + "-wheels-configurator").velocity({
       opacity: 1
     }, 500);
    });

  }

  $("#color-next-button").click(function() {
    changeConfiguratorSection("color", "interior");
    $("#return-button").removeClass("button-active");
    $(this).removeClass("button-active");
    $("#interior-back-button").addClass("button-active");
    $("#interior-next-button").addClass("button-active");

    changeConfiguratorIcon("exterior", "interior");
  });

  $("#interior-back-button").click(function() {
    changeConfiguratorSection("interior", "color");
    $("#interior-next-button").removeClass("button-active");
    $(this).removeClass("button-active");
    $("#return-button").addClass("button-active");
    $("#color-next-button").addClass("button-active");

    changeConfiguratorIcon("interior", "exterior");
  });

  $("#interior-next-button").click(function() {
    changeConfiguratorSection("interior", "wheels");
    $("#interior-back-button").removeClass("button-active");
    $(this).removeClass("button-active");
    $("#wheels-back-button").addClass("button-active");
    $("#complete-button").addClass("button-active");

    changeConfiguratorIcon("interior", "wheels");
  });

  $("#wheels-back-button").click(function() {
    changeConfiguratorSection("wheels", "interior");
    $("#complete-button").removeClass("button-active");
    $(this).removeClass("button-active");
    $("#interior-back-button").addClass("button-active");
    $("#interior-next-button").addClass("button-active");

    changeConfiguratorIcon("wheels", "interior");
  });

  $("#complete-button").click(function() {
    changeConfiguratorSection("wheels", "order", "true");
    $("#wheels-back-button").removeClass("button-active");
    $(this).removeClass("button-active");
    $("#completed-return-button").addClass("button-active");
    readyToUnload = true;

    changeConfiguratorIcon("wheels", "order");
  });

  $("#completed-return-button").click(function() {
    window.location.href="suv.html";
  });

  function changeConfiguratorSection(original, next, hideTitle) {

    $("#"+original+"-selector-section").velocity({
       opacity: 0
     }, 350, function() {
     $("#"+original+"-selector-section").removeClass("selector-section-visible");
     $("#"+next+"-selector-section").addClass("selector-section-visible");
     $("#"+next+"-selector-section").velocity({
       opacity: 1
     }, 500);
    });

    $("#"+original+"-configurator-section").velocity({
       opacity: 0
     }, 350, function() {
     $("#"+original+"-configurator-section").removeClass("configurator-section-visible");
     if (hideTitle == "true") {
       $("#voltic-configurator-header").removeClass("d-flex");
       $("#voltic-configurator-header").addClass("d-none");
     }
     $("#"+next+"-configurator-section").addClass("configurator-section-visible");
     $("#"+next+"-configurator-section").velocity({
       opacity: 1
     }, 500);
    });
  }

  function changeConfiguratorIcon(original, next) {
    $("#"+original+"-black-icon").removeClass("d-inline-block");
    $("#"+original+"-black-icon-sm").removeClass("d-inline-block");
    $("#"+original+"-black-icon").addClass("d-none");
    $("#"+original+"-black-icon-sm").addClass("d-none");

    $("#"+original+"-white-icon").removeClass("d-none");
    $("#"+original+"-white-icon-sm").removeClass("d-none");
    $("#"+original+"-white-icon").addClass("d-inline-block");
    $("#"+original+"-white-icon-sm").addClass("d-inline-block");

    $("#"+next+"-white-icon").removeClass("d-inline-block");
    $("#"+next+"-white-icon-sm").removeClass("d-inline-block");
    $("#"+next+"-white-icon").addClass("d-none");
    $("#"+next+"-white-icon-sm").addClass("d-none");

    $("#"+next+"-black-icon").removeClass("d-none");
    $("#"+next+"-black-icon-sm").removeClass("d-none");
    $("#"+next+"-black-icon").addClass("d-inline-block");
    $("#"+next+"-black-icon-sm").addClass("d-inline-block");
  }

});
