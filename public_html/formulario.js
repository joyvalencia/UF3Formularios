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


		
//TIPOS DE INPUTS
//DATOS DIRECTOS -> NOMBRE 
		var ElemNombre = document.createElement("input");
		ElemNombre.setAttribute("id", "inputNombre");
		ElemNombre.setAttribute("type", "button");
		ElemNombre.setAttribute("value", "Nombre");
		$(segundoDiv).append(ElemNombre);

			//FUNCTION PARA CREACION DE BOTONES

		ElemNombre.addEventListener("click", crearNombre);
		function crearNombre(){
			//parrafo
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Nombre: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion de input para el nombre
			var inputNombre = document.createElement("input");
			$(formulario).append(inputNombre);
		}


//DATOS DIRECTOS -> APELLIDO 
		var ElemApellido = document.createElement("input");
		ElemApellido.setAttribute("id", "inputApellido");
		ElemApellido.setAttribute("type", "button");
		ElemApellido.setAttribute("value", "Apellido");
		$(segundoDiv).append(ElemApellido);

		//FUNCTION PARA CREACION DE BOTONES
		ElemApellido.addEventListener("click", crearApellido);
		function crearApellido(){
			//creacion del elemento parrafo
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Apellidos: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input para poner los apellidos
			var inputApellido = document.createElement("input");
			$(formulario).append(inputApellido);

		}


		//button
		var ElemButton = document.createElement("input");
		ElemButton.setAttribute("id", "inputBoton");
		ElemButton.setAttribute("type", "button");
		ElemButton.setAttribute("value", "Boton");
		$(segundoDiv).append(ElemButton);

			
		ElemButton.addEventListener("click", crear);

		function crear(){
			//creacion del elemento boton
			var botoncito = document.createElement("button");
			$(formulario).append(botoncito);
		}

		

//CHECKBOX
		var ElemCheckbox = document.createElement("input");
		ElemCheckbox.setAttribute("id", "checkNomal");
		ElemCheckbox.setAttribute("type", "button");
		ElemCheckbox.setAttribute("value", "Checkbox");
		$(segundoDiv).append(ElemCheckbox);



		ElemCheckbox.addEventListener("click", crearCheck);
		function crearCheck(){
			var textoParaCheckbox = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("CheckBox: ");
			(textoParaCheckbox).append(textoDentroParrafo);
			$(formulario).append(textoParaCheckbox);
			//creacion del input donde cogerá el valor 
			var checkBoxNomal = document.createElement("input");
			checkBoxNomal.setAttribute("id","valorCheckbox")
			$(formulario).append(checkBoxNomal);

			
			//creacion del nuevo boton para que cree los checks  
			var nuevoBotonParaCheck = document.createElement("input");
			nuevoBotonParaCheck.setAttribute("type","button");
			nuevoBotonParaCheck.setAttribute("value","Crea Chexbox");
			$(formulario).append(nuevoBotonParaCheck);

			//nueva funcion para crear los checks con su nombre elegido por el usuario
			nuevoBotonParaCheck.addEventListener("click", crearNuevosChecks);
			function crearNuevosChecks(){
				var checkBoxNomal = document.getElementById('valorCheckbox').value;
				var checkFinal = document.createElement("input");
				checkFinal.setAttribute("type","checkbox");
				checkFinal.setAttribute("value","#valorCheckbox");
				$(formulario).append(checkBoxNomal);
				$(formulario).append(checkFinal);
			}

		}

//FECHA
		var ElemDate = document.createElement("input");
		ElemDate.setAttribute("id", "inputFecha");
		ElemDate.setAttribute("type", "button");
		ElemDate.setAttribute("value", "Fecha");
		$(segundoDiv).append(ElemDate);

		ElemDate.addEventListener("click", crearFecha);

		function crearFecha(){
			//parrafo para fecha
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Fecha: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del nuevo input de tipo fecha
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
			//texto para el input del correo
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Correo: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo correo
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


//ARCHIVO
		var ElemFile = document.createElement("input");
		ElemFile.setAttribute("id", "inputArchivo");
		ElemFile.setAttribute("type", "button");
		ElemFile.setAttribute("value", "Archivo");
		$(segundoDiv).append(ElemFile);
		
		ElemFile.addEventListener("click", crearArchivo);
		function crearArchivo(){
			//texto para el input de tipo archivo
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Archivo: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo archivo
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
			//texto para el input de tipo contraseña
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Contraseña: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo contraseña
			var contrassenya = document.createElement("input");
			contrassenya.setAttribute("type", "password");
			$(formulario).append(contrassenya);
		}


//RADIO EN GENERO
		var ElemRadio = document.createElement("input");
		ElemRadio.setAttribute("id", "inputRadio");
		ElemRadio.setAttribute("type", "button");
		ElemRadio.setAttribute("value", "Radio");
		$(segundoDiv).append(ElemRadio);

		ElemRadio.addEventListener("click", crearRadio);
		function crearRadio(){
			//TEXTO DEL RADIO ->GENERO
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Género: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);

			//TEXTO DEL RADIO ->GENERO FEMENINO
			var textoParaFemenino = document.createElement("p");
			var textoFemenino = document.createTextNode("Femenino ");
			(textoParaFemenino).append(textoFemenino);
			$(formulario).append(textoParaFemenino);

			//creacion del input de tipo radio femenino
			var radioF = document.createElement("input");
			radioF.setAttribute("type","radio");
			radioF.setAttribute("id","radioFem");
			radioF.setAttribute("name","genero");
			$(textoParaFemenino).append(radioF);


			//TEXTO DEL RADIO ->GENERO MASCULINO
			var textoParaMasculino = document.createElement("p");
			var textoMasculino = document.createTextNode("Masculino ");
			(textoParaMasculino).append(textoMasculino);
			$(formulario).append(textoParaMasculino);

			//creacion del input de tipo radio femenino
			var radioM = document.createElement("input");
			radioM.setAttribute("type","radio");
			radioM.setAttribute("id","radioMas");
			radioM.setAttribute("name","genero");
			$(textoParaMasculino).append(radioM);
		}

		//range
		var ElemRange = document.createElement("input");
		ElemRange.setAttribute("id", "InputRango");
		ElemRange.setAttribute("type", "button");
		ElemRange.setAttribute("value", "Rango");
		$(segundoDiv).append(ElemRange);

		ElemRange.addEventListener("click", crearRange);
		function crearRange(){
			//texto para el input de tipo rango
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Rango: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo rango
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
			//texto para el input de tipo reset
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Restablece: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo reset
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
			//texto para el input de tipo submit
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Botón de enviar: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo submit
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
			//texto para el input de tipo telefon
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Telefono: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo telefono
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
			//texto para el input de tipo url
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Dirección Url: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo url
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
		
		ElemBuscador.addEventListener("click", crearBuscador);
		function crearBuscador(){
			//texto para el input de tipo search
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Buscador: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo search
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
			//texto para el input de tipo select
			var textoParaInput = document.createElement("p");
			var textoDentroParrafo = document.createTextNode("Opciones: ");
			(textoParaInput).append(textoDentroParrafo);
			$(formulario).append(textoParaInput);
			//creacion del input de tipo select

			var opcion = document.getElementById('opcionUsuario').value;
			
			var seleccion = document.createElement("input");
			seleccion.setAttribute("type", "select");
			$(formulario).append(seleccion);
		}

	});

	
	
});

