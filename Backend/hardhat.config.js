require("@nomiclabs/hardhat-waffle");

// Import and configure dotenv
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/poB5E9XJUK8NVpzccMQrz3bJi6-on6Ni",
      accounts: ["2272e841418d2181a4c73f1816ebe360877524a7b7bc109013bff63e3ad5dab6"]
    },
  },
};
