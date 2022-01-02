$(document).ready(function(){
    $("#filtro").change(function(){
        mostrarSeleccion($(this).val());
    });
  
});



function mostrarSeleccion(valor){
    
    if(valor === "Arquero"){
        $(".arqueros").show();
        $(".defensores").hide();
        $(".mediocampista").hide();
        $(".delantero").hide();
    }
    if(valor === "Delantero"){
        $(".delantero").show();
        $(".defensores").hide();
        $(".mediocampista").hide();
        $(".arqueros").hide();
    }
    if(valor === "Mediocampista"){
        $(".mediocampista").show();
        $(".defensores").hide();
        $(".arqueros").hide();
        $(".delantero").hide();
    }
    if(valor === "Defensor"){
        $(".defensores").show();
        $(".arqueros").hide();
        $(".mediocampista").hide();
        $(".delantero").hide();
    }
    if(valor === "0"){
        $(".defensores").show();
        $(".arqueros").show();
        $(".mediocampista").show();
        $(".delantero").show();
    }


}