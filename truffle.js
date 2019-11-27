/**
 * Copyright (C) Longroot Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * @summary: Longroot truffle configuration
 * @author: Atato Co., Ltd.
 */
require('dotenv').config();
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
      provider: function () {
        return new HDWalletProvider(privateKeys, web3Provider, 0, privateKeys.length);
      },
      network_id: "*",
      gas: "7000000",
      gasPrice: "10000000000",
      confirmation: 2,
      timeoutBlocks: 5000,
      skipDryRun: true
    }
  }
};
