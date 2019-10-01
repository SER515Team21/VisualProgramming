/*
 * This file provides functions for creating nodes on the backend and returning their IDs
 * to the gui.
 */

const Operators = require("./Operators.js");
const NodeForest = require("./NodeForest.js");

const operatorMap = {
    addition: Operators.Addition,
    subtraction: Operators.Subtraction,
    multiplication: Operators.Multiplication,
    division: Operators.Division
};

class NodeFactory {

    static createNode(classList, isRoot) {
        const keys = Object.keys(operatorMap);

        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];
            if (classList.contains(key)) {
                const newNode = new operatorMap[key]();
                if (isRoot) {
                    NodeForest.insertRootNode(newNode);
                }
                return newNode.nodeId;
            }
        }
        return null;
    }
}

module.exports = NodeFactory;
