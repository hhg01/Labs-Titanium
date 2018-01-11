migration.up = function(db) {
    db.createTable({
        "columns" : {
        	"idAttribute" : "ROWID",
            "name" : "text",
            "captured" : "integer",
            "url" : "text",
            "capturedLat" : "real",
            "capturedLong" : "real"
        },
		"defaults" : {
			"idAttribute" : "",
		    "name" : "",
		    "captured" : 0,
		    "url" : "",
		    "capturedLat" : "",
		    "capturedLong" : ""
		},
        "adapter" : {
            "type" : "sql",
            "collection_name" : "fugitives"
        }
    });
};

migration.down = function(db) {
    db.dropTable("fugitives");
};
