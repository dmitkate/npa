let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.check__forma-option');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.check__forma-label-div'),
          currentText = select.querySelector('.check__forma__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};


select();