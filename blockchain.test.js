const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', ()=>{
    let bc;

    beforeEach(() => {
        bc = new Blockchain();
    });

    it('deve começar com o bloco genesis', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adiciona um novo bloco', () => {
        const data = 'novo';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    })
})