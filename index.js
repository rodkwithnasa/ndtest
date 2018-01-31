// index.js

import moment from 'moment';
import status from 'statuses';

console.log("Hello from Javascript! Latest");
console.log(moment().startOf('day').fromNow());

var name="Howard", time = "today";
var code=status('forbidden');
var msg=status[404];
console.log(`Hello ${name}, how are you doing: ${time}?!!!`);
console.log(`Errorcode is ${code}, errormsg is ${msg}.!?` );

