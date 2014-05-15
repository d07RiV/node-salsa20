module.exports = function(){
    return new _Salsa20();
};

function _Salsa20(){    
    var self = this;

    function R(a, b){return (((a) << (b)) | ((a) >>> (32 - (b))));};
    function wordSpecification(ina){
        var i, ret = new Uint32Array(16);
        var x = new Uint32Array(16);
        for (i=0; i<16; ++i) x[i] = ina[i];
        for (i=20; i>0; i-=2){
            x[ 4] ^= R(x[ 0]+x[12], 7);  x[ 8] ^= R(x[ 4]+x[ 0], 9);
            x[12] ^= R(x[ 8]+x[ 4],13);  x[ 0] ^= R(x[12]+x[ 8],18);
            x[ 9] ^= R(x[ 5]+x[ 1], 7);  x[13] ^= R(x[ 9]+x[ 5], 9);
            x[ 1] ^= R(x[13]+x[ 9],13);  x[ 5] ^= R(x[ 1]+x[13],18);
            x[14] ^= R(x[10]+x[ 6], 7);  x[ 2] ^= R(x[14]+x[10], 9);
            x[ 6] ^= R(x[ 2]+x[14],13);  x[10] ^= R(x[ 6]+x[ 2],18);
            x[ 3] ^= R(x[15]+x[11], 7);  x[ 7] ^= R(x[ 3]+x[15], 9);
            x[11] ^= R(x[ 7]+x[ 3],13);  x[15] ^= R(x[11]+x[ 7],18);
            x[ 1] ^= R(x[ 0]+x[ 3], 7);  x[ 2] ^= R(x[ 1]+x[ 0], 9);
            x[ 3] ^= R(x[ 2]+x[ 1],13);  x[ 0] ^= R(x[ 3]+x[ 2],18);
            x[ 6] ^= R(x[ 5]+x[ 4], 7);  x[ 7] ^= R(x[ 6]+x[ 5], 9);
            x[ 4] ^= R(x[ 7]+x[ 6],13);  x[ 5] ^= R(x[ 4]+x[ 7],18);
            x[11] ^= R(x[10]+x[ 9], 7);  x[ 8] ^= R(x[11]+x[10], 9);
            x[ 9] ^= R(x[ 8]+x[11],13);  x[10] ^= R(x[ 9]+x[ 8],18);
            x[12] ^= R(x[15]+x[14], 7);  x[13] ^= R(x[12]+x[15], 9);
            x[14] ^= R(x[13]+x[12],13);  x[15] ^= R(x[14]+x[13],18);
        };
        for(i=0; i<16; ++i) ret[i] = (x[i] + ina[i]);
        return ret;
    };

    //////////////////////////////////////////////////////////////////////

    var key = new Uint32Array(),
        nonce = new Uint32Array(2),
        counter = new Uint32Array(2),
        blockUsed = 64,
        block = [];

    function _salsa20(key, nonce, counter){
        
    };

    function _reset(){
        counter[0] = 0;
        counter[1] = 0;
        blockUsed = 64;
    };

    function _counterInc(){
        counter[0] += 1;
        if(0 == counter[0]) counter[1] += 1;
    };

    //////////////////////////////////////////////////////////////////////

    this.key = function(bufKey){
        // buffer typed bufKey, first 32 bytes will be used.

    };

    return this;
};

new _Salsa20();
