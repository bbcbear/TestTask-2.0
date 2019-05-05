/*  Module for DB interaction.
*   Have Get and Set methods that return promises.
*/
class Redis{

    constructor (addres, port){

    }

    get(key){
        let promise = new Promise((resolve, reject) => {
            false ? resolve("result"): reject("reject");
        });
        return promise;
    }

    set(key, value, timeout){
        let promise = new Promise((resolve, reject) => {
            (false) ? resolve("result"): reject("reject");
        });
        return promise;
    }
}
module.exports = Redis;