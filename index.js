// here should be the code that starts the node server.
const {App, generatorStrategy, workerStrategy} = require('./app');
const i = new App(workerStrategy);

i.start(10);
