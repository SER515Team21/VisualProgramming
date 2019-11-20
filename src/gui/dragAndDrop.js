/**
 * Handles processing of drag and drop events for the mathematical Nodes
 */

// Global imports
/* global document */
/* global NodeForest */
/* global Calculator */
/* global Operators */
/* global NodeFactory */
/* global NumberNode */
/* global window */

/**
 * Sets data attribute to hold the id of the picked up HTML Node
 * @param event
 */
function pickUpNode(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function handlePanelNode(node, target, event) {
    const clone = node.cloneNode(true);
    clone.id = NodeFactory.createNode(clone.classList, false);
    const backendNode = NodeForest.getNode(clone.id);

    // Set the number to 0 on initial drop if number node
    if (node.classList.contains("number")) {
        NodeForest.getNode(clone.id).number = 0;
    }

    // Insert into a binary node
    if (target.id.toString().endsWith("Left")) {
        NodeForest.getNode(target.parentNode.id).setLeftOperand(backendNode);
    }
    else if (target.id.toString().endsWith("Right")) {
        NodeForest.getNode(target.parentNode.id).setRightOperand(backendNode);
    }
    target.appendChild(clone);
}

function handlePanelEquationPane(node, target, event) {
    const clone = node.cloneNode(true);
    clone.id = NodeFactory.createNode(clone.classList, true);

    target.appendChild(clone);
    clone.style.position = "absolute";
    const xPosParent = event.target.getBoundingClientRect().x +
        parseInt(window.getComputedStyle(target, null).getPropertyValue("padding-left"), 10);
    const yPosParent = event.target.getBoundingClientRect().y +
        parseInt(window.getComputedStyle(target, null).getPropertyValue("padding-top"), 10);
    console.log(event.pageY, yPosParent, event.pageY - yPosParent, "vs", event.target.getBoundingClientRect().y);
    clone.style.top = `${event.pageY - yPosParent}px`;
    clone.style.left = `${event.pageX - xPosParent}px`;
}

function handleRootNodeNode(node, target, event) {
    node.style.position = "absolute";
    node.style.top = "0px";
    node.style.left = "0px";

    const backendNode = NodeForest.getNode(node.id);
    NodeForest.deleteRootNode(node.id);

    node.parentNode.removeChild(node);

    // Insert into a binary node
    if (target.id.toString().endsWith("Left")) {
        NodeForest.getNode(target.parentNode.id).setLeftOperand(backendNode);
    }
    else if (target.id.toString().endsWith("Right")) {
        NodeForest.getNode(target.parentNode.id).setRightOperand(backendNode);
    }
    target.appendChild(node);
}

function handleRootNodeEquationPane(node, target, event) {
    const xPosParent = event.target.getBoundingClientRect().x +
        parseInt(window.getComputedStyle(target, null).getPropertyValue("padding-left"), 10);
    const yPosParent = event.target.getBoundingClientRect().y +
        parseInt(window.getComputedStyle(target, null).getPropertyValue("padding-top"), 10);
    node.style.top = `${event.pageY - yPosParent}px`;
    node.style.left = `${event.pageX - xPosParent}px`;
}

function handleChildNodeNode(node, target, event) {
    // Remove from binary operator
    if (target.id.toString().endsWith("Left")) {
        NodeForest.getNode(node.parentNode.parentNode.id).setLeftOperand(undefined);
    }
    else if (target.id.toString().endsWith("Right")) {
        NodeForest.getNode(node.parentNode.parentNode.id).setLeftOperand(undefined);
    }
    node.parentNode.removeChild(node);

    const backendNode = NodeForest.getNode(node.id);
    // Insert into a binary node
    if (target.id.toString().endsWith("Left")) {
        NodeForest.getNode(target.parentNode.id).setLeftOperand(backendNode);
    }
    else if (target.id.toString().endsWith("Right")) {
        NodeForest.getNode(target.parentNode.id).setRightOperand(backendNode);
    }
    target.appendChild(node);
}

function handleChildNodeEquationPane(node, target, event) {
    const backendNode = NodeForest.getNode(node.id);

    // Remove from binary operator
    if (target.id.toString().endsWith("Left")) {
        NodeForest.getNode(node.parentNode.parentNode.id).setLeftOperand(undefined);
    }
    else if (target.id.toString().endsWith("Right")) {
        NodeForest.getNode(node.parentNode.parentNode.id).setLeftOperand(undefined);
    }
    node.parentNode.removeChild(node);

    NodeForest.insertRootNode(backendNode);

    target.appendChild(node);

    node.style.position = "absolute";
    const xPosParent = event.target.getBoundingClientRect().x +
        parseInt(window.getComputedStyle(target, null).getPropertyValue("padding-left"), 10);
    const yPosParent = event.target.getBoundingClientRect().y +
        parseInt(window.getComputedStyle(target, null).getPropertyValue("padding-top"), 10);
    node.style.top = `${event.pageY - yPosParent}px`;
    node.style.left = `${event.pageX - xPosParent}px`;
}

/**
 * Determines how to handle the dropping of each Node that is dragged into the editor space.
 * @param event
 */
function dropNode(event) {
    event.preventDefault();
    event.stopPropagation();
    const id = event.dataTransfer.getData("text");
    const node = document.getElementById(id);
    const target = event.target;
    console.log(event.target);
    let origin;
    let destination;
    const handlers = {
        panel: {
            node: handlePanelNode,
            equationPane: handlePanelEquationPane
        },
        rootNode: {
            node: handleRootNodeNode,
            equationPane: handleRootNodeEquationPane
        },
        childNode: {
            node: handleChildNodeNode,
            equationPane: handleChildNodeEquationPane
        }
    };

    // determine origin
    if (node.parentNode.classList.contains("panel")) {
        origin = "panel";
    }
    else if (node.parentNode.classList.contains("node-container")) {
        origin = "childNode";
    }
    else {
        origin = "rootNode";
    }

    // determine destination
    if (target.classList.contains("node-container")) {
        destination = "node";
    }
    else {
        destination = "equationPane";
    }

    handlers[origin][destination](node, target, event);

    Calculator.updateResult();
}

/**
 * Removes the Node from the HTML DOM as well as the NodeForest.
 * @param event
 */
function deleteNode(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const node = document.getElementById(id);

    if (!node.parentNode.classList.contains("panel")) {
        document.getElementById(id).remove();
        NodeForest.deleteRootNode(id);
    }
}

/**
 * Allows the Nodes behavior when dropped to be manipulated.
 * @param event
 */
function allowDroppingNode(event) {
    event.preventDefault();
}

/**
 * Handles change of number inputs
 * @param input
 */
function numberListener(input) {
    NodeForest.getNode(input.parentNode.id).number = input.value;
    Calculator.updateResult();
}
