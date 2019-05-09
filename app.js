/* eslint-disable require-jsdoc */
/*  Here should be all app logick about change (worker/generator) behavior.
*   Observ generator key statment on DB.
*   And resolve promises from redis.
*/
const {Redis} = require('./lib/redis.js');
const Message = require('./lib/message.js');
const r = new Redis();

class App {
  constructor(startType) {
    this.startType = startType;
  }

  start(param) {
    for (let i = 1; i <= param; i++) {
      this.startType(i);
    }
  }
}

/**
     * When the state changes, does it affect the rendered appearance?
     * @param {String} text add in a return message.
     * @return {String} Message.
     */
function generatorStrategy(text) {
  let i = Message.getMessage();
  return (r.set(i));
}

function workerStrategy(_params) {

  // Redis.get();
  // Redis.set();
}

function errorWorkerStrategy(_params) {
  // Redis.get();
  // Redis.set();
}

exports.App = App;
exports.generatorStrategy = generatorStrategy;
