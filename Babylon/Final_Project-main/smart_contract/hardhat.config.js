// https://eth-kovan.alchemyapi.io/v2/kbmZOND1CvVzyZjCIi8CvKHNJ6LbNAIV

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0' ,
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/kbmZOND1CvVzyZjCIi8CvKHNJ6LbNAIV',
      accounts: ['c4d5ead49ff386052d42dff24a68eab9880b95bc0f440dcf75c01b7b2f8224db']
    }
  }
}