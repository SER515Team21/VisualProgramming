
function pickUpNode(event) {
  event.dataTransfer.setData('text', event.target.id);
}

function dropNode(event) {
  event.preventDefault();
  let id = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(id).cloneNode(true));
}

function allowDroppingNode(event) {
  event.preventDefault();
}
