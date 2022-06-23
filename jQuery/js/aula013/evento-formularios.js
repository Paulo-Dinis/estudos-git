$(document).ready(function(){
    $(":text").keyup(function(){
        $("#msg").text($(this).val());
        
    }).focus(function(){
        $(this).css("background", "blue");
        $("#msg").text("Focus");
    }).blur(function(){
        $(this).css("background", "#DDD");
        $("#msg").text("Blur");
    });

    $("#validar").click(function(){
        $("#forms").submit(function(){
            if($(":text").val() == "SMN") {
                return true;
            };
            return false;
        });
    $("select").change(function(){
        let escolha = $("option:selected").text();
        $("#msg").text("Pais : " + escolha);
            
        });
    });  
});
    