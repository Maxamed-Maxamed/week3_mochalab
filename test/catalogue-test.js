const chai = require("chai");
const Catalogue = require("../src/productCatalogue");
const Product = require("../src/product");

const expect = chai.expect;
let cat = null;
let batch = null;

/* The `describe` block is used to group related test cases together. In this case, it is grouping test
cases related to the "Catalogue" class. */
describe("Catalogue", () => {
  beforeEach(() => {
    console.log("before block");
    cat = new Catalogue("Test Catalogue");
    cat.addProduct(new Product("A123", "Product 1", 100, 10, 10.0));
    cat.addProduct(new Product("A124", "Product 2", 100, 10.0));
    cat.addProduct(new Product("A125", "Product 3", 100, 10, 10.0));
  });
  
  /* The code you provided is a test case for the `findProductById` method of the `Catalogue` class. */
  describe("findProductById", function () {
    it("should find a valid product id", function () {
      const result = cat.findProductById("A123");
      expect(result.name).to.equal("Product 1");
    });

    /* The code you provided is a test case for the `findProductById` method of the `Catalogue` class. */
    it("should return undefined for invalid product id", function () {
      const result = cat.findProductById("A321");
      expect(result).to.be.undefined;
    });
  });

  /* The code you provided is a test case for the 
  `removeProductById` method of the `Catalogue` class. */
  describe("removeProductById", () => {
    it("should remove product with a valid id", () => {
      let result = cat.removeProductById("A123");
      expect(result.id).to.equal("A123");
      // Check target state
      result = cat.findProductById("A123");
      expect(result).to.be.undefined;
    });
    it("should return undefined when product id is invalid.", () => {
      const result = cat.removeProductById("A321");
      expect(result).to.be.undefined;
    });

    it("should include products just on their reorder level", function () {
        cat.addProduct(new Product("B125", "Product 6", 10, 10, 10.0));
        const result = cat.checkReorders();
        expect(result.productIds).to.have.members(["B125"]);
      });
      it("should handle an the empty catalogue case", function () {
        cat = new Catalogue("Test catalogue");
        const result = cat.checkReorders();
        expect(result.productIds).to.be.empty;
      });


      




















  });
});