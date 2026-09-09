const checkbox = document.querySelector('#item-1');

checkbox.addEventListener('change', function() {
  const sibling = this.previousElementSibling;
  
  if (this.checked) {
    sibling.classList.replace('status-livro', 'retirado');
  } else {
    sibling.classList.replace('retirado', 'status-livro');
  }
});