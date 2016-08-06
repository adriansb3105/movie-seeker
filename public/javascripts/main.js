$(document).ready(function(){

	var pedido = $("#pedido-div");
	var chat = $("#chat-div");
	var historial = $("#historial-div");
	var sugerencias = $("#sugerencias-div");
	var editar = $("#editar-div");

	$("#pedido-div").remove();
	$("#chat-div").remove();
	$("#historial-div").remove();
	$("#sugerencias-div").remove();
	$("#editar-div").remove();



	$("#pedido-btn").on("click",function(){
		$("#activa").addClass("active");
		$("#cont").append(pedido);
		$("#chat-div").remove();
		$("#historial-div").remove();
		$("#sugerencias-div").remove();
		$("#editar-div").remove();
	});

	$("#chat-btn").on("click", function(){
		$("#activa").removeClass("active");
		$("#cont").append(chat);
		$("#pedido-div").remove();
		$("#historial-div").remove();
		$("#sugerencias-div").remove();
		$("#editar-div").remove();
	});

	$("#historial-btn").on("click", function(){
		$("#activa").removeClass("active");
		$("#cont").append(historial);
		$("#pedido-div").remove();
		$("#chat-div").remove();
		$("#sugerencias-div").remove();
		$("#editar-div").remove();
	});	

	$("#sugerencias-btn").on("click", function(){
		$("#activa").removeClass("active");
		$("#cont").append(sugerencias);
		$("#pedido-div").remove();
		$("#historial-div").remove();
		$("#chat-div").remove();
		$("#editar-div").remove();
	});

	$("#editar-btn").on("click", function(){
		$("#activa").removeClass("active");
		$("#cont").append(editar);
		$("#pedido-div").remove();
		$("#historial-div").remove();
		$("#sugerencias-div").remove();
		$("#chat-div").remove();
	});


	$("#errorButton").on("click", function(){
		location.href="/";
	});

	$("#salir-btn").on("click", function(){
		location.href="/logout";
	});
});