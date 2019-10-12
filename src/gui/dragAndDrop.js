/**
 * Handles processing of drag and drop events for the mathematical Nodes
 */

// Global imports
/* global document */
/* global NodeForest */
/* global Calculator */
/* global Operators */
/* global NodeFactory */

/**
 * Sets data attribute to hold the id of the picked up HTML Node
 * @param event
 */
function pickUpNode(event) {
    event.dataTransfer.setData("text", event.target.id);
}

/**
 * Determines how to handle the dropping of each Node that is dragged into the editor space.
 * @param event
 */
function dropNode(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const node = document.getElementById(id);
    const clone = node.cloneNode(true);

    if (node.parentNode.classList.contains("node-container")) {
        node.parentNode.removeChild(node);
    }

    // Handles dropping root and child Nodes differently
    if (event.target.parentNode.classList.contains("node")) {
        // Ensures that the parent is a Node
        if (event.target.classList.contains("node-container") &&
            event.target.childElementCount === 0) {
            clone.id = NodeFactory.createNode(clone.classList, false);
            // Insert into a binary node
            if (event.target.id.toString().endsWith("Left")) {
                // NodeForest.insertIntoBinaryNodeLeft(NodeForest.getNode(clone.id));
            }
            else {
                // NodeForest.insertIntoBinaryNodeRight(NodeForest.getNode(clone.id));
            }
            event.target.appendChild(clone);
        }
    }
    else if (!node.classList.contains("number")) {
        // Create a clone of the Node if dragged from the selection list. Else just move it
        if (node.parentNode.classList.contains("panel")) {
            clone.id = NodeFactory.createNode(clone.classList, true);
            clone.style.position = "fixed";
            clone.style.top = `${event.pageY}px`;
            clone.style.left = `${event.pageX}px`;
            event.target.appendChild(clone);
        }
        else {
            node.style.position = "fixed";
            node.style.top = `${event.pageY}px`;
            node.style.left = `${event.pageX}px`;
        }
    }

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
