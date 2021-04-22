const assertE = require('../LAssertE')
const head = require('../LHead')

assertE("Lighthouse Labs", "Bootcamp");
assertE(1, 12);
assertE("Lighthouse Labs", "Lighthouse Labs");
assertE(1, 1);


assertE(head([5,6,7]), 5);
assertE(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertE(head(), undefined);
assertE(head(["Hello"]), "Hello");