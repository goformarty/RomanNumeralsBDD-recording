(function () {
  'use strict';

  describe('Roman Numerals', function () {
    describe('converts arabic to roman', function () {
      it('converts 1 to "I"', function () {
        expect(romanConverter(1)).toBe("I");
      });
      it('converts 2 to "II"', function () {
        expect(romanConverter(2)).toBe("II");
      });
      it('converts 3 to "III"', function () {
        expect(romanConverter(3)).toBe("III");
      });
      it('converts 4 to "IV"', function () {
        expect(romanConverter(4)).toBe("IV");
      });
      it('converts 5 to "V"', function () {
        expect(romanConverter(5)).toBe("V");
      });
      it('converts 6 to "VI"', function () {
        expect(romanConverter(6)).toBe("VI");
      });
      it('converts 10 to "X"', function () {
        expect(romanConverter(10)).toBe("X");
      });
      it('converts 157 to "CLVII"', function () {
        expect(romanConverter(157)).toBe("CLVII");
      });
    });
  });
})();
