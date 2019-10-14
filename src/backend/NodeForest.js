/**
 * This is an implementation of a Node Forest, which represents all node trees
 * currently in the editor.
 *
 * @date 9/25/2019
 */

class NodeForest {
    static treeCount() {
        return Object.keys(NodeForest.nodeForest).length;
    }

    static getFirstTree() {
        if (this.treeCount() > 0) {
            return Object.values(NodeForest.nodeForest)[0];
        }
        return null;
    }

    static getNode(nodeId) {
        let newNode = null;
        let rootNodeId = 0;
        let treeCount = NodeForest.treeCount();
        do{
            NodeForest.getNodeFromRoot(NodeForest.nodeForest[rootNodeId], nodeId);
            rootNodeId++;
        }while(rootNodeId < treeCount && newNode == null);
    }

    static insertRootNode(newNode) {
        // To insert node into a tree, please use
        // Get function to get the node, then set the operand correctly.
        NodeForest.nodeForest[newNode.nodeId] = newNode;
        // console.log(`added node of type "${typeof newNode}" with ID ${newNode.nodeId}`);
    }

    static insertIntoBinaryNodeLeft(newNode, parentNodeId){
        let parentNode = this.getNode(parentNodeId);
        parentNode.setLeftOperand(newNode);
    }

    static insertIntoBinaryNodeRight(newNode, parentNodeId){
        let parentNode = this.getNode(parentNodeId);
        parentNode.setRightOperand(newNode);
    }

    static insertIntoUnaryNode(newNode, parentNodeId){
        let parentNode = this.getNode(parentNodeId);
        parentNode.setOperand(newNode);
    }

    static updateRootNode(newNode, oldId) {
        NodeForest.nodeForest[oldId] = newNode;
        return oldId;
    }

    static deleteRootNode(nodeId) {
        delete NodeForest.nodeForest[nodeId];
    }

    static getNodeFromRoot(rootNode, nodeId) {
        const stack = [rootNode];
        while (stack.length > 0) {
            const currentNode = stack.pop();
            // Found it!
            if (currentNode.nodeId === nodeId) {
                return currentNode;
            }
            // Unary operator case
            if (currentNode.operand != null) {
                stack.push(currentNode.operand);
            }
            // Binary operator case
            else if (currentNode.leftOperand != null || currentNode.rightOperand != null) {
                stack.push(currentNode.rightOperand);
                stack.push(currentNode.leftOperand);
            }
            // Number node
            else if (currentNode.number != null) {
                // Nothing else to do!
            }
        }
        // Node does not exist.
        return null;
    }
}
NodeForest.nodeForest = {};

module.exports = NodeForest;
