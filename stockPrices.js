//write a function that takes in an array. pull the highest number and lowest number from said array. subtract low from high. output answer


function best(bestArr) {
    const highest = Math.max(...bestArr)
    const lowest = bestArr[0]
    let profit = highest - lowest
    console.log(profit)
    // if(profit <= 0) {
    //     console.log(0)
    // } this commented out code is not needed. it auto spits out zero
}

best([1,2,3,4,5])
best([0, 100])
best([2, 3, 10, 6, 4, 8, 1])
best([7, 9, 5, 6, 3, 2])
best([100,200,300,100])