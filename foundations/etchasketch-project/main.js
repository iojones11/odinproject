let rowCol 

const button = document.querySelector('.button')
const container = document.querySelector('.container')
const userInput = document.querySelector('.userentry')
const clear = document.querySelector('.buttonclear')

function pixelClassCheck(pix) {
    if (pix.style.background = 'var(--darkest)') {
        return
    }
    if (pix.style.background = 'var(--darker)') {
        pix.style.background == 'var(--darkest)'
        return
        }
    if (pix.style.background = 'var(--dark)') {
        pix.style.background = 'var(--darker)'
        return
    }
    if (pix.style.background = 'var(--lighter') {
        pix.style.background = 'var(--dark)'
        return
    }
    if (pix.style.background = 'var(--light') {
        pix.style.background = 'var(--lighter)'
        return
    }
    if (pix.style.background = 'var(--main)') {
        pix.style.background = 'var(--light)'
        return
    }
}

function etchCreator(num) {
    container.innerHTML = ""
    for (let i = 0; i < num; i++) {
        newRow = document.createElement('div')
        newRow.className = 'row'
        container.appendChild(newRow)
        for (let i = 0; i < num; i++) {
            newPixel = document.createElement('div')
            newPixel.className = 'pix'
            newRow.appendChild(newPixel)
        }
    }
    pixel = document.querySelectorAll('.pix')
    pixel.forEach(pix => {
        pix.addEventListener("mouseover", () => {
            pixelClassCheck(pix)
        })
    });
    return pixel
}

etchCreator(100)

button.addEventListener("click", () => {
    rowCol = userInput.value
    etchCreator(rowCol)
})

clear.addEventListener("click", () => {
    pixel.forEach(pix => {
        pix.style.background = 'var(--main)'
    });
})
