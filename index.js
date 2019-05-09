// here should be the code that starts the node server.
const {App, generatorStrategy} = require('./app');
const i = new App(generatorStrategy);

i.start(20);
