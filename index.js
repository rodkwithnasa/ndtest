// index.js

import moment from 'moment';
import status from 'statuses';
import htmlUrl from './index.html';
import './css/reset.css';
import './css/main.css';

console.log("Hello from Javascript! Latest");
console.log(moment().startOf('day').fromNow());
console.log("HTML is available at:",htmlUrl); 

var name="Howard", time = "today";
var code=status('forbidden');
var msg=status[404];
console.log(`Hello ${name}, how are you doing: ${time}?!!!`);
console.log(`Errorcode is ${code}, errormsg is ${msg}.!?!` );

