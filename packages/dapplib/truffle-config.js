require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note spike equip inflict drive flip twenty'; 
let testAccounts = [
"0x2fe4614c415e7d6eb44b5295a68392009700c5c1b8ed652fff79c18fb0505e39",
"0xa1c94df7f6b73cb8ade62da1ea28dcf56baff2475751bdbd3d981d25d68aad0e",
"0x6403ac759671bce4029fe7e303543a8a3413d81fde1e93f4ab21048134180d03",
"0x9f28b6259e0fd5346c17b059d610d8ba09813343ecb6bc16c36a8733cf2efc77",
"0xda625c6f6fb801b19ecffd9c6f6e472a3fab7fcd27c91144611c9904b2e6b8c9",
"0x0e8733140f762824cca3d2c0ee0e500fe31d6f1147a3490a10806f5a9a05d624",
"0x836ffe63be1479ff4d4504b27f10c7ec5112b2df72e974ee720857eb461362ed",
"0xb0f326bdf5842b5b356142e174124b876a58283a0a0acc4bcc9bdde3e4db058f",
"0x2585dd9fff7e68937ef812805fea8ea5ea4b99bb10dab94e89cf24c66a9852ee",
"0xd1150486485f49d4392e67b853504c39edd3c332eeb0fa44875295c7b36c867f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


