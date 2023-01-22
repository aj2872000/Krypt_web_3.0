// https://eth-goerli.g.alchemy.com/v2/X5dCqMRXctij-ot7h_vRXDf48v2Rk-jM
require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };


// require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/X5dCqMRXctij-ot7h_vRXDf48v2Rk-jM',
      accounts: ['5211a9ee342fad8f3f4ef5592734633f2f0cf973a6e58f144db1e691a2997a51'],
    },
  },
};