/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    gaura_testnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC,`https://testnet-rpc.gaurascan.com/`),
      network_id: 33982,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      //chainId: 33982
    },
    // gaura_miannet: {
    //   provider: () => new HDWalletProvider(process.env.MNEMONIC,`https://mainnet-rpc.gaurascan.com/`),
    //   network_id: 61115,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    //   //chainId: 61115
    // },
  },
  compilers: {
    solc: {
      version: "^0.8.9",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
