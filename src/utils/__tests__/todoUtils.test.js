import { getLastId } from '../todoUtils';

describe('todoUtils', () => {
  
  describe('#getLastId()', () => {
    
    it('should return 0 if empty array is sent', () => {
      expect(getLastId([])).toEqual(0);
    });
  
    it('should return biggest integer as id from list', () => {
      expect(getLastId([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqual(3);
      // never less then zero is returned (zero is base comparison value)
      expect(getLastId([{ id: -1 }, { id: -2 }, { id: -3 }, { id: -4 }])).toEqual(0);
      expect(getLastId([{ id: 12 }, { id: -317 }, { id: 333 }, { id: 0 }, { id: 1000000 }])).toEqual(1000000);
    })

  });

});