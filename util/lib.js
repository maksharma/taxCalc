"use strict";

var csv = require("csv");
var fs = require("fs");

var lib = {
	convertToJson: function(filepath, cb) {
		//filepath not limited to current directory with __diname, any csv can be read

		filepath = filepath.trim();
		fs.readFile(filepath, function(err, res) {
			if (err != null) {
				//handles if file doesn't exist or any other error
				return cb(err, null);
			}
			csv.parse(res, cb);

			//We can use different delimiter to support custom files as well like below
			/* csv.parse(res, {
			 	delimiter: ','
			 }, cb);*/
		})
	}
};

module.exports = lib;