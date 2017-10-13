"use strict";

//Shopback-calculator basic sanity tests

var assert = require('chai').assert;
var expect = require('chai').expect;
var taxApi = require("../api").tax

describe("input1 test", function() {
  it("returns tax calculation for input1.csv", function(done) {
    taxApi.calcTax("input1.csv", function(err, res) {
      assert.isNull(err, "There was no error");
      assert.isNotNull(res, "Got a result");
      assert.equal(res,
        "1,Book,12.49\n1,music cd,16.49\n1,chocolate bar,0.85\n\nSales Taxes: 1.50\nTotal: 29.83\n",
        "Final result isn't what is expected");
      done();
    });
  });
});

describe("input2 test", function() {
  it("returns tax calculation for input2.csv", function(done) {
    taxApi.calcTax("input2.csv", function(err, res) {
      assert.isNull(err, "There was no error");
      assert.isNotNull(res, "Got a result");
      assert.equal(res,
        "1,imported box of chocolates,10.50\n1,imported bottle of perfume,54.63\n\nSales Taxes: 7.63\nTotal: 65.13\n",
        "Final result isn't what is expected");
      done();
    });
  });
});

describe("input3 test", function() {
  it("returns tax calculation for input3.csv", function(done) {
    taxApi.calcTax("input3.csv", function(err, res) {
      assert.isNull(err, "There was no error");
      assert.isNotNull(res, "Got a result");
      assert.equal(res,
        "1,imported bottle of perfume,32.19\n1,bottle of perfume,20.89\n1,packet of headache pills,9.75\n1,imported box of chocolates,11.81\n\nSales Taxes: 6.66\nTotal: 74.64\n",
        "Final result isn't what is expected");
      done();
    });
  });
});

describe("input3 - test absolute path", function() {
  it("returns tax calculation for input3.csv", function(done) {
    taxApi.calcTax("/Users/user/code/input3.csv", function(err, res) {
      assert.isNull(err, "There was no error");
      assert.isNotNull(res, "Got a result");
      assert.equal(res,
        "1,imported bottle of perfume,32.19\n1,bottle of perfume,20.89\n1,packet of headache pills,9.75\n1,imported box of chocolates,11.81\n\nSales Taxes: 6.66\nTotal: 74.64\n",
        "Final result isn't what is expected");
      done();
    });
  });
});

describe("failure test", function() {
  it("checks failure condition for filenot found", function(done) {
    taxApi.calcTax("input_test.csv", function(err, res) {
      assert.isNotNull(err, "There should be an error");
      assert.isNull(res, "Shouldn't get a result");
      assert.equal(res, null, "Final result should be null");
      done();
    });
  });
});