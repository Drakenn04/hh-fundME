const { assert } = require("chai");
const { deployments, getNamedAccounts, ethers } = require("hardhat");

describe("FundMe", function () {
  let fundMe;
  let MockV3Aggregator;
  let deployer;

  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    fundMe = await ethers.getContract("FundMe", deployer);
    MockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer);
  });

  describe("constructor", () => {
    it("sets the aggregator addresses correctly", async () => {
      const response = await fundMe.priceFeed();
      assert.equal(response, MockV3Aggregator.address);
    });
  });
});
