require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth shift protect half problem off style'; 
let testAccounts = [
"0x6fead072ec1f8c425f1a637768313192c9c69875f76ed076f37cd63d5795d92c",
"0x0f538f127e5028f38f62fdf80d04a00bcc6840bf5968c8a53b7ccbba60b104ce",
"0x0f084f4ce9520860aac50097428240a275ea53e2d9bb46f55d3997a1469ead9c",
"0x2ddb7ccf7987c681917c3f395b40248a1b8a1dcb41c97cc494489b67a60d8f7a",
"0x629295991a179350bcccbc851fa1e9265c0244c5da408b8c336026b530c81ab7",
"0xae944b08632ea9b47dc433bebbffe993c0007531efa0824f37041f87c41dcf31",
"0xaf352655fd0ee2af40b6fd57ff7585d6e1b3cb04dc314c75dac4035d073c97e5",
"0x21d7fd118d2335d7064b32f3ddd10845bf14f36488be5300b699865c9aa37f80",
"0x1262e50106ad07050eeb74f7d9bbae2885add0ed50b28cdfc1b5d5ae37a50f32",
"0xd95af5a06814ec36c90551639212174247f54e8b6250e7c2c5f4b46e80358284"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

