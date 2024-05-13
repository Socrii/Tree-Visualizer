let input;

function reset() {
  d3.selectAll('svg').remove();
}

function treeAndArray() {
  reset();
  let inputText = document.getElementById("array-input")
  document.querySelector('#visual-title').innerHTML = "Binary Tree And Array";
  document.querySelector('#instructions').innerHTML = "Click a value in the binary tree or array to highlight its corresponding location in the data structure.";
  if (inputText.value !== '') {
      input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
      createBinaryTreeAndArr(input)
  }
}

function getTreeData(root) 
{
  let treeData = [];
  function traverse(node) 
  {
      if (node === null) {
          return;
      }

      treeData.push(node.val);
      traverse(node.left);
      traverse(node.right);
  }
  traverse(root);
  return treeData;
}

function heapify() 
{
  reset();
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    makeHeap(input, input.length);
    createBinaryTreeAndArr(input);
    document.getElementById('instructions').innerHTML = "<p> Parent's value is always greater than or equal to the values of its children.</p>";
    document.getElementById('visual-title').innerHTML = "Max-Heap Binary Tree And Array";
  }
}

function createBinaryTreeAndArr(arr) {
  arrayContainer = createContainer("array-visual", arr, arr.length * 60, 100);
  let tree = new Tree()
  tree.createBinaryTree(input)
  createArray(arr, 2, 30, 50, 50);
}

function createBinarySearchTree() 
{
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    reset();
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    input.sort((a, b) => a - b);
    document.querySelector('#visual-title').innerHTML = "Binary Search Tree";
    document.querySelector('#instructions').innerHTML = "The input data sorted and arranged into a Binary Search Tree.";
    let tree = new Tree();
    tree.createBinarySearchTree(input)
  }
}
// function for bst deletion 
/*
function deleteNode() 
{
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
      reset(); 
      let input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
      let nodeToDelete = prompt("Enter the value of the node to delete:");
      if (nodeToDelete === null) return; 

      nodeToDelete = parseInt(nodeToDelete); 

      if (isNaN(nodeToDelete)) {
          alert("Invalid input. Please enter a number.");
          return;
      }

      let index = input.indexOf(nodeToDelete);
      if (index !== -1) {
          input.splice(index, 1);
      } else {
          alert("Node not found in the array.");
          return;
      }

      inputText.value = input.join(" ");

      let root = getRootOfBSTVisualization(); 
      let treeData = getTreeData(root);
      console.log("Tree data:", treeData);
  }
}*/

input = [10, 20, 60, 30, 70, 40, 50];
let inputTest = document.getElementById("array-input")
inputTest.value = input;
createBinaryTreeAndArr(input);
