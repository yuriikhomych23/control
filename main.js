//EDIT

let text = document.getElementById('textBlock')
let cont = document.getElementById('area')
let btnEdit = document.getElementById('btnEdit')
btnEdit.addEventListener('click', function(event) {
    cont.style.display = 'flex';
    secondBlock.style.display = 'none';
    cont.innerHTML = text.innerHTML ;
})


//SAVE
let btnSave = document.getElementById('btnSave');
btnSave.addEventListener('click', function() {
     text.innerHTML = cont.value;
})


//STYLE
let secondBlock = document.getElementById('secondBlock')
let  btnAStyle = document.getElementById('btnStyle'); 
btnAStyle.addEventListener('click', function() {
    secondBlock.style.display = 'flex';
    cont.style.display = 'none';

})