let counter = 0

function showThemePicker() {
    const tpm = document.getElementById('theme-picker__menu')
    if (counter % 2 === 0) {
        tpm.style.display = 'block'
    } else {
        tpm.style.display = 'none'
    }
    counter++
}

// function closeThemePicker() {
//     alert(1)
//     const tpm = document.getElementById('theme-picker__menu')
//     tpm.style.display = 'none'
// }