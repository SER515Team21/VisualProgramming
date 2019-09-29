/**
 * This is an implementation of a Node Forest, which represents all node trees currently in the editor.
 *
 * @date 9/25/2019
 */

class NodeForest{
    static instance;
    static treeCount;
    static nodeForest;

    constructor(){
        if(!NodeForest.instance) {
            NodeForest.instance = this;
            NodeForest.treeCount = 0;
            NodeForest.nodeForest = {};
        }
        return NodeForest.instance;
    }

    getNode(nodeId){
        return NodeForest.nodeForest[nodeId];
    }

    insertNode(newNode){
        let nodeId = NodeForest.treeCount;
        NodeForest.nodeForest[NodeForest.treeCount] = newNode;
        NodeForest.treeCount ++;
        return nodeId;
    }

    updateNode(newNode, oldId){
        NodeForest.nodeForest[oldId] = newNode;
        return oldId;
    }

    deleteNode(nodeId){
        delete NodeForest.nodeForest[nodeId];
    }
}

module.exports = new NodeForest();
