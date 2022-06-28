$(document).ready(function(){
    $("span:eq(0)").click(function(){
        $("p").hide("1000")        
    });

    $("span:eq(1)").click(function(){
        $("p").show("1000") 
    });

    $("span:eq(2)").click(function(){
        $("p").toggle() 
    });
});