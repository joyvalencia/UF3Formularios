$(document).ready(function(){
	$("button").click(function(){
		//valor que cogemos del input 
		var valorNombre = document.getElementById('crear').value;
		var saltoLinea = document.createElement("br");
		$(segundoDiv).append(saltoLinea);
		//creamos el formulario donde irán los diferentes tipos de inputs
		var formulario = document.createElement('form');
		$(formulario).append(valorNombre);
		$(formulario).append(saltoLinea);
		//creamos el primer div, donde irá el form
		var primerDiv = document.createElement("div");
		$('body').append(primerDiv);
		$(primerDiv).append(formulario);

		var segundoDiv = document.createElement("div");
		$(formulario).append(segundoDiv);


		
		//tipos de inputs
		//button
		var ElemButton = document.createElement("input");
		ElemButton.setAttribute("id", "inputBoton");
		ElemButton.setAttribute("type", "button");
		ElemButton.setAttribute("value", "Boton");
		$(segundoDiv).append(ElemButton);

			
		ElemButton.addEventListener("click", crear);

		function crear(){
			var botoncito = document.createElement("button");
			$(formulario).append(botoncito);
		}

		

		//checkbox
		var ElemCheckbox = document.createElement("input");
		ElemCheckbox.setAttribute("id", "checkNomal");
		ElemCheckbox.setAttribute("type", "button");
		ElemCheckbox.setAttribute("value", "Checkbox");
		$(segundoDiv).append(ElemCheckbox);

		ElemCheckbox.addEventListener("click", crearCheck);
		function crearCheck(){
			var checkBoxNomal = document.createElement("input");
			checkBoxNomal.setAttribute("type", "checkbox");
			$(formulario).append(checkBoxNomal);
		}

		//date
		var ElemDate = document.createElement("input");
		ElemDate.setAttribute("id", "inputFecha");
		ElemDate.setAttribute("type", "button");
		ElemDate.setAttribute("value", "Fecha");
		$(segundoDiv).append(ElemDate);

		ElemDate.addEventListener("click", crearFecha);
		function crearFecha(){
			var fecha = document.createElement("input");
			fecha.setAttribute("type", "date");
			$(formulario).append(fecha);
		}

		// //email
		// var ElemEmail = document.createElement("input");
		// ElemEmail.setAttribute("id", "inputCorreo");
		// ElemEmail.setAttribute("type", "button");
		// ElemEmail.setAttribute("value", "Correo");
		// $(segundoDiv).append(ElemEmail);

		// //file
		// var ElemFile = document.createElement("input");
		// ElemFile.setAttribute("id", "inputArchivo");
		// ElemFile.setAttribute("type", "button");
		// ElemFile.setAttribute("value", "Archivo");
		// $(segundoDiv).append(ElemFile);
		
		// //image
		// var ElemImage = document.createElement("input");
		// ElemImage.setAttribute("id", "inputImagen");
		// ElemImage.setAttribute("type", "button");
		// ElemImage.setAttribute("value", "Imagen");
		// $(segundoDiv).append(ElemImage);

		// //password
		// var ElemPassword = document.createElement("input");
		// ElemPassword.setAttribute("id", "inputContras");
		// ElemPassword.setAttribute("type", "button");
		// ElemPassword.setAttribute("value", "Constraseña");
		// $(segundoDiv).append(ElemPassword);

		// //radio
		// var ElemRadio = document.createElement("input");
		// ElemRadio.setAttribute("id", "inputRadio");
		// ElemRadio.setAttribute("type", "button");
		// ElemRadio.setAttribute("value", "Radio");
		// $(segundoDiv).append(ElemRadio);

		// //range
		// var ElemRange = document.createElement("input");
		// ElemRange.setAttribute("id", "InputRango");
		// ElemRange.setAttribute("type", "button");
		// ElemRange.setAttribute("value", "Rango");
		// $(segundoDiv).append(ElemRange);

		// //reset
		// var ElemReset = document.createElement("input");
		// ElemReset.setAttribute("id", "inputReset");
		// ElemReset.setAttribute("type", "button");
		// ElemReset.setAttribute("value", "Reset");
		// $(segundoDiv).append(ElemReset);

		// //submit
		// var ElemSubmit = document.createElement("input");
		// ElemSubmit.setAttribute("id", "inputEnviar");
		// ElemSubmit.setAttribute("type", "button");
		// ElemSubmit.setAttribute("value", "Enviar");
		// $(segundoDiv).append(ElemSubmit);

		// //tel
		// var ElemTel = document.createElement("input");
		// ElemTel.setAttribute("id", "inputTelefon");
		// ElemTel.setAttribute("type", "button");
		// ElemTel.setAttribute("value", "Telefon");
		// $(segundoDiv).append(ElemTel);

		// //url
		// var ElemUrl = document.createElement("input");
		// ElemUrl.setAttribute("id", "inputUrl");
		// ElemUrl.setAttribute("type", "button");
		// ElemUrl.setAttribute("value", "Url");
		// $(segundoDiv).append(ElemUrl);

		// //search
		// var ElemBuscador = document.createElement("input");
		// ElemBuscador.setAttribute("id", "inputBuscar");
		// ElemBuscador.setAttribute("type", "button");
		// ElemBuscador.setAttribute("value", "Buscador");
		// $(segundoDiv).append(ElemBuscador);
		
	});

	
	
});

