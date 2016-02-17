var fizzBuzzRedux = function (num, word1, word2) {
  for (var i =1; i <= num; i = i + 1){
    if (i % 15 === 0){
      console.log(word1 + word2);
    }
    else if (i % 3 ===0){
        console.log(word1);
    }
    else if (i % 5 ===0){
        console.log(word2);
    }
    else {
      console.log(i)
    }
  }
}
