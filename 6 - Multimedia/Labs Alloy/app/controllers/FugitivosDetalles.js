$.FugitivosDetalles.open();

var imageView;
function tomarFoto(e){
	Titanium.Media.showCamera({
		success:function(e){
			var image = e.media;
			$.icon.image = image;
			/*if(e.mediatype === Titanium.Media.MEDIA_TYPE_PHOTO){
				imageView = Titanium.UI.createImageView({
					image: e.media,
					width:180,
					height:180,
					top:12
				});	
			}*/
		},
		error:function(e){
			alert("Aparecio un error");
		},
		allowEditing:true,
		saveToPhotoGallery:true,
		mediaTypes:[Titanium.Media.MEDIA_TYPE_PHOTO],
	});
}

function capturado(){
	var menuDialogo = Ti.UI.createOptionDialog({
		options : ['Capturar', 'Cancelar'],
		destructive : 0,
		title : 'Ya has capturado a este fugitivo?'
	});
	menuDialogo.addEventListener('click', function(e) {
		if (e.index === 0) {
			alert('FELICIDADES\n\nCapturaste al fugitivo');
		}
	});
	menuDialogo.show();
}

function eliminado(){
	var menuDialogo = Ti.UI.createOptionDialog({
		options : ['Eliminar', 'Cancelar'],
		destructive : 0,
		title : 'Deseas eliminar a este Fugitivo?'
	});
	menuDialogo.addEventListener('click', function(e) {
		if (e.index === 0) {
			alert('Fugitivo Eliminado\n\nApuesto que alguien ya lo capturo');
		}
	});
	menuDialogo.show();
}
