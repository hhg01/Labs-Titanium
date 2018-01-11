var fugitiveCollection = Alloy.Collections.Fugitive;
/*******************************************************************
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
 *
function dataTransformation(_model) {

    // toggle the capture button
    //$.capture_button.visible = !_model.attributes.captured;

    return {
        name : _model.attributes.name,
        captured : _model.attributes.captured ? "Captured" : "Not Captured",
        image : _model.attributes.url || '',
    }
}
******************************************************************/

/**
 * only display the NOT captured items
 *
 * @param {Object} _collection
 */
function dofilter(_collection) {
    return fugitiveCollection.filter(function(_i){
        return !_i.attributes.captured
    });
}
// ..
// PRIVATE FUNCTIONS
//
/**
 *
 */
function addNewFugitive() {
    var addFugitiveController = Alloy.createController('FugitiveAdd');
    $.fugitiveTab.open(addFugitiveController.getView());
}

//
// EVENT LISTENERS
//
$.table.addEventListener('click', function(_e) {
    var detailController = Alloy.createController('FugitiveDetail', {
        parentTab : $.fugitiveTab,
        data : fugitiveCollection.get(_e.rowData.model)
    });
    $.fugitiveTab.open(detailController.getView());
});
/*$.table.addEventListener('longclick', function(e) {
    var tableViewEvent = e.row;
	var menuDialogo = Ti.UI.createOptionDialog({
		options : ['Capturar', 'Eliminar', 'Cancelar'],
		destructive : 0,
		title : 'Que deseas hacer con el Fugitivo?'
	});
	menuDialogo.addEventListener('click', function(e) {
		if (e.index === 0) {
			// update the model and save
		    var fugitiveModel = args.data;
		    fugitiveModel.set("captured", 1);
		    fugitiveModel.save();
		
		    // force tables to update
		    Alloy.Collections.Fugitive.fetch();
			alert('FELICIDADES\n\nCapturaste al fugitivo');
		}
		if (e.index === 1){
			// delete the model object
		    args.data.destroy();
		
		    // force tables to update
		    Alloy.Collections.Fugitive.fetch();
			alert('Fugitivo Eliminado\n\nApuesto que alguien ya lo capturo');
		}
	});
	menuDialogo.show();
});*/

