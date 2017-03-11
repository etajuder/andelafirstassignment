
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
  },

  aritGeo:function(arr){
    var is_arit = false;
    var is_geo = false;
    var diff = arr[1] - arr[0];
    var ratio = arr[1] / arr[0];
    if(arr.length !== 0){
    for(var i = 2; i <= arr.length; i++){

        if(arr[i] - arr[i-1] === diff){
          ís_arit = true;
          return "Arithmetic";

  } else if(arr[i] / arr[i-1] === ratio){
    is_geo = true;
    return "Geometric";

  } else if(!is_arit && !is_geo){
    return -1;
  }
  }
}else{
  return 0;
}

}
}