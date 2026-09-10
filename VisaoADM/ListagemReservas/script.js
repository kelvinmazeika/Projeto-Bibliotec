const checkbox = document.querySelectorAll('#item');


checkbox.items?.forEach || checkbox.forEach(checkbox => {
checkbox.addEventListener('change', function() {
  const sibling = this.previousElementSibling;
  
  if (this.checked) {
    sibling.classList.replace('status-livro', 'retirado');
  } else {
    sibling.classList.replace('retirado', 'status-livro');
  }
  });
});