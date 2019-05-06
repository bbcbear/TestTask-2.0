/*  Here should be all app logick about change (worker/generator) behavior. 
*   Observ generator key statment on DB.
*   And resolve promises from redis.  
*/
const Redis = require('./lib/redis.js'),
      Message = require('./lib/message.js')

class App{

    constructor (startType){
        this.startType = startType;
    }
    
    start(){
        return this.startType();
    }

}

    function generatorStrategy(params) {
        Redis.set(Message.getMessage());
    }

    function workerStrategy(params) {
        Redis.get();
        Redis.set();
    }

    function errorWorkerStrategy(params) {
        Redis.get();
        Redis.set();
    }

module.exports = [App, generatorStrategy, workerStrategy, errorWorkerStrategy];