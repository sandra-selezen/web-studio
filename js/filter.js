window.addEventListener('load', windowLoad);

function windowLoad() {
  document.addEventListener('click', documentActions);
}

function documentActions(e) {
  const targetElement = e.target;

  // Works filter

  if (targetElement.classList.contains('button-set__button') && !targetElement.classList.contains('active')) {

    const activeElement = document.querySelector(`.button-set__button.active`);
    const elements = document.querySelectorAll(`.portfolio__item`);
    const elementType = targetElement.dataset.workType;

    activeElement.classList.remove('active');
    targetElement.classList.add('active');

    elements.forEach(element => {
        !elementType || element.dataset.workType === elementType ? element.hidden = false : element.hidden = true;
    });
  }
}