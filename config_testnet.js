/* eslint-env browser */

module.exports = {
  homeURL: 'http://localhost:3000',
  contractDEx: 'smart_contract/dEx.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractDExAddrs: [
    { addr: '0x51ba4d11f6ed41748f8ebcb1890efb6d3e369f59', info: 'Deployed 04/16/2018' },
    { addr: '0x0000000000000000000000000000000000000000', info: 'Zero contract' },
  ],
  ethTestnet: 'ropsten',
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: false,
  apiServer: 'http://localhost:9000',
  userCookie: 'DEx',
  eventsCacheCookie: 'DEx_eventsCache',
  deadOrdersCacheCookie: 'DEx_deadOrdersCache',
  ordersCacheCookie: 'DEx_ordersCache',
  etherscanAPIKey: 'GCGR1C9I17TYIRNYUDDEIJH1K5BRPH4UDE',
  tokens: [
    { addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
    { addr: '0x54477a3abc9355711bce1c7f150e9129090dcdce', name: 'VAIB', decimals: 18 },
  ],
  defaultPair: { token: 'VAIB', base: 'ETH' },
  pairs: [
    { token: 'VAIB', base: 'ETH' },
  ],
};