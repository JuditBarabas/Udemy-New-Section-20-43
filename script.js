const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}
function returnDay (num) {
    if(num < 1 || num > 7) {
        return null;
    }
    return days[num];
}

console.log('Test:');
console.log(returnDay(3));
console.log(returnDay(5));
console.log(returnDay(1));