function deleteNode() {
    console.log('hei');
    var treeData = getTreeData();
    if (!isBST(treeData)) {
        alert("This is not a Binary Search Tree!");
        return;
    }
    console.log('error 2');
    var nodeToDelete = prompt("Enter the value of the node to delete:");
    if (nodeToDelete === null) return;

    nodeToDelete = parseInt(nodeToDelete);

    if (isNaN(nodeToDelete)) {
        alert("Invalid input. Please enter a number.");
        return;
    }

    var bst = convertToBST(treeData);
    
    bst.root = bstDeleteNode(bst.root, nodeToDelete);

    updateVisualization(bst);
}

function isBST(treeData) 
{

    function isBSTUtil(node, min, max) {
        if (node === null) return true;

        if (node.value < min || node.value > max) return false;

        return (
            isBSTUtil(node.left, min, node.value - 1) &&
            isBSTUtil(node.right, node.value + 1, max)
        );
    }

    return isBSTUtil(treeData, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}


function bstDeleteNode(root, key)
{
    if (root === null) return root;

    if (key < root.value) {
        root.left = bstDeleteNode(root.left, key);
    } else if (key > root.value) {
        root.right = bstDeleteNode(root.right, key);
    } 
    else 
    {
        if (root.left === null) return root.right;
        else if (root.right === null) return root.left;

        root.value = minValue(root.right);

        root.right = bstDeleteNode(root.right, root.value);
    }
    return root;
}

function minValue(node) {
    var minv = node.value;
    while (node.left !== null) {
        minv = node.left.value;
        node = node.left;
    }
    return minv;
}
