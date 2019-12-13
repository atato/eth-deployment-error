/**
 * Copyright (C) Longroot Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * @summary: Longroot truffle configuration
 * @author: Atato Co., Ltd.
 */
require('dotenv').config();
var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")


const HDWalletProvider = require("truffle-hdwallet-provider");
const privateKeys = [process.env.PRIVATEKEY];
const web3Provider = process.env.WEB3_PROVIDER;

module.exports = {
  plugins: [ "truffle-security" ],
  compilers: {
    solc: {
      version: "0.5.6",
    },
  },
  networks: {
    dev: {
      // Docker connection to ganache-cli container
      host: "172.17.0.1",
      port: 8145,
      network_id: "*",
      gas: "7800000"
    },
    goerli: {
      // provider: function () {
      //   return new HDWalletProvider(privateKeys, web3Provider, 0, privateKeys.length);
      // },
      provider: function () {
        var wallet = new HDWalletProvider(privateKeys, web3Provider, 0, privateKeys.length);
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: "*",
      gas: "7000000",
      gasPrice: "10000000000",
      websockets: true, // (default: false)
      confirmations: 2, // (default: 0)
      timeoutBlocks: 5000,
      skipDryRun: true
    }
  }
};
