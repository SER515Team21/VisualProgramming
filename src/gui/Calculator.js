/* global document */
/* global NodeForest */

import NodeForest from "../backend/NodeForest";

class Calculator {

    static async getTreeText() {
        const numTrees = await NodeForest.treeCount();
        if (numTrees === 1) {
            const root = await NodeForest.getFirstTree();
            if (root !== null) {
                return root.getText();
            }
        }
        return "invalid";
    }


    static async updateResult() {
        const text = await Calculator.getTreeText();
        const resultPane = document.getElementById("resultPane");
        resultPane.hidden = false;
        resultPane.innerHTML = `<a>${text}</a>`;
    }

}

module.exports = Calculator;
