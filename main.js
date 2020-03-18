
//BUTTON EDIT
let secondBlock = document.getElementById('second__block');
let area = document.getElementById('area');
let btnEdit = document.getElementById('btn__edit');
btnEdit.addEventListener('click', function(event) {
    area.style.display = 'flex';
    area.innerHTML = textBlock.innerHTML ;
    btnSave.style.display = 'flex';
    btnAdd.style.display = 'flex';
    secondBlock.style.display = 'none';
})

//BUTTON ADD 
let container = document.querySelector('.container');
let secondContainer = document.querySelector('.second__container');
let btnAdd = document.getElementById('btn__add');
btnAdd.addEventListener('click', function() {
    container.style.display = 'none';
    secondContainer.style.display = 'block';
})


//BUTTON SAVE
let textBlock = document.getElementById('text__block');
let btnSave = document.getElementById('btn__save');
btnSave.addEventListener('click', function() {
    textBlock.innerHTML = area.value;
    area.style.display = 'none';
    btnSave.style.display = 'none';
    btnAdd.style.display = 'none';
})


//BUTTON STYLE
let btnStyle = document.getElementById('btn__style');
btnStyle.addEventListener('click', function() {
    secondBlock.style.display = 'flex';
    area.style.display = 'none';
    btnSave.style.display = 'none';
    btnAdd.style.display = 'none';
})



//FONT-FAMILY
let styleForm = document.forms['style'];
styleForm.fontFamily.addEventListener('change', function() {
    textBlock.style.fontFamily = this.value;
})


//BTN COLOR  ДОРОБИТИ 
let getSel = x => document.querySelector(x);
let btnColor = document.getElementById('btn__color');
let listColor = document.getElementById('list__color');
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
let btnBackground = document.getElementById('btn__background');
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
let checkboxBold = document.getElementById('checkbox__bold');
let checkboxNormal = document.getElementById('checkbox__normal')
checkboxBold.addEventListener('click', function() {
    textBlock.style.fontWeight = this.value;
});

checkboxNormal.addEventListener('click', function () {
    textBlock.style.fontWeight = this.value;
});




// BUTTON TABLE
let listParameters = document.querySelector('.list__parameters');
let btnTable = document.getElementById('btn__table');
let btnList = document.getElementById('btn__list')
let tableParameters = document.forms['table__parameters'];
let btnCreateTable = document.querySelector('.btn__create__table');
let parameters = document.querySelector('.parameters');
btnTable.addEventListener('click', function() {
    parameters.style.display = 'block';
    listParameters.style.display = 'none';
})

tableParameters.btnCreateTable.addEventListener('click', function() {
    container.style.display = 'flex';
    secondContainer.style.display = 'none';
})



// BUTTON LIST  
btnList.addEventListener('click', function () {
    tableParameters.style.display = 'none';
    listParameters.style.display = 'block';
})





