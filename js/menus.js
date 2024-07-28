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


//dropdown, sla se é isso

const inputs  = document.querySelectorAll('.subMenu .dropDown')
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


// formularios 


const fundo_element = document.querySelector(".formularios") // elmento pai, para manipular o fundo

// formularios
const compartilhar_element = document.querySelector(".share")
const contato_element = document.querySelector(".contato")
const entrar_element = document.querySelector(".entrar")

const texto_label = document.querySelector(".textolabel")
const Input = document.getElementById('input_foto')
const Label = document.getElementById('label_foto')


//coloca como imagem de fundo a foto selecionada
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
    const formulario_contato = document.getElementById('form_c')


    if (form) {
        if (formulario_entrar.checkValidity()) {
            fechar(["none", "none", "none", "none"])
        } else {
            formulario_entrar.reportValidity()
        }
    } else {
        if (formulario_contato.checkValidity()) {
            fechar(["none", "none", "none", "none"])
        } else {
            formulario_contato.reportValidity()
        }
    }
}


//fecha de acordo com o array no onclick dos botoes no html
function fechar(display) {
    checkbox.checked = false

    const forms = [entrar_element, contato_element, compartilhar_element, fundo_element]

    for (let i = 0; i < forms.length; i++) {
        forms[i].style.cssText = `display: ${display[i]}`        
    }
}

// ativa o "menu nativo" de compartilhamento
function nativo() {
    fechar(["none", "none", "flex", "block"])
    if (navigator.share !== undefined) {
        navigator.share({
            title: 'Sustentabilidade: Ações que mudam o mundo',
            text: 'Como mudar o mundo de maneira sustentável',
            url: 'https://agrinho2023-iota.vercel.app/',
        })
    }
}