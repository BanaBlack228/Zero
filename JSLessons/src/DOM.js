function displayText() {
    const inputValue = document.getElementById('textInput').value;
    //const inputValue = document.querySelector('#textInput').value
    document.querySelector('#textDisplay').innerText = inputValue;
}

function showChekboxes() {
    const checkbox1 = document.querySelector('#checkbox1').checked;
    const checkbox2 = document.querySelector('#checkbox2').checked;
    alert(`Чекбокс 1: ${checkbox1}\n Чекбокс 2: ${checkbox2}`)
}

function showRadio() {
    const selectedRadio = document.querySelector('input[name="radioGroup"]:checked')
    if(selectedRadio) {
        alert(`Выбрана ${selectedRadio.value}`)
    }else{
        alert('Ничего не выбрано')
    }
}

function showSelected() {
    const dropDown = document.querySelector('#dropDown')
    alert(`Выбрана опция ${dropDown.value}`)
}