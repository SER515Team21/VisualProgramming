/**
 * This is an implementation of a Node Forest, which represents all node trees
 * currently in the editor.
 *
 * @date 9/25/2019
 */

class NodeForest {

    constructor() {
        if (!NodeForest.instance) {
            NodeForest.instance = this;
            NodeForest.treeCount = 0;
            this.nodeForest = {};
        }
        return NodeForest.instance;
    }

    getNode(nodeId, nodeRootId){
        return this.getNodeFromRoot(this.nodeForest[nodeRootId]);
    }

    insertRootNode(newNode){
        //To insert node into a tree, please use Get function to get the node, then set the operand correctly.
        this.nodeForest[NodeForest.treeCount] = newNode;
        return NodeForest.treeCount++;
    }

    updateRootNode(newNode, oldId){
        this.nodeForest[oldId] = newNode;
        return oldId;
    }

    deleteRootNode(nodeId){
        delete this.nodeForest[nodeId];
    }

    getNodeLitteralValues(node){
        let nodeStack = [node];
        let valuesStack = [];
        let valuesInOrder = [];
        while(nodeStack.length != 0) {
            let currentNode = stack.pop();
            //Unary operator case
            if (currentNode.operand !== null) {
                nodeStack.push(currentNode.operand);
                valuesStack.push(currentNode.operator);
            }
            // Binary operator case
            else if (currentNode.leftOperand != null && currentNode.rightOperand !== null) {
                nodeStack.push(currentNode.rightOperand);
                nodeStack.push(currentNode.leftOperand);
                valuesStack.push(currentNode.operator);
            }
            // Number node
            else if (currentNode.number != null) {
                valuesInOrder.push(currentNode.number);
                if(valuesStack.length!= 0) {
                    valuesInOrder.push(valuesStack.pop());
                }
            }
            //One of the nodes has a null operand
            else{
                return null;
            }
        }
        return valuesStack;
    }

    getNodeFromRoot(rootNode, nodeId){
        let stack = [rootNode];
        while(stack.length != 0) {
            let currentNode = stack.pop();
            //Found it!
            if(currentNode.nodeId === nodeId){
                return currentNode;
            }
            //Unary operator case
            if (currentNode.operand !== null) {
                stack.push(currentNode.operand);
            }
            // Binary operator case
            else if (currentNode.leftOperand != null || currentNode.rightOperand !== null) {
                stack.push(currentNode.rightOperand);
                stack.push(currentNode.leftOperand);
            }
            // Number node
            else if (currentNode.number != null) {
                //Nothing else to do!
            }
        }
    }
}

module.exports = new NodeForest();