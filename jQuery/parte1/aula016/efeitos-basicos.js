$(document).ready(function(){
    $("span:eq(0)").click(function(){
        $("p").fadeOut(1000);
        $("p").fadeIn(1000);
        $("p").fadeTo(1000,0.3);
        $("p").fadeToggle(1000);

    });

    $("span:eq(1)").click(function(){
        //$("p").slideUp(1000); 
        //$("p").slideDown(1000); 
        $("p").slideToggle(1000); 
    });
});