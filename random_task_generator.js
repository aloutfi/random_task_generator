// What are some tasks I should do around the house?

var tasks = [
'Pick up dog shit', 
'clean my shit from the toilet',
'clear off coffee table',
'clear backroom table',
'vacuum bedroom',
'laundry',
'vacuum living room and kitchen',
'clean fixtures in bathroom',
'clean the shame corner',
'play with merlin. Lucky you!',
'do couch pillows',
'do the dishes'
];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var my_task = tasks[getRandomInt(tasks.length)];

console.log(my_task)