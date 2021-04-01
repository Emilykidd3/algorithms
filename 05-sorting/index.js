const Benchmark = require('benchmark');
const { bubbleSort } = require('./bubble-sort.js');
const { quickSort } = require('./quick-sort');

const numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers.push(Math.floor(Math.random()*1000) + 1);
}

const suite = new Benchmark.Suite;

suite
    .add('bubble sort', function() {
        const testArray = [...numbers];
        bubbleSort(testArray);
    })
    .add('quick sort', function() {
        const testArray = [...numbers];
        quickSort(testArray);
    })
    .add('js sort', function() {
        const testArray = [...numbers];
        testArray.sort((a, b) => {
            return a - b;
        })
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
    })
    .run();