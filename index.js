const modal = document.querySelector(".modal")
const overlay = document.querySelector(".shaded")

function openModal() {
    console.log("modal opened")
    modal.classList.add("active")
    overlay.classList.add("showOverlay")
}

function closeModal() {
    console.log("modal closed")
    modal.classList.remove("active")
    overlay.classList.remove("showOverlay")
}