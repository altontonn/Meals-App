function birthdayCakeCandles(candles) {
  // Write your code here
  let i;
  let max = 0;
  for(i = 1; i < candles.length; i++){
    if(candles[i] > max){
      max = max + 1;
    }
  }
  return max;
}
