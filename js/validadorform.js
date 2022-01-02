let regexEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;

$(document).ready(function(){
    $("#form").submit(function(e){
        validar(e);
    });
});


function validar(e){
    let error= false;
    $("#mensaje").empty();
    $("#form input").removeClass();
    if($("#nombre").val()==""){
        error = true;
        $("#mensaje").append("<p>El campo nombre es obligatorio </p>")
        $("#nombre").addClass("error");
    }
    if($("#apellido").val()==""){
        error = true;
        $("#mensaje").append("<p>El campo apellido es obligatorio </p>")
        $("#apellido").addClass("error");
    }
    if($("#equipo").val()==""){
        error = true;
        $("#mensaje").append("<p>El campo equipo es obligatorio </p>")
        $("#equipo").addClass("error");
    }
    if(!$("#email").val().match(regexEmail)){
        error = true;
        $("#mensaje").append("<p>El campo email no cumple con el formato adecuado</p>")
        $("#email").addClass("error");
    }
    if($("#telefono").val()==""){
        error = true;
        $("#mensaje").append("<p>El campo telefóno es obligatorio </p>")
        $("#telefono").addClass("error");
    }

    if(error){
        e.preventDefault();
    }
}