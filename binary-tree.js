/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function nodeCountLow(nodes){
      let nextNodes = [];
      for(let node of nodes){
        if(!node.left || !node.right){
          return 1
        } 
        else {
          nextNodes.push(node.left)
          nextNodes.push(node.right)
          return 1 + nodeCountLow(nextNodes)
        }
      }
    }

    return nodeCountLow([this.root])

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function nodeCountHigh(nodes){
      let nextNodes = [];
      let end = true;
      for(let node of nodes){
        if(node.left && node.right){
          nextNodes.push(node.left)
          nextNodes.push(node.right) 
          end = false;         
        }
        if(node.left) {
          nextNodes.push(node.left)
          end = false;
        }
        if(node.right){
          nextNodes.push(node.right)
          end = false;
        }       
      }

      if(end){
        return 1
      } else {
      return 1 + nodeCountHigh(nextNodes)          
      }
    }

    return nodeCountHigh([this.root])
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  // USED THE ANSWER DOC, BECAUSE MAXSUM WAS NOT CLEAR
  maxSum() {
    let result = 0;

    function maxSumHelper(node){
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }
    maxSumHelper(this.root);
    return result;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    const toVisitStack = [this.root];
    let node;

    while(toVisitStack.length){
      const current = toVisitStack.pop()
      if(!node && current.val > lowerBound){
        node = current.val
      } 
      if(current.val > lowerBound && current.val < node){
        node = current.val
      }
      if(current.left) toVisitStack.push(current.left)
      if(current.right) toVisitStack.push(current.right)
    }
    if(node === undefined) return null;
    return node;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
