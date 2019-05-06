/*  Module for DB interaction.
*   Have Get and Set methods that return promises.
*/
const   redis = require('redis');
const   {promisify} = require('util');
const   client;
const   getAsync;

class Redis{

    constructor (addres, port){
        this.client = redis.createClient();
        this.getAsync = promisify(client.get).bind(client);
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
module.exports = [Redis, get, set];