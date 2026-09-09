const checkbox = document.querySelector('#item-1');

checkbox.addEventListener('change', function() {
  const sibling = this.previousElementSibling;
  
  if (this.checked) {
    sibling.classList.replace('status-livro', 'retirado');
  } else {
    sibling.classList.replace('retirado', 'status-livro');
  }
});

const checkbox2 = document.querySelector('#item-2');

checkbox2.addEventListener('change', function() {
  const sibling = this.previousElementSibling;
  
  if (this.checked) {
    sibling.classList.replace('status-livro', 'retirado');
  } else {
    sibling.classList.replace('retirado', 'status-livro');
  }
});

const checkbox3 = document.querySelector('#item-3');

checkbox3.addEventListener('change', function() {
  const sibling = this.previousElementSibling;
  
  if (this.checked) {
    sibling.classList.replace('status-livro', 'retirado');
  } else {
    sibling.classList.replace('retirado', 'status-livro');
  }
});

const checkbox4 = document.querySelector('#item-4');

checkbox4.addEventListener('change', function() {
  const sibling = this.previousElementSibling;
  
  if (this.checked) {
    sibling.classList.replace('status-livro', 'retirado');
  } else {
    sibling.classList.replace('retirado', 'status-livro');
  }
});

const checkbox5 = document.querySelector('#item-5');

checkbox5.addEventListener('change', function() {
  const sibling = this.previousElementSibling;
  
  if (this.checked) {
    sibling.classList.replace('status-livro', 'retirado');
  } else {
    sibling.classList.replace('retirado', 'status-livro');
  }
});