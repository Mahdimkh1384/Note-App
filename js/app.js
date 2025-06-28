let $ = document
let input = $.getElementById("input-field")
let NoteDivColor = $.querySelectorAll(".color-box")
let AddBtn = $.getElementById("btn-save")
let DeleteBtn = $.getElementById("btn-delete")
let container = $.getElementById("listed")


NoteDivColor.forEach(function (color) {
    color.addEventListener('click', function () {
        input.style.backgroundColor = color.style.backgroundColor
    })
})


function Add() {
    if (input.value) {
        let newText = $.createElement('p')
        newText.setAttribute('class', "card-text p-3")
        newText.innerHTML = input.value
        let newDiv = $.createElement('div')
        newDiv.setAttribute('class', "card shadow-sm rounded")
        newDiv.append(newText)
        container.append(newDiv)
        let inputBg = input.style.backgroundColor
        newDiv.style.backgroundColor = inputBg
        newDiv.addEventListener('click', function () {
            newDiv.remove()
        })
        input.value = ''
        input.style.backgroundColor = 'white'
    }
}

function Enter(event) {
    if (event.keyCode == 13) {
        Add()
    }

}

function Delete() {
    input.value = ''
    input.style.backgroundColor = 'white'
}

AddBtn.addEventListener('click', Add)
input.addEventListener('keydown', Enter)
DeleteBtn.addEventListener('click', Delete)