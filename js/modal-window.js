const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  backdrop: document.querySelector(".backdrop"),
  body:document.querySelector("body"),
};

refs.openModalBtn.addEventListener("click", onOpenModalBtnClick);
refs.closeModalBtn.addEventListener("click", onCloseModalBtnClick);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModalBtnClick() {
  refs.modal.classList.remove("is-hidden");
  refs.body.classList.add("modal-open");
  window.addEventListener("keydown", onEscKeyDownModal);
};

function onCloseModalBtnClick() {
  window.removeEventListener("keydown", onEscKeyDownModal);
  refs.modal.classList.add("is-hidden");
  refs.body.classList.remove("modal-open");
};

function onBackdropClick(event) {
  if (event.target === refs.backdrop) {
    onCloseModalBtnClick();
  }
};

function onEscKeyDownModal(event) {
  if (event.code === "Escape") {
    onCloseModalBtnClick();
  }
};