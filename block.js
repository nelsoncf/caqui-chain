class Block {
    constructor(timestamp, lasthash, hash, data) {
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block - 
            Timestamp: ${this.timestamp}
            Lasthash : ${this.lasthash.substring(0,10)}
            Hash     : ${this.hash.substring(0,10)}
            Data     : ${this.data}
        `
    }

    static genesis(){
        return new this('The Beginning of the Caqui',  '----', 'f1r57-h', []);
    }

    static mineBlock(lastblock, data){
        const timestamp = Date.now();
        const lastHash = lastblock.hash;
        const hash = 'hue';
        
        return new this(timestamp, lastHash, hash, data);

    }

}

module.exports = Block;
