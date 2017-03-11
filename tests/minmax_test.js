

  'use strict';
   var findMinMax = require('../app/index').findMinMax;
  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });
      it('should return [-4, 20] for [-4, 20]', function () {
        expect(findMinMax([-4, 20])).toEqual([-4, 20]);
      });

       it('should return [30, 90] for [39, 56, 58, 74, 80, 90]', function () {
        expect(findMinMax([30, 56, 58, 74, 80, 90])).toEqual([30, 90]);
      });

       it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });
      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
        it('should return [1, 74] for [1, 56, 10, 74, 7, 58]', function () {
        expect(findMinMax([1, 56, 10, 74, 7, 58])).toEqual([1, 74]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
     
      it('should return [100] for [100, 100, 100, 100]', function () {
        expect(findMinMax([100, 100, 100, 100])).toEqual([100]);
      });


      it('should return [6] for [6, 6, 6, 6]', function () {
        expect(findMinMax([6, 6, 6, 6])).toEqual([6]);
      });
    });

  });

