require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "gaura_testnet",
  networks: {
    hardhat: {
    },
    gaura_testnet: {
      url: "https://testnet-rpc.gaurascan.com/",
      accounts: [PRIVATE_KEY]
    }
    // gaura_mainnet: {
    //   url: "https://mainnet-rpc.gaurascan.com/",
    //   accounts: [process.env.PRIVATE_KEY]
    // }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}