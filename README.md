# taxCalc
Calculate taxes based on csv input based on the following conditions:

Basic sales tax is applicable at a rate of 10% on all goods, except books, food,
and medical products that are exempt. Import duty is an additional sales tax applicable
on all imported goods at a rate of 5%, with no exemptions.


To run the code you can use the following cli commands:
-------------------------------------------------------

`node taxCalculator.js input1.csv`

`node taxCalculator.js input2.csv`

`node taxCalculator.js input3.csv`

You can also use absolute path to read csv e.g.

`node taxCalculator.js "/Users/user/code/input3.csv"`

-------------------------------------------------------
Mocha unit test cases can be run using `mocha test/mocha.js` from the project root
