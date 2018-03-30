const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block - 
            Timestamp: ${this.timestamp}
            Lasthash : ${this.lastHash.substring(0, 10)}
            Hash     : ${this.hash.substring(0, 10)}
            Data     : ${this.data}`
    }

    static genesis() {
        return new this('The Beginning of the Caqui', '----', 'f1r57-h45h', []);
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);

    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

}

module.exports = Block;
