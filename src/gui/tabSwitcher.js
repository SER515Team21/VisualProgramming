/* global document */

function tabSwitcher(elem) {
    const list = elem.parentElement.parentElement;

    for (let i = 0; i < list.children.length; i++) {
        const viewID = list.children[i].children[0].getAttribute("data-for");
        document.getElementById(viewID).hidden = true;
    }

    const elemViewID = elem.getAttribute("data-for");
    document.getElementById(elemViewID).hidden = false;
}
