let burgerLabel = document.getElementById('burger__label')
let test = document.getElementById('test')

burgerLabel.addEventListener('click', () => {
    burgerLabel.classList.toggle('burger-click')
    test.classList.toggle('open')
    document.body.classList.toggle('mobile')
})