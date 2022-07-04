$(document).ready(function(){
    $(".numeros").bind("keydown", function(e){
        let keyCode = e.which;
        let outraTecla = (",8,46,37,38,39,40,".indexOf(","+ keyCode +",") >-1);
        let enumero = (
            keyCode > 47 && keyCode < 58 || 
            keyCode > 95 && keyCode < 106
        );      
         
        if(enumero || outraTecla){
            return true;
        }else{
            return false;
        }
    });
});