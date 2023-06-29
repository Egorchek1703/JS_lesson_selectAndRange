// Цель урока аналогична прошлому, только применительно к тегу <select></select> и input с type='range'

// select
const list = document.querySelector('.select-list')
function checkSelectedIndex(){
    let selectedInd = list.selectedIndex
    console.log('Element index: ' + selectedInd + ' Text: ' + list[selectedInd].innerText)
}

list.addEventListener('change', checkSelectedIndex)

// range
const range = document.querySelector('.range')
range.addEventListener('input', ()=>{
    let valueRange = document.querySelector('.value-range')
    const testBlock = document.querySelector('.test-block')
    
    if(range.value > 9){
        valueRange.innerHTML = '&#128293';
        testBlock.style.width = `${range.value*100}px`
        testBlock.style.background = 'linear-gradient(to right, red, orange 50%, red)'
    }
    else{
        valueRange.innerHTML = range.value
        testBlock.style.width = `${range.value*100}px`
        testBlock.style.background = 'aqua'
    }
})
// Особенность события input в том, что оно срабатывает при любом изменении в inpute, т.е. ввод нового символа или изменения ползунка
// Отличие от события change заключается в том, что событие change отслеживает только наличие или потерю фокуса в элементе. 
// Поэтому checkbox, rafio - change, а range - input 
