'use strict';

const BST = require('../lib/search-tree');


describe('/lib/search-tree', () => {



  let notATree = new BST(10);
  notATree.value = null;

  describe('Binary Seatch Tree', () => {
    test('remove', () => {
      let mockBST = new BST(9);
      mockBST.insert(8);
      mockBST.insert(10);
      mockBST.insert(12);
      mockBST.insert(11);
      mockBST.insert(15);
      expect(mockBST.toString()).toEqual(' 8  9  10  11  12  15 ');
      mockBST.remove(12);
      expect(mockBST.toString()).toEqual(' 8  9  10  11  15 ');
    });
    test('remove from null', () => {
      let nullBST = new BST(9);
      nullBST.value = null;
      expect(nullBST.remove(9)).toThrow();
    });

  });
});
