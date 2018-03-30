const Block = require('./block');

describe('Block', () => {

    let data, lastBlock, block;

    beforeEach(() => {
        data = 'HUe';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('Sets the `data` to match data the input', () => {
        expect(block.data).toEqual(data);
    });

    it('Sets the `lastHash` to match the hash of the last input', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
});