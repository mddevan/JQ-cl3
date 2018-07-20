$(document).ready(function(){
    
    
    $("#details").click(function(){
        $(".anim").animate({width:"300px"});
    });
    $(".anim").mouseleave(function(){
        $(".anim").animate({width:"100px"});
    });
    
        $("#app").click(function(){
        $(".add_app").append(" <b>the best club in the world.</b>");
    });
    $("#pre").click(function(){
        $(".add_pre").prepend(" <b>We all Know that </b>");
    });
    
   
      $("button").click(function(){
        $("li").each(function(){
            alert($(this).text())
        });
    });

 $("#content").load("../jquery/home.html");
    $("ul li a").click(function() {
        var page = $(this).attr("href");
        $("#content").load("../jquery/" + page + ".html");
        return false;
    });

    
    
});
