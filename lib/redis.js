/* eslint-disable require-jsdoc */
/*  Module for DB interaction.
*   Have Get and Set methods that return promises.
*/
const redis = require('redis');
const {promisify} = require('util');

class Redis {
  constructor(URI) {
    this.options = this.parseRedisURI(URI || process.env.REDIS_URL);
    this.client = redis.createClient(this.options.port, this.options.host);
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
  }

  parseRedisURI(URI) {
    const options = {};
    const uri = require('url').parse(URI || 'redis://localhost:6379/0');

    if (uri.protocol === 'redis:') {
      if (uri.auth) {
        const passparts = uri.auth.split(':');
        options.pass = passparts[0];
      }

      options.host = uri.hostname || 'localhost';
      options.port = uri.port || 6379;
      options.cache = true;

      if (uri.pathname) {
        options.db = uri.pathname.replace('/', '', 1);
      } else options.db = 0;
    }
    return options;
  }


  get(key) {
    return this.getAsync(key);
  }

  set(key, value, timeout = 10) {
    const i = [key, value];
    if (timeout > 0) i.push('EX', timeout);
    return this.setAsync(i);
  }
  quit() {
    this.client.quit();
  }
}
exports.Redis = Redis;
