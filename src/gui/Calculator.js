/* global document */
/* global NodeForest */

import NodeForest from "../backend/NodeForest";

async function getTreeText() {
    const numTrees = await NodeForest.treeCount();
    if (numTrees === 1) {
        const root = await NodeForest.getFirstTree();
        if (root !== null) {
            return root.getText();
        }
    }
    return "invalid";
}
