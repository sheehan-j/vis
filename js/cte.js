$( document ).ready(function() {
  console.log("cte.js is active.");
  
  $("#learnMore").click(function(){
    $("html,body").velocity({
      scrollTop: $("#cteAbout").offset().top
    }, 600);
  });
});
