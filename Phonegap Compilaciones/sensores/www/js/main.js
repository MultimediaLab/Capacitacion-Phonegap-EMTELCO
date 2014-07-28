//$(document).on("mobileinit", appReady);
//$(document).on("ready", appReady);
document.addEventListener("deviceready",appReady,false);
var contrasena;
var usuario;
var tamanoPantalla = $(window).width();
var pictureSource; //Definir la fuente de imagen
var destinationType; //Definir el formato de imagen que retorna la fuente
function appReady () {
	pictureSource=navigator.camera.PictureSourceType;
   	destinationType=navigator.camera.DestinationType;
	$('#boton_1').on("click", capturePhoto);
	$("#ingresar").on("click", validarUsuario);
	if (tamanoPantalla>480){
		cambiarListaPantalla1();
	}
	$(window).on("resize", cambiarListaPantalla1);
}
function capturePhoto () {
	//BASE 64 Encoded
	navigator.camera.getPicture(onPhotoSuccess, onFail, { quality: 50,destinationType: destinationType.DATA_URL });
	alert("foto capturada");
}
function onPhotoSuccess (image) {
	alert("exitoso");
	$('#smallImage').attr("src", "data:image/jpeg;base64,"+image);

}
function onFail (message) {
	alert("Error en : "+message);
}
function cambiarListaPantalla1 () {
	tamanoPantalla = $(window).width();
	if (tamanoPantalla>480) {
		$("#lista, #lista li").removeAttr("data-role");
		$("#lista, #lista li a, #lista li").removeAttr("class");
		$("#lista li:not(#lista li:nth-child(1))").addClass("servicios");
		$('#lista').addClass("lista-centrado");
	}else{
		$('#lista').removeClass("lista-centrado");
		$("#lista li:not(#lista li:nth-child(1))").removeClass("servicios");
		$("#lista").addClass("ui-listview ui-listview-inset ui-corner-all ui-shadow");
		$('#lista li:nth-child(1)').addClass("ui-li-divider ui-bar-inherit ui-first-child");
		$('#lista li:nth-child(4)').addClass("ui-last-child");
		$("#lista li a").addClass("ui-icon-right ui-icon-carat-r ui-btn ui-btn-icon-right");
	}
}
function validarUsuario () {
	usuario = $('#user').val();
	contrasena = $('#pass').val();
	console.log(usuario);
	console.log(contrasena);
	if (usuario!="admin" || contrasena != "1234") {
		$(this).attr("href", "#error_login");
	}else{
		$(this).attr("href", "#pagina1");
	}
}