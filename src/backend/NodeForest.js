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

    getNode(nodeId) {
        return this.nodeForest[nodeId];
    }

    insertNode(newNode) {
        this.nodeForest[NodeForest.treeCount] = newNode;
        return NodeForest.treeCount++;
    }

    updateNode(newNode, oldId) {
        this.nodeForest[oldId] = newNode;
        return oldId;
    }

    deleteNode(nodeId) {
        delete this.nodeForest[nodeId];
    }
}
