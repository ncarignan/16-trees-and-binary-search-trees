'use strict';

const KAryTree = require('../lib/k-ary-tree');


describe('/lib/K-ary-tree', () => {

  let mockKary = new KAryTree(1);
  let two = new KAryTree(2);
  let three = new KAryTree(3);
  let four = new KAryTree(4);
  let five = new KAryTree(5);
  let six = new KAryTree(6);
  let seven = new KAryTree(7);
  let eight = new KAryTree(8);

  mockKary.appendChild(two);
  mockKary.appendChild(three);
  mockKary.appendChild(four);
  three.appendChild(five);
  three.appendChild(six);
  three.appendChild(seven);
  six.appendChild(eight);

  console.log(mockKary.toString());
  console.log(mockKary.toArray());

  let notATree = new KAryTree(10);
  notATree.value = null;

  describe('K-Ary Tree', () => {
    test('toArray', () => {
      expect(mockKary.toArray()).toEqual(' 8  9  10  11  12  15 ');
      mockKary.remove(12);
      expect(mockKary.toString()).toEqual(' 8  9  10  11  15 ');
    });

  });
});
