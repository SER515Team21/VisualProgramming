/**
 * Handles processing of drag and drop events for the mathematical Nodes
 */

/* global document */
/* global NodeForest */
/* global Calculator */
/* global Operators */
/* global NodeFactory */

function pickUpNode(event) {
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.setData("parent", event.target.parentNode.id);
}

function dropNode(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const parentId = event.dataTransfer.getData("parent");
    const node = document.getElementById(id);

    // Determine behavior based upon source dragged from
    if (parentId !== "editorPane") {
        const clone = node.cloneNode(true);
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

    Calculator.updateResult();
}

function deleteNode(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    document.getElementById(id).remove();
    NodeForest.deleteRootNode(id);
}

function allowDroppingNode(event) {
    event.preventDefault();
}
