// First check that the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {

  // Handles all events for arithmetic node list
  const arithmeticList = document.getElementById('arithmetic-list');
  const arithmeticNodes = document.getElementsByClassName('arithmetic-node');
  const arithmeticArrow = document.getElementById('arithmetic-arrow');

  // Change the visibility and orientation of child nodes and arrow
  arithmeticList.onclick = function (event) {
    Array.prototype.forEach.call(arithmeticNodes, (node) => {
      if (event.target === this ||
          event.target === document.getElementById('list-item-title') ||
          event.target === document.getElementById('arithmetic-arrow')) {
        if (node.style.display === 'none' || node.style.display === '') {
          node.style.display = 'block';
          arithmeticArrow.classList.remove('down-arrow');
          arithmeticArrow.classList.add('up-arrow');
        } else {
          node.style.display = 'none';
          arithmeticArrow.classList.remove('up-arrow');
          arithmeticArrow.classList.add('down-arrow');
        }
      }
    });
  };
});
