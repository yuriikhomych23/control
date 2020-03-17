let textBlock = document.getElementById('textBlock')
let area = document.getElementById('area')
let btnEdit = document.getElementById('btnEdit')
let btnAdd = document.getElementById('btnAdd')
let cont = document.querySelector('.cont')
let ss = document.querySelector('.secondContainer')
let container = document.querySelector('.container')
let btnSave = document.getElementById('btnSave');
let secondBlock = document.getElementById('secondBlock')
let btnStyle = document.getElementById('btnStyle');
let condition = document.querySelector('.condition')
let secondCondition = document.querySelector('.secondCondition');


//BUTTON EDIT
btnEdit.addEventListener('click', function(event) {
    area.style.display = 'flex';
    area.innerHTML = textBlock.innerHTML ;
    btnSave.style.display = 'flex';
    btnAdd.style.display = 'flex';
    secondBlock.style.display = 'none';
})

//BUTTON ADD 
btnAdd.addEventListener('click', function() {
    container.style.display = 'none';
    ss.style.display = 'block';
})



//BUTTON SAVE

btnSave.addEventListener('click', function() {
    textBlock.innerHTML = area.value;
    area.style.display = 'none';
    btnSave.style.display = 'none';
    btnAdd.style.display = 'none';
})


//BUTTON STYLE

btnStyle.addEventListener('click', function() {
    secondBlock.style.display = 'flex';
    area.style.display = 'none';
    btnSave.style.display = 'none';
    btnAdd.style.display = 'none';
})



//FONT-FAMILY
let form = document.forms['style'];
form.family.addEventListener('change', function() {
    textBlock.style.fontFamily = this.value;
})



let size = document.getElementsByName('fontSize');
form.size.addEventListener('change', function() {
    textBlock.style.fontSize = this.value;
})





//BTN COLOR  ДОРОБИТИ 
let getSel = x => document.querySelector(x);
let btnColor = document.getElementById('btnColor');
let listColor = document.getElementById('listColor');
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
let btnBackground = document.getElementById('btnBackground');
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
});



// CREATE LIST
let btnCreateList = document.querySelector('.btnCreateList');
let formLift = document.forns['conditionList'];

let createList = document.createElement('li');






// BUTTON TABLE
let btnTable = document.getElementById('btnTable');
let btnList = document.getElementById('btnList')
let tableCondition = document.forms['tableCondition'];

btnTable.addEventListener('click', function() {
    condition.style.display = 'block';
    secondCondition.style.display = 'none';

})
// BUTTON LIST  
btnList.addEventListener('click', function () {
    condition.style.display = 'none';
    secondCondition.style.display = 'block';
})








