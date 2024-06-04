var aberto = false
const checkbox = document.querySelector('#menu_input')
const nav = document.querySelector('.configuracao')
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
        } else {

            if (target !== checkbox && target !== nav) {
                checkbox.checked = false
                if (aberto) {
                    aberto = false
                    checkbox.checked = false

                }
            }
        }
    }
})

nav.addEventListener('click', (event) =>{
    event.stopPropagation()
})

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

let offsetX, offsetY;
let isMenuAudio = false;


// movimentação menu audio
// menuAudio.addEventListener('mousedown', (e) => {
//   console.log(e)
//   isMenuAudio = true;
//   offsetY = e.clientY - menuAudio.getBoundingClientRect().top;
//   menuAudio.style.cursor = 'grabbing';
// });

// document.addEventListener('mousemove', (e) => {
//   if (!isMenuAudio) return;
//   const y = e.clientY - offsetY;

//   menuAudio.style.top = `${y}px`;
// });

// document.addEventListener('mouseup', () => {
//   if (isMenuAudio) {
//     isMenuAudio = false;
//     menuAudio.style.cursor = 'grab';
//   }
// });

// formularios

const fundo_element = document.querySelector(".formularios")
const compartilhar_element = document.querySelector(".compartilhar")
const comentar_element = document.querySelector(".comentar")
const entrar_element = document.querySelector(".entrar")
const Input = document.getElementById('input_foto')
const Label = document.getElementById('label_foto')
const texto_label = document.querySelector(".textolabel")

Input.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            Label.style.backgroundImage = `url('${reader.result}')`;
        };
        reader.readAsDataURL(file);
        texto_label.style.cssText = "display: none;"
    } else {
        Label.style.backgroundImage = 'none';
    }
});

function fecharCompleto(form) {

    const formulario_entrar = document.getElementById('form_e')
    const formulario_comentar = document.getElementById('form_c')


    if (form) {
        if (formulario_entrar.checkValidity()) {
            fechar(["none", "none", "none", "none"])
        } else {
            formulario_entrar.reportValidity()
        }
    } else {
        if (formulario_comentar.checkValidity()) {
            fechar(["none", "none", "none", "none"])
        } else {
            formulario_comentar.reportValidity()
        }
    }
}

function fechar(display) {
    checkbox.checked = false

    const forms = [entrar_element, comentar_element, compartilhar_element, fundo_element]

    for (let i = 0; i < forms.length; i++) {
        forms[i].style.cssText = `display: ${display[i]}`        
    }
}

function nativo() {
    fechar(["none", "none", "block", "block"])
    if (navigator.share !== undefined) {
        navigator.share({
            title: 'Sustentabilidade: Ações que mudam o mundo',
            text: 'Como mudar o mundo de maneira sustentável',
            url: 'https://agrinho2023-iota.vercel.app/',
        })
    }
}