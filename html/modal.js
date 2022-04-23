// Resource: https://sabe.io/tutorials/how-to-create-modal-popup-box

const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
console.log(closeButton);
function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);