/**
 * Copyright (C) Longroot Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * @summary: Longroot truffle migrations
 * @author: Atato Co., Ltd.
 */

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  for (let i=0; i<500; i++) {
      deployer.deploy( Migrations )
          .then( () => {
              console.log( "Migrations contract deployed" )
          } )
          .catch( err => {
              console.error( err )
              process.exit( 1 )
          } );
  }
};
