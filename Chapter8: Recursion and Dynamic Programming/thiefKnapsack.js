// Knapsack

// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
// The Thief can't pick the same item twice.

// What is the maximum worth of goods that the thief can steal?

function thiefsknapsack(startIndex, noOfItems,capacity , valueArray, weightArray){
  
  if(startIndex >= noOfItems)
    return 0;
  
  if(weightArray[startIndex] >capacity){
    return thiefsknapsack(startIndex+1, noOfItems,capacity, valueArray, weightArray);
  }
  
  var totalValueIfThisIsNotPicked = thiefsknapsack(startIndex+1, noOfItems,capacity,  valueArray, weightArray);
  var totalValueIfThisIsPicked = valueArray[startIndex] + thiefsknapsack(startIndex+1, noOfItems,capacity - weightArray[startIndex],  valueArray, weightArray);
  
  console.log(Math.max(totalValueIfThisIsNotPicked, totalValueIfThisIsPicked))
  return Math.max(totalValueIfThisIsNotPicked, totalValueIfThisIsPicked);
}

function thiefsknapsackDP(startIndex, noOfItems,capacity , valueArray, weightArray ,results){
  
  if(startIndex >= noOfItems)
    return 0;
    
  if(results === undefined)
    results = [];
    
  if(results[startIndex] === undefined)
    results[startIndex] = [];
  
  if(weightArray[startIndex] >capacity){
    if(results[startIndex][capacity] === undefined)
      results[startIndex][capacity]= thiefsknapsack(startIndex+1, noOfItems,capacity, valueArray, weightArray);
    return results[startIndex][capacity];
  }
  
  if(results[startIndex][capacity] === undefined){
    var totalValueIfThisIsNotPicked = thiefsknapsack(startIndex+1, noOfItems,capacity,  valueArray, weightArray);
    var totalValueIfThisIsPicked = valueArray[startIndex] + thiefsknapsack(startIndex+1, noOfItems,capacity - weightArray[startIndex],  valueArray, weightArray);
  
  results[startIndex][capacity]= Math.max(totalValueIfThisIsNotPicked, totalValueIfThisIsPicked);
  }

  console.log(results[startIndex][capacity]);
  return results[startIndex][capacity];
}

function thiefsknapsackIteration(noOfItems,capacity,valueArray, weightArray){
  var results = [];
  for ( var i = 0; i < valueArray.length ; i++){
    results[i] = [];
    for (var j = 0;j<= capacity;j++){
      if(weightArray[i] > j){
        results[i][j] = checkIfExists(results , i - 1 , j);
      } else {
        results[i][j] = Math.max(checkIfExists(results, i - 1 , j), valueArray[i] + checkIfExists(results , i - 1, j- weightArray[i] ));
      }
    }
  }
  console.log(results[noOfItems-1][capacity])
  return results[noOfItems-1][capacity];
}

function checkIfExists(array , i , j){
  if(array !==undefined && array[i] !==undefined && array[i][j] !==undefined) {
    return array[i][j];
  }
  else {
    return 0;
  }
}

var valueArray = [1, 4, 5, 7];
var weightArray = [1, 3, 4, 5];
var noOfItems = 4;
var capacity = 7;
var startIndex = 0;
var results = [];

thiefsknapsack(startIndex, noOfItems,capacity , valueArray, weightArray)
// thiefsknapsackDP(startIndex, noOfItems,capacity , valueArray, weightArray ,results)
// thiefsknapsackIteration(noOfItems, capacity, valueArray, weightArray);