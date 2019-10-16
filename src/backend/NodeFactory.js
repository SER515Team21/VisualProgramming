/*
 * This file provides functions for creating nodes on the backend and returning their IDs
 * to the gui.
 */

const Operators = require("./Operators.js");
const NodeForest = require("./NodeForest.js");
const NumberNode = require("./NumberNode.js");

const operatorMap = {
    addition: Operators.Addition,
    subtraction: Operators.Subtraction,
    multiplication: Operators.Multiplication,
    division: Operators.Division,
    number: NumberNode
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
                else {
                    NodeForest.insertNode(newNode);
                }
                return newNode.nodeId;
            }
        }
        return null;
    }

    static setChild(parentId, childId, operandKey) {
        const parent = NodeForest.getNode(parentId);
        const child = NodeForest.getNode(childId);
        parent.setOperand(operandKey, child);
    }
}

module.exports = NodeFactory;
