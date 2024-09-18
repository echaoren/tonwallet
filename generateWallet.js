const TonWeb = require('tonweb');
const nacl = TonWeb.utils.nacl;

async function generateWallet(walletCount = 1) {
  try {
    const wallets = [];
    for (let i = 0; i < walletCount; i++) {
      const keyPair = nacl.sign.keyPair();
      const publicKey = TonWeb.utils.bytesToHex(keyPair.publicKey);
      const secretKey = TonWeb.utils.bytesToHex(keyPair.secretKey);
      wallets.push({ publicKey, secretKey });
    }
    console.log('钱包生成成功:', wallets);
  } catch (error) {
    console.error('生成钱包时出错:', error);
  }
}

generateWallet(20); // 生成 20 个钱包