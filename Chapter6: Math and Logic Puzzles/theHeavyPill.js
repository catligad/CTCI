// You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once.

// Since I'm not given the exact type of input that I'm going to be recieving, I'm going to pseudocode what I would do:

// Make a pile that you will later weigh
// For the first bottle, add 1 pill to the pile. For the second bottle, add 2 pills to the pile, and so on.
// Theoretically, if you had pills of the same weight, you would have 210 grams.
  // This is by using N(N+1)/2 = the sum of 1 to n numbers
// Weigh the pile that you have, and subtract that number from 210
// The number that you get is the bottle that the pills are from