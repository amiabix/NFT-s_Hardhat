/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "rinkeby",
networks: {
  hardhat: {
  },
  rinkeby: {
    url: "https://eth-rinkeby.alchemyapi.io/v2/1pXO5NlJ6ItEl0mgkQoByKWQqO3N-U5G",
    accounts: ["6fbc4c2c7483535bc6e5ca96e2d6526194a2c910f8f5443ed51421ac548b5e11"]
  }
},
solidity: {
  version: "0.8.0"
},
paths: {
  sources: "./contracts",
  tests: "./test",
  cache: "./cache",
  artifacts: "./artifacts"
},
mocha: {
  timeout: 20000
}
};
