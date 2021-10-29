$(function(){
	"use-strict"

	var ruta = "http://localhost/games/categorias";

	$.ajax({
		url:ruta,
		method:"GET",
		dataType:"json"
	}).done(function(data){
		$.each(data,function(index,value){
			//alert(value.nombre);
			$("#tcategorias tbody").append(
				"<tr>" +
				"<td>" + value.Cod_Categoria + "</td>" +
				"<td>" + value.Nombre_Categoria + "</td>" +
				"<td>" + value.Publico_Categoria + "</td>" +
				"</tr>"
				);
		});
		$("#tcategorias tbody tr").click(function(){
			$("#tcategorias tbody tr").css("background-color","transparent");
			$(this).css("background-color","pink");

			var codigoCategoria = $(this).find("td:nth-child(1)").text();
			var nombreSeleccionado = $(this).find("td:nth-child(2)").text();
			var descripcionSeleccionado = $(this).find("td:nth-child(3)").text();

			$("#nombreCategoria").text(nombreSeleccionado);
			$("#descripcionCategoria").text(descripcionSeleccionado);

			mostrarProductos(codigoCategoria);					
		});		
	});
	$(function(){
		var ruta = "http://localhost/games/juegos";

		$.ajax({
			url:ruta,
			method:"GET",
			dataType:"json"
		}).done(function(data){
			$.each(data,function(index,value){
				$("#tgames tbody").append(
					"<tr>" +
					"<td>" + value.Cod_Juego + "</td>" +
					"<td>" + value.Nombre_Juego + "</td>" +
					"<td>" + value.Des_Juego + "</td>" +
					"<td>" + "S/. " + value.Precio_Juego + "</td>" +
					"<td>" + value.Desarrolladora_Juego + "</td>" +
					"<td>" + value.Stock_Juego + "</td>" +
					"</tr>"
					);
			});
		});
	});

	$("#btnGuardarCat").click(function(){
		var codigo = $("#txtCodigo").val();
		var nombre = $("#txtNombre").val();
		var publico = $("#txtPub").val();

		var ruta = "http://localhost/games/agregarcategoria.php";

		$.ajax({
			url:ruta,
			method:"POST",
			dataType:"text",
			data:{
				Cod_Categoria:codigo,
				Nombre_Categoria:nombre,
				Publico_Categoria:publico
			}
		}).done(function(data){
			$("#tcategorias tbody").append(
				"<tr>" +
				"<td>" + codigo + "</td>" +
				"<td>" + nombre + "</td>" +
				"<td>" + publico + "</td>" +
				"</tr>"
					);
		});
	});
});

