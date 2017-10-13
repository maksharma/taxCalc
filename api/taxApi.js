"use strict";

var _ = require("lodash")
var constants = require("../util").constants
var lib = require("../util").lib;

var taxApi = {

	calcTax: function(filepath, cb) {
		lib.convertToJson(filepath, function(err, res) {
			if (err != null) {
				return cb(err, null)
			}
			taxApi.computeTax(res, cb)
		});
	},

	computeTax: function(csvData, cb) {
		// assumes that the columns in csv will be in order - Quantity, Product, Price, otherwise we need to map and maintain order
		// drop first row from csvData because its the row with headers
		csvData = _.drop(csvData)
		var totalTax = 0,
			totalAmount = 0,
			displayData = "";

		_.forEach(csvData, function(dataRow) {
			if (dataRow[0] == null || dataRow[0].trim() == "" || isNaN(dataRow[0]) || dataRow[1] ==
				null ||
				dataRow[1].trim() == "" || dataRow[2] == null || dataRow[2].trim() == "" || isNaN(
					dataRow[2])
			) {
				return cb("Invalid elements present in csv", null);
			}
			var qty = Number(dataRow[0].trim());
			var product = dataRow[1].trim();
			var price = Number(dataRow[2].trim());
			var taxRate = constants.TAX_RATE;
			var importDuty = 0;

			//If items are books, food, medical pills
			_.forEach(constants.TAX_EXEMPTION, function(ele) {
				if (product.toLowerCase().indexOf(ele) !== -1) {
					taxRate = 0;
				}
				if (product.toLowerCase().indexOf(constants.IMPORT_TAX_KEYWORD) !== -1) {
					importDuty = constants.IMPORT_DUTY;
				}
			})
			var totalTaxRate = taxRate + importDuty;
			var tax = (totalTaxRate * price) / 100;
			price = (price + tax).toFixed(2);
			dataRow[2] = price;
			totalTax += Number(tax);
			totalAmount += Number(price);
			displayData = displayData + dataRow.toString() + "\n"

		})
		displayData = displayData + "\n";
		displayData = displayData + "Sales Taxes: " + totalTax.toFixed(2) + "\n";
		displayData = displayData + "Total: " + totalAmount.toFixed(2) + "\n";
		return cb(null, displayData);
	},
};


module.exports = taxApi;