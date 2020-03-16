//EDIT

let textBlock = document.getElementById('textBlock')
let cont = document.getElementById('area')
let btnEdit = document.getElementById('btnEdit')
let btnAdd = document.getElementById('btnAdd')
btnEdit.addEventListener('click', function(event) {
    cont.style.display = 'flex';
    cont.innerHTML = textBlock.innerHTML ;
    btnSave.style.display = 'flex';
    btnAdd.style.display = 'flex';
})


//SAVE
let btnSave = document.getElementById('btnSave');
btnSave.addEventListener('click', function() {
     textBlock.innerHTML = cont.value;
     cont.style.display = 'none';
     btnSave.style.display = 'none';
    btnAdd.style.display = 'none';
})


//STYLE
let secondBlock = document.getElementById('secondBlock')
let  btnAStyle = document.getElementById('btnStyle'); 
btnAStyle.addEventListener('click', function() {
    secondBlock.style.display = 'flex';
    cont.style.display = 'none';

})