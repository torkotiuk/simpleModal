// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', clickOutside);

// FN to open modal
function openModal() {
  modal.style.display = 'block';
}

// FN to close modal
function closeModal() {
  modal.style.display = 'none';
}

// FN to close modal if outside click
function clickOutside(e) {
  // 'modal' - is dark area around
  console.log('clickOutside DOES NOT working correctly!!');
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
