const backdrop = document.getElementById('simpleBackdrop');
const backdropBtn = document.getElementById('backdropBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

backdropBtn.addEventListener('click', openBackdrop);
closeBtn.addEventListener('click', closeBackdrop);
window.addEventListener('click', clickOutside);

function openBackdrop() {
  backdrop.style.display = 'block';
}

function closeBackdrop() {
  backdrop.style.display = 'none';
}

function clickOutside(e) {
  console.log('clickOutside DOES NOT working correctly!!');
  if (e.target == backdrop) {
    backdrop.style.display = 'none';
  }
}
