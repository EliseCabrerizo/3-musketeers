const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      expect(starWars.all).toBeType("array")
    });

    test('should contain `Luke Skywalker`', () => {
      expect(starWars.all).toEqual(expect.arrayContaining(['Luke Skywalker']))
    });

    test('should not contain `Ben Quadinaros`', () => {
      expect(starWars.all).toEqual(expect.not.stringContaining('Ben Quadinaros'))
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      expect(starWars.all).toEqual(expect.arrayContaining([starWars.random()]))
    });

    test('should return an array of random items if passed a number', () => {
      expect(starWars.random(4)).toHaveLength(4);
    });
  });
});
