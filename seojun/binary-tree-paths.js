/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];

  const traverse = (node, path) => {
    if (!node) return;

    if (!node.left && !node.right) {
      paths.push([...path, node.val]);
      return;
    }

    traverse(node.left, [...path, node.val]);
    traverse(node.right, [...path, node.val]);
  }

  traverse(root, []);

  return paths.map(path => path.join("->"));
};
