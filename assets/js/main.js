var mensaje=document.getElementById('demo');
var impresion=document.getElementById("contenedor");

mensaje.addEventListener("click",function(){
	impresion.innerHTML="¡Hola Mundo!";
})

var elem =document.getElementById('hello');
function pasar(elem){
	alert("¡Estás sobre mí!");
}

function salir(elem){
alert("¡No estás sobre mí!");
	}
	
/*var elem2=document.getElementById("bye");
*/