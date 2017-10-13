'use strict';

module.exports = {
	IMPORT_DUTY: 5, //in %
	TAX_RATE: 10, //in %
	IMPORT_TAX_KEYWORD: "import",
	TAX_EXEMPTION: ["book", "chocolate", "pill"],
};

//tax = 10% on all except books, food (chocolates), medical pills
//import duty = 5% on imported items, no exemptions