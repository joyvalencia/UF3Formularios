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

//EMAIL
		var ElemEmail = document.createElement("input");
		ElemEmail.setAttribute("id", "inputCorreo");
		ElemEmail.setAttribute("type", "button");
		ElemEmail.setAttribute("value", "Correo");
		$(segundoDiv).append(ElemEmail);

			//FUNCTION PARA CREACION DE BOTONES

		ElemEmail.addEventListener("click", crearEmail);
		function crearEmail(){
			
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Correo: ");
			(textoParaInput).append(textoDentroParrafo);

			$(formulario).append(textoParaInput);
			var correo = document.createElement("input");			
			correo.setAttribute("type", "mail");
			correo.setAttribute("placeholder", "usuario@gmail.com");
			$(formulario).append(correo);
		}

//PÁRRAFO
		// var textoParaInput = document.createElement("p");
		// var textoDentroParrafo = document.createTextNode("Funciona Parrafo solo");
		// (textoParaInput).append(textoDentroParrafo);

		// $(formulario).append(textoParaInput);


		//file
		var ElemFile = document.createElement("input");
		ElemFile.setAttribute("id", "inputArchivo");
		ElemFile.setAttribute("type", "button");
		ElemFile.setAttribute("value", "Archivo");
		$(segundoDiv).append(ElemFile);
		
		ElemFile.addEventListener("click", crearArchivo);
		function crearArchivo(){
			var archivo = document.createElement("input");
			archivo.setAttribute("type", "file");
			$(formulario).append(archivo);
		}


		
		//password
		var ElemPassword = document.createElement("input");
		ElemPassword.setAttribute("id", "inputContras");
		ElemPassword.setAttribute("type", "button");
		ElemPassword.setAttribute("value", "Constraseña");
		$(segundoDiv).append(ElemPassword);


		ElemPassword.addEventListener("click", crearContrassenya);
		function crearContrassenya(){
			var contrassenya = document.createElement("input");
			contrassenya.setAttribute("type", "password");
			$(formulario).append(contrassenya);
		}


		//radio
		var ElemRadio = document.createElement("input");
		ElemRadio.setAttribute("id", "inputRadio");
		ElemRadio.setAttribute("type", "button");
		ElemRadio.setAttribute("value", "Radio");
		$(segundoDiv).append(ElemRadio);

		ElemRadio.addEventListener("click", crearRadio);
		function crearRadio(){
			var radio = document.createElement("input");
			radio.setAttribute("type", "radio");
			$(formulario).append(radio);
		}


		//range
		var ElemRange = document.createElement("input");
		ElemRange.setAttribute("id", "InputRango");
		ElemRange.setAttribute("type", "button");
		ElemRange.setAttribute("value", "Rango");
		$(segundoDiv).append(ElemRange);

		ElemRange.addEventListener("click", crearRange);
		function crearRange(){
			var rango = document.createElement("input");
			rango.setAttribute("type", "range");
			$(formulario).append(rango);
		}


		//reset
		var ElemReset = document.createElement("input");
		ElemReset.setAttribute("id", "inputReset");
		ElemReset.setAttribute("type", "button");
		ElemReset.setAttribute("value", "Reset");
		$(segundoDiv).append(ElemReset);

		ElemReset.addEventListener("click", crearReset);
		function crearReset(){
			var restablece = document.createElement("input");
			restablece.setAttribute("type", "reset");
			$(formulario).append(restablece);
		}


		//submit
		var ElemSubmit = document.createElement("input");
		ElemSubmit.setAttribute("id", "inputEnviar");
		ElemSubmit.setAttribute("type", "button");
		ElemSubmit.setAttribute("value", "Enviar");
		$(segundoDiv).append(ElemSubmit);

		ElemSubmit.addEventListener("click", crearEnviar);
		function crearEnviar(){
			var enviar = document.createElement("input");
			enviar.setAttribute("type", "submit");
			$(formulario).append(enviar);
		}


		//tel
		var ElemTel = document.createElement("input");
		ElemTel.setAttribute("id", "inputTelefon");
		ElemTel.setAttribute("type", "button");
		ElemTel.setAttribute("value", "Telefon");
		$(segundoDiv).append(ElemTel);

		ElemTel.addEventListener("click", crearTelefono);
		function crearTelefono(){
			var telefono = document.createElement("input");
			telefono.setAttribute("type", "tel");
			$(formulario).append(telefono);
		}


		//url
		var ElemUrl = document.createElement("input");
		ElemUrl.setAttribute("id", "inputUrl");
		ElemUrl.setAttribute("type", "button");
		ElemUrl.setAttribute("value", "Url");
		$(segundoDiv).append(ElemUrl);

		ElemUrl.addEventListener("click", crearUrl);
		function crearUrl(){
			var direccionUrl = document.createElement("input");
			direccionUrl.setAttribute("type", "url");
			direccionUrl.setAttribute("placeholder", "https://www.google.com/");
			$(formulario).append(direccionUrl);
		}


		//search
		var ElemBuscador = document.createElement("input");
		ElemBuscador.setAttribute("id", "inputBuscar");
		ElemBuscador.setAttribute("type", "button");
		ElemBuscador.setAttribute("value", "Buscador");
		$(segundoDiv).append(ElemBuscador);
		
		ElemBuscador.addEventListener("click", crearTelefono);
		function crearTelefono(){
			var buscar = document.createElement("input");
			buscar.setAttribute("type", "search");
			buscar.setAttribute("placeholder", "Buscar");
			$(formulario).append(buscar);
		}


		//select
		var ElemSelector = document.createElement("input");
		ElemSelector.setAttribute("id", "inputBuscar");
		ElemSelector.setAttribute("type", "button");
		ElemSelector.setAttribute("value", "Selector");
		$(segundoDiv).append(ElemSelector);

			//OPCIONES
			var ElemOpcion = document.createElement("option");
			ElemOpcion.setAttribute("value", "Selector");
			$(ElemSelector).append(ElemOpcion);


		ElemSelector.addEventListener("click", crearSelect);
		function crearSelect(){
			var opcion = document.getElementById('opcionUsuario').value;
			
			var seleccion = document.createElement("input");
			seleccion.setAttribute("type", "select");
			$(formulario).append(seleccion);
		}

	});

	
	
});

