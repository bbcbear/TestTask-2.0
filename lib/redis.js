/*  Module for DB interaction.
*   Have Get and Set methods that return promises.
*/
const redis = require('redis');
const {promisify} = require('util');
let client;
let getAsync;

class Redis {
  constructor(addres, port) {
    this.client = redis.createClient();
    this.getAsync = promisify(client.get).bind(client); // Redis promisification
    this.setAsync = promisify(client.set).bind(client); //
  }

  get(key) {
    return responsePromis = getAsync(key);
  }

  set(key, value, timeout) {
    return responsePromis = setAsync(key, value, timeout);
  }
}
module.exports.redis = Redis;
