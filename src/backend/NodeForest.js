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
        return this.getNodeFromParent(this.nodeForest[nodeRootId]);
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

    deleteNode(nodeId) {
        delete this.nodeForest[nodeId];
    }

    deleteRootNode(nodeId){
        delete this.nodeForest[nodeId];
    }

    getNodeFromParent(parentNode, nodeId){
        let stack = [parentNode];
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
