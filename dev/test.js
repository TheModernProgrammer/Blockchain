const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(3253452, 'sdfgrds4rfd', 'fdsgfsxgdf');

bitcoin.createNewTransaction(100, 'ghGG6GYGY', 'FTYF6HIU');

bitcoin.createNewBlock(456, 'gfhjk', 'hgj');

bitcoin.createNewTransaction(101, 'gfhjhg', 'vhfdghjk');

bitcoin.createNewBlock(102, 'fghjkhj', 'ghjk');

bitcoin.createNewTransaction(101, 'gfhjhg', 'vhfdghjk');
bitcoin.createNewTransaction(101, 'gfhjhg', 'vhfdghjk');
bitcoin.createNewTransaction(101, 'gfhjhg', 'vhfdghjk');
bitcoin.createNewTransaction(101, 'gfhjhg', 'vhfdghjk');
bitcoin.createNewTransaction(101, 'gfhjhg', 'vhfdghjk');

//console.log(bitcoin);
console.log(bitcoin.getLastBlock());
console.log(bitcoin.createNewTransaction(101, 'gfhjhg', 'vhfdghjk'));