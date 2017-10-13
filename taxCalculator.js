"use strict";
/**
 * This cli will read csv input file and calculate taxes, and print receipt
 **/

var taxApi = require("./api").tax;
// var lib = require("./util").lib;

// -- Invoking Code ---------------------------------------------------------
if (require.main === module) {
  (function() {
    //loose check with ==null handles both null and undefined, type strict check for empty string
    var filepath = process.argv[2];
    if (filepath == null || filepath === "" || filepath.trim() === "") {
      return terminate("No filepath passed.", null);
    }

    taxApi.calcTax(filepath, terminate);
  })();
}

function terminate(err, result) {
  console.log(err || result);
  process.exit(0);
}