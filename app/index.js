 exports.findMinMax = function (arr) {
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
};