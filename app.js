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
     */
function generatorStrategy(text) {
  // return
  r.set(text, text).then((response)=>{
    console.log(response);
  }, (error)=>{
    console.error(error);
  });
}

function workerStrategy(text) {
  // Redis.set();
  r.set(text, text).then((response)=>{
    console.log(response);
  }, (error)=>{
    console.error(error);
  });
  // Redis.get();
  r.get(text).then((response)=>{
    console.log(response);
  }, (error)=>{
    console.error(error);
  });
}

function errorWorkerStrategy(_params) {
  // Redis.get();
  // Redis.set();
}

exports.App = App;
exports.generatorStrategy = generatorStrategy;
exports.workerStrategy = workerStrategy;
