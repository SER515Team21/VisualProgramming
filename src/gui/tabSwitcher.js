/* global document */

function tabSwitcher(elem) {
    const list = elem.parentElement.parentElement;

    for (let i = 0; i < list.children.length; i++) {
        const viewID = list.children[i].children[0].getAttribute("data-for");
        document.getElementById(viewID).hidden = true;
        if (document.getElementById(viewID).classList.contains("active")) {
            document.getElementById(viewID).classList.remove("active");
        }
    }

    const elemViewID = elem.getAttribute("data-for");
    document.getElementById(elemViewID).hidden = false;
    document.getElementById(elemViewID).classList.add("active");
}
