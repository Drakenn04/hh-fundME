const networkConfig = {
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0x326c977e6efc84e512bb9c30f76e30c160ed06fb",
  },
  80001: {
    name: "mumbai",
    ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
  },
  4: {
    name: "rinkeby",
    ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
  },
};

const developmentChain = ["hardhat", "localhost"];
const DECIMALS = 8;
const INTIAL_ANSWER = 200000000000;
module.exports = {
  networkConfig,
  developmentChain,
  DECIMALS,
  INTIAL_ANSWER,
};
