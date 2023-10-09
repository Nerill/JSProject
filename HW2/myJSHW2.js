// 1. Задача про обчислення різниці часу.
function durationBetweenDates(strDateString = '01 Dec 2012', endDateString = '31 Dec 2012', dimension = 'seconds'){
    let strDate = new Date(strDateString);
    let endDate = new Date(endDateString);
    switch (dimension){
        case 'days':
            return Math.abs((endDate - strDate)/(1000*60*60*24));

        case 'hours':
            return Math.abs((endDate - strDate)/(1000*60*60));

        case 'minutes':
            return Math.abs((endDate - strDate)/(1000*60));

        case 'seconds':
            return Math.abs((endDate - strDate)/1000);
    }
}

// 2. Задача про перетворення об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
    
    function optimizer(data) {
        return Object.keys(data).reduce((accumulator, key) => {
        accumulator[key.toLowerCase()] = Number(data[key]).toFixed(2);
        return accumulator;
      }, {});
    };
    
    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}


// 3. Задача про рекурсію
function recursiveOddSumTo(number) {
    if(number===1)
        return 1;
    if(number%2){
        return number + recursiveOddSumTo(number-1);
    }
    else{
        return recursiveOddSumTo(number-1);
    }
};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

// 4. Задача про ітерацію
function iterativeOddSumTo(number) {
    let count = 0;
    for(let idx = 0; idx<number;idx++){
        if(number===1)
            return 1;
        if(idx%2){
            count += idx;
        }
    }
    return count;
};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25

