class NodeForest{
    static instance;
    nodeForest = {}

    constructor(){
        if(!UserDb.instance) {
            UserDb.instance = this;
        }
        return UserDb.instance;
    }

    getNode(nodeId){
        return this.nodeForest[nodeId];
    }

    insertNode(newNode){
        let nodeId = Math.floor(Date.now() / 1000);
        this.nodeForest[nodeId] = newNode;
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