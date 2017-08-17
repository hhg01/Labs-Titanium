exports.definition = {
	config: {
		columns: {
		    "nombre": "TEXT",
		    "capturado": "integer",
		    "url": "TEXT",
		    "capturadoLat": "real",
		    "capturadoLong": "real"
		},
		"defaults" : {
		    "nombre": "",
		    "capturado": "0",
		    "url": "",
		    "capturadoLat": "",
		    "capturadoLong": ""
        },
		adapter: {
			type: "sql",
			collection_name: "Fugitivos",
			idAttribute: "idFugitivos"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};