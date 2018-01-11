$.tabGroup.open();
function obtenerDatos() {
	var url = "https://randomuser.me/api/?results=2";
	var client = Ti.Network.createHTTPClient({

		onload : function(e) {
			crearContactos(JSON.parse(this.responseText).results);
		},
		onerror : function(e) {
			Ti.API.info("Error con la conexion de red");
		},
		timeout : 8000
	});

	client.open("GET", url);
	client.send();
}

function crearContactos(contactos) {
	var names = [];

	contactos.forEach(function(contacto) {
		names.push(
			contacto.name.first + " " + contacto.name.last
		);
	});
	
	for ( i = 0; i < names.length; i++) {
		var listModel = Alloy.createModel("Fugitive", {
			name : names[i]
		});
		listModel.save();
		Alloy.Collections.Fugitive.fetch();
	}
}

obtenerDatos();
