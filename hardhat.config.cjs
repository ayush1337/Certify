/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.9',
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'HTTP://127.0.0.1:7545',
    },
    ganache: {
      url: 'HTTP://127.0.0.1:7545',
    },
  },
};
