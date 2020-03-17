//EDIT

let textBlock = document.getElementById('textBlock')
let area = document.getElementById('area')
let btnEdit = document.getElementById('btnEdit')
let btnAdd = document.getElementById('btnAdd')
btnEdit.addEventListener('click', function(event) {
    area.style.display = 'flex';
    area.innerHTML = textBlock.innerHTML ;
    btnSave.style.display = 'flex';
    btnAdd.style.display = 'flex';
    secondBlock.style.display = 'none';
})


//SAVE
let btnSave = document.getElementById('btnSave');
btnSave.addEventListener('click', function() {
    textBlock.innerHTML = area.value;
    area.style.display = 'none';
    btnSave.style.display = 'none';
    btnAdd.style.display = 'none';
})


//STYLE
let secondBlock = document.getElementById('secondBlock')
let  btnStyle = document.getElementById('btnStyle'); 
btnStyle.addEventListener('click', function() {
    secondBlock.style.display = 'flex';
    area.style.display = 'none';
    btnSave.style.display = 'none';
    btnAdd.style.display = 'none';
})



//BTN COLOR
let getSel = x => document.querySelector(x);
let btnColor = document.getElementById('btnColor');
let listColor = document.getElementById('listColor');
let btnBackground = document.getElementById('btnBackground');
btnColor.addEventListener('click', function() {
    listColor.style.display = 'flex';
    for (let i = 0; i < listColor.children.length; i++) {
        listColor.children[i].onclick = function() {
            textBlock.style.color = getComputedStyle(this).color;
            listColor.style.display = 'none'
        }
    }

});


//BTN BACKGROUND COLOR
btnBackground.addEventListener('click', function() {
    listColor.style.display = 'flex';
    for (let i = 0; i < listColor.children.length; i++) {
        listColor.children[i].onclick = function() {
            textBlock.style.background = getComputedStyle(this).backgroundColor;
            listColor.style.display = 'none';
        }
    }
});




//BOLD NORMAL ДОРОБИТИ
let bold = document.getElementById('bold');
let normal = document.getElementById('normal')
bold.addEventListener('click', function() {
    textBlock.style.fontWeight = this.value;
});

normal.addEventListener('click', function () {
    textBlock.style.fontWeight = this.value;
})





