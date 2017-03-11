
module.exports = {
  findMinMax: function(arr){
    var max = arr[0];
                var min = arr[0];
               arr.filter(function(value){
                 if(value >= max){
                      max = value;
                  }else if(value < min){
                      min = value;
                  }
               });
               if(min === max){
               return [min];
             }else{
              return [min,max];
             }
  },

  fizzBuzz:function(num){
     if((num % 5 === 0) && (num % 3 === 0)){
                   return "FizzBuzz";
               }else if (num % 3 === 0){
                   return "Fizz";
               }else if(num % 5 === 0){
                   return "Buzz";
               }else{
                   return num;
               }
  }
}