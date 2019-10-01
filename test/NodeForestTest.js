const NodeForest = require("../src/backend/NodeForest.js");
const Operators = require("../src/backend/Operators.js");
const NumberNode = require("../src/backend/NumberNode.js");

// addition node
const addNode = new Operators.Addition(new NumberNode("4"), new NumberNode("2"));
const addId = addNode.nodeId;
// Parans Node (not yet implemented)
wait = new Date(new Date().getTime() + 500);
while(wait > new Date()){}
// Multiplication Node
const multiNode = new Operators.Multiplication(new NumberNode("3"), addNode);
const multiId = multiNode.nodeId;
wait = new Date(new Date().getTime() + 500);
while(wait > new Date()){}
// Final (Addition) Node

const rootNode = new Operators.Addition(new NumberNode("1"), multiNode);
const rootId = rootNode.nodeId;

NodeForest.insertRootNode(rootNode);

const foundNode = NodeForest.getNode(addId, rootId);

console.log(foundNode);