const { assert } = require("chai");
const {deployments, getNamedAccounts, ethers} = require("hardhat");

describe("FundMe", function () {
  let fundMe;
  let MockV3Aggregator;
  let deployer;
  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    fundMe = await ethers.getContractAt("FundMe", deployer);
    MockV3Aggregator = await ethers.getContractAt("MockV3Aggregator", deployer);
  });

  describe("constructor", function () {
    it("sets the aggregator addresses correctly", async () => {
      const response = await fundMe.getPriceFeed();
      assert.equal(response, MockV3Aggregator.address);
    });
  });
});
