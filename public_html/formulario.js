$(document).ready(function(){
	//PRIMER BOTON
	

	$("#op").hide();
	$("button").click(function(){
		var nombre=document.getElementById('crear').value;
		var formulario='Formulario';
		var NuevoForm='nuevo boton'
		$('body').append('<br>'+'<div><h3>'+nombre+'</h3></div>'+'<br>');

		$('div').append('<form>'+formulario+'<br>'+'</form>'+'<br>');
		$('form').append('<input id="opciones">'+'<button id="bn">'+NuevoForm+'</button>');
	});


});

	//DIV
	
  	//

//////////////////////////////OPCIONES DE TIPOS DE INPUTS//////////////////////////////


$(document).ready(function() {
	
		  $("#op").change(function() {
		    var id = $('#op').find("option:selected").attr("id");
		    switch (id) {
		      case "label":	
		      var lab = document.createElement("label");
		      lab.setAttribute("id", "1");
		      document.body.appendChild(lab);	        
		        break;
		      case "inp":
		      var inp = document.createElement("input");
			  inp.setAttribute("id", "1");
			  document.body.appendChild(inp);
		      case "checkbox":
		      var cb = document.createElement("input");
		      cb.setAttribute("type", "checkbox");
		      document.body.appendChild(cb);				        
		        break;
		      case "textarea":		        
		      var textoarea = document.createElement("input");	
		      textoarea.setAttribute("type", "textarea");
		      document.body.appendChild(textoarea);	
		        break;
		      case "redondo":		        
		      var redond = document.createElement("input");	
		      redond.setAttribute("type", "radio");
		      document.body.appendChild(redond);	
		        break;
		      case "fecha":		        
		      var fecha = document.createElement("input");	
		      fecha.setAttribute("type", "date");
		      document.body.appendChild(fecha);	
		        break;
		      case "correo":		        
		      var correo = document.createElement("input");
		      correo.setAttribute("type", "email");
		      document.body.appendChild(correo);		
		        break;
		      case "telefono":		        
		      var telefono = document.createElement("input");	
		      telefono.setAttribute("type", "tel");
		      document.body.appendChild(telefono);	
		        break;
		      case "archivo":		        
		      var archivo = document.createElement("input");	
		      archivo.setAttribute("type", "file");
		      document.body.appendChild(archivo);	
		        break;
		    }
		  });
		});







