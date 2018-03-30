const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), 'Caqui');
console.log(fooBlock.toString());
