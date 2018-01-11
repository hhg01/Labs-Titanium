var args = arguments[0] || {};
//
// this is setting the view elements of the row view
// which is found in views/row.xml based on the arguments
// passed into the controller
//
//$.thumbnail.image = args.image;
$.parentController = args.parentTab;

// add the datatransformation
$.fugitiveDetail = _.extend({}, $.fugitiveDetail, {
    transform : function() {
        return dataTransformation(this);
    }
});

// instance variable used in data-binding
// we do this set here to trigger the events
// that will cause the data to be rendered
$.fugitiveDetail.set(args.data.attributes);

/**
 * being used for rendering the model in the view
 * via data-binding
 *
 * @param {Object} _model
 */
function dataTransformation(_model) {

    // toggle the capture button
    //$.capture_button.visible = !_model.attributes.captured;

    return {
        name : _model.attributes.name,
        captured : _model.attributes.captured ? "Captured" : "Not Captured",
        image : _model.attributes.url || '',
    }
}

//
// EVENT HANDLER
//
// save a photo to associate with the captured person
$.photo_button.addEventListener('click', function(_e) {
    var cameraOptions = {
        success : function(event) {
            var image = event.media;

            // set image on window
            $.image.image = image;

            //save for future use
            var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'photo' + args.data.get("alloy_id") + '.png');
            f.write(image);

            // update the model and save
            var fugitiveModel = args.data;
            fugitiveModel.set("url", f.nativePath);
            fugitiveModel.save();

            // force tables to update
            Alloy.Collections.Fugitive.fetch();

        },
        cancel : function() {
            // cancel and close window
        },
        error : function(error) {
            var a = Ti.UI.createAlertDialog({
                title : "Camera Error"
            });
            if (error.code == Ti.Media.NO_CAMERA) {
                a.setMessage("MISSING CAMERA");
            } else {
                a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
        },
        saveToPhotoGallery : false,
        allowEditing : false,
        mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
    };

    // display camera OR gallery
    if (Ti.Media.isCameraSupported) {
        Ti.Media.showCamera(cameraOptions);
    } else {
        Ti.Media.openPhotoGallery(cameraOptions);
    }

});


// delete the fugitive
$.delete_button.addEventListener('click', function(_e) {
	var menuDialogo = Ti.UI.createOptionDialog({
		options : ['Eliminar', 'Cancelar'],
		destructive : 0,
		title : 'Deseas eliminar a este Fugitivo?'
	});
	menuDialogo.addEventListener('click', function(e) {
		if (e.index === 0) {
		    // delete the model object
		    args.data.destroy();
		
		    // force tables to update
		    Alloy.Collections.Fugitive.fetch();
			$.detailWindow.close();
			alert('Fugitivo Eliminado\n\nApuesto que alguien ya lo capturo');
		}
	});
	menuDialogo.show();
	
});

$.map_button.addEventListener('click', function(_e){
	if (args.data.get("capturedLat")) {
        var mapController = Alloy.createController('MapDetail', {
            model : args.data
        });
        args.parentTab.open(mapController.getView());
    } else {
        alert('Aun no capturado');
    }
});
