const button = document.getElementById('generate-color-btn')
const box  = document.querySelector('.box')
const span = document.getElementById('rgb')

button.addEventListener('click', () => {

    const randomNumber = Math.floor(
        Math.random() * 256
    )

    const randomNumber2 = Math.floor(
        Math.random() * 256

    )
    const randomNumber3 = Math.floor(
        Math.random() * 256

    )
    box.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber3} ,${randomNumber3})`
    span.innerHTML = `${randomNumber}, ${randomNumber3} ,${randomNumber3}`
})