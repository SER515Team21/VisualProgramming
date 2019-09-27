/**
 * This is an implementation of a Node Forest, which represents all node trees currently in the editor.
 *
 * @date 9/25/2019
 */

class NodeForest{
    static instance;
    static treeCount = 0;
    nodeForest = {}

    constructor(){
        if(!NodeForest.instance) {
            NodeForest.instance = this;
        }
        return NodeForest.instance;
    }

    getNode(nodeId){
        return this.nodeForest[nodeId];
    }

    insertNode(newNode){
        let nodeId = NodeForest.treeCount
        this.nodeForest[NodeForest.treeCount] = newNode;
        NodeForest.treeCount ++;
        return nodeId;
    }

    updateNode(newNode, oldId){
        this.nodeForest[oldId] = newNode;
        return oldId;
    }

    deleteNode(nodeId){
        delete this.nodeForest[nodeId];
    }
}