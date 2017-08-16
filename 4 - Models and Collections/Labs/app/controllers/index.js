$.index.open();

var names = ["Jeff Haynie", "Nolan Wright", "Blain Hamon", "Aaron Saunders", "Anthony Decena"];
for(i=0;i<names.length;i++){
	var listModel = Alloy.createModel("Fugitivos", {
		nombre: names[i],
	});
	listModel.save();
	Alloy.Collections.Fugitivos.fetch();
}
