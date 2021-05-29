const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'hjsdhfjkdhsfudshi';
const currentBlockData = [
    {
        amount: 10,
        sender: 'bhjsdhbhkdsuig',
        recipient: 'jkahsfjdsah8'
    },
    {
        amount: 30,
        sender: 'ghjkhgjk',
        recipient: 'gfhjkkkjl'
    },
    {
        amount: 40,
        sender: 'ghjkl',
        recipient: 'hgbjnmjgfhjk'
    }
];

const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 180786));