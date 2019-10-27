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
        return "Invalid expression, please update and try again!";
    }

    static async solve() {
        const numTrees = await NodeForest.treeCount();
        if (numTrees === 1) {
            const root = await NodeForest.getFirstTree();
            if (root !== null) {
                try {
                    return root.reduce();
                }
                catch (e) {
                    return "Not Solvable";
                }
            }
        }
        return "Multiple Expressions";
    }


    static async updateResult() {
        const text = await Calculator.getTreeText();
        const resultPane = document.getElementById("resultPane");
        const equals = await Calculator.solve();
        resultPane.hidden = false;
        resultPane.innerHTML = `<span>${text} = ${equals}</span>`;
    }

}

module.exports = Calculator;
