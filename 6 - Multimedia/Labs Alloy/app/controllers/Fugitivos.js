function arrestado(e) {
	var tableViewEvent = e.row;
	var menuDialogo = Ti.UI.createOptionDialog({
		options : ['Capturar', 'Eliminar', 'Cancelar'],
		destructive : 0,
		title : 'Que deseas hacer con el Fugitivo?'
	});
	menuDialogo.addEventListener('click', function(e) {
		if (e.index === 0) {
			alert('FELICIDADES\n\nCapturaste al fugitivo');
		}
		if (e.index === 1){
			alert('Fugitivo Eliminado\n\nApuesto que alguien ya lo capturo');
			//eliminaFugitivo(tableViewEvent);
		}
	});
	menuDialogo.show();
}

/*function eliminaFugitivo (_row) {
	var recoverDatabase = Alloy.createCollection("Fugitivos");

	recoverDatabase.fetch({query:"SELECT * FROM Fugitivos"});
	
	for(var i=0; i<recoverDatabase.length;i++){
		if(recoverDatabase.at(i).get("idFugitivos") == _row.rowId){
			var table = Alloy.createCollection("Fugitivos");
			table.fetch({query:"SELECT * FROM Fugitivos where idFugitivos = " + _row.rowId });
		    if(table.length > 0){
		    	//To remove a row from the database we use destroy()
			    table.at(0).destroy();
			    Alloy.Collections.Fugitivos.fetch();
		    }
		}
	}
}*/
//
function detalles(e){
	var addFugitivoDetalle = Alloy.createController('FugitivosDetalles');
    addFugitivoDetalle.getView();
}
