class Redis{

    constructor (addres, port){

    }

    get = function(key){
        let promise = new Promise((resolve, reject) => {
            (false) ? resolve("result"): reject("reject");
        });
        return promise;
    }

    set = function(key, value, timeout){
        let promise = new Promise((resolve, reject) => {
            (false) ? resolve("result"): reject("reject");
        });
        return promise;
    }
}

module.exports = Redis;