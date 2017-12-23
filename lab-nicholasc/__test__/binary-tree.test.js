'use strict';

const BinaryTree = require('../lib/binary-tree');


describe('/lib/binary-tree', () => {

  let mockSpecificBinaryTree = new BinaryTree(10);
  mockSpecificBinaryTree.appendToHook(9, 10);
  mockSpecificBinaryTree.appendToHook(8, 9);
  mockSpecificBinaryTree.appendToHook(7, 8);
  mockSpecificBinaryTree.appendToHook(6, 9);
  mockSpecificBinaryTree.appendToHook(5, 8);
  mockSpecificBinaryTree.appendToHook(4, 5);
  mockSpecificBinaryTree.appendToHook(3, 4);

  let mockRandomBinaryTree = new BinaryTree(10);
  mockRandomBinaryTree.append(9);
  mockRandomBinaryTree.append(8);
  mockRandomBinaryTree.append(7);
  mockRandomBinaryTree.append(6);
  mockRandomBinaryTree.append(5);
  mockRandomBinaryTree.append(4);
  mockRandomBinaryTree.append(3);
  mockRandomBinaryTree.append(2);
  mockRandomBinaryTree.append(1);
  mockRandomBinaryTree.append(0);

  let notATree = new BinaryTree(10);
  notATree.value = null;

  describe('Binary Tree', () => {
    test('appendToHook', () => {
      let mockTree = new BinaryTree(10);
      mockTree.appendToHook(9, 10);
      mockTree.appendToHook(8, 9);
      mockTree.appendToHook(7, 9);
      expect(mockTree.left.value).toEqual(9);
    });

    describe('inOrderFind', () => {
      test('Specific Tree', () => {
        expect(mockSpecificBinaryTree.inOrderFind(3).value).toEqual(3);
      });
      test('Random Tree', () => {
        expect(mockRandomBinaryTree.inOrderFind(3).value).toEqual(3);
      });
      test('Not in Tree', () => {
        expect(mockRandomBinaryTree.inOrderFind(70)).toEqual(null);
      });
    });

    describe('preOrderToString', () => {
      test('specific Tree', () => {
        expect(mockSpecificBinaryTree.preOrderToString()).toEqual(`10\n9\n8\n7\n5\n4\n3\n6`);
      });
      test('random Tree', () => {
        expect(mockRandomBinaryTree.preOrderToString().includes(10)).toBeTruthy();
        expect(mockRandomBinaryTree.preOrderToString().includes(9)).toBeTruthy();
        expect(mockRandomBinaryTree.preOrderToString().includes(8)).toBeTruthy();
        expect(mockRandomBinaryTree.preOrderToString().includes(7)).toBeTruthy();
        expect(mockRandomBinaryTree.preOrderToString().includes(6)).toBeTruthy();
        expect(mockRandomBinaryTree.preOrderToString().includes(5)).toBeTruthy();
        expect(mockRandomBinaryTree.preOrderToString().includes(4)).toBeTruthy();
        expect(mockRandomBinaryTree.preOrderToString().includes(3)).toBeTruthy();
      });
      test('not A Tree', () => {
        expect(notATree.preOrderToString()).toEqual(null);
      });
    });

    describe('postOrderToString', () => {
      test('specific Tree', () => {
        expect(mockSpecificBinaryTree.postOrderToArray()).toEqual([7, 3, 4, 5, 8, 6, 9, 10]);
      });
      test('random Tree', () => {
        expect(mockRandomBinaryTree.postOrderToArray().includes(10)).toBeTruthy();
        expect(mockRandomBinaryTree.postOrderToArray().includes(9)).toBeTruthy();
        expect(mockRandomBinaryTree.postOrderToArray().includes(8)).toBeTruthy();
        expect(mockRandomBinaryTree.postOrderToArray().includes(7)).toBeTruthy();
        expect(mockRandomBinaryTree.postOrderToArray().includes(6)).toBeTruthy();
        expect(mockRandomBinaryTree.postOrderToArray().includes(5)).toBeTruthy();
        expect(mockRandomBinaryTree.postOrderToArray().includes(4)).toBeTruthy();
        expect(mockRandomBinaryTree.postOrderToArray().includes(3)).toBeTruthy();
        expect(mockRandomBinaryTree.postOrderToArray().includes(2)).toBeTruthy();
      });
      test('not A Tree', () => {
        expect(notATree.postOrderToArray()).toEqual([null]);
      });

    });
  });
});
