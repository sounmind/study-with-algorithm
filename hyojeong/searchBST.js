var searchBST = function(root, val) {    
  while(root) {
    if (root.val < val) {
      root = root.right;
    } else if (root.val > val) {
      root = root.left;
    } else {
      return root;
    }
  }
  return null;
};
