/*  Here should be all app logick about change (worker/generator) behavior.
*   Observ generator key statment on DB.
*   And resolve promises from redis.
*/
// const Redis = require('./lib/redis.js');
const Message = require('./lib/message.js');
class App {
  constructor(startType) {
    this.startType = startType;
  }

  start(param) {
    for (let i = 1; i <= param; i++) {
      console.log(this.startType(i));
    }
  }
}

function generatorStrategy(_params) {
  return ('Message : ' + Message.getMessage());
  // Redis.set(Message.getMessage());
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
