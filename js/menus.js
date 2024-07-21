// menu principal

let aberto = false
const checkbox = document.querySelector('#menu_input')
const nav = document.querySelector('.config')
const label = document.querySelector('.clic_js')

document.addEventListener('click', (event) => {
    const target = event.target
    if (target !== checkbox) {
        if (target === label) {
            if (aberto) {
                aberto = false
                checkbox.checked = true

            } else {
                aberto = true
                checkbox.checked = false
            }
        } else if (target !== checkbox && target !== nav) {
                checkbox.checked = false
                if (aberto) {
                    aberto = false
                    checkbox.checked = false
                }
        }
    }
})

nav.addEventListener('click', (event) =>{
    event.stopPropagation()
})

const inputs  = document.querySelectorAll('.subMenu input[type="checkbox"]')
const contents = document.querySelectorAll(".subMenu")

inputs.forEach(checkbox => {
    checkbox.addEventListener('change', dropdown);
});

function dropdown(event) {
    for (let i = 0; i < inputs.length; i++) {
        if (event.target === inputs[i]) {
            contents[i].classList.toggle("aberto");
            }
        }
    }
// audio

const input = document.querySelector('.menu_audio input')
const menuAudio = document.querySelector('.menu_audio')

menuAudio.classList.add("transition")
input.addEventListener("input", menu_audio)

function menu_audio() {
    if (input.checked) {
        menuAudio.classList.add('menuAudio_aberto')
    } else {
        menuAudio.classList.remove('menuAudio_aberto')
    }
}
