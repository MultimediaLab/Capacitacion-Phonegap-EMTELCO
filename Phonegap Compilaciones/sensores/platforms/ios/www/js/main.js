//$(document).on("mobileinit", appReady);
$(document).on("ready", appReady);
var contrasena;
var usuario;
var tamanoPantalla = $(window).width();
function appReady () {
	$("#ingresar").on("click", validarUsuario);
	if (tamanoPantalla>480){
		cambiarListaPantalla1();
	}
	$(window).on("resize", cambiarListaPantalla1);
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