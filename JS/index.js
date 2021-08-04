const todoHeader = document.querySelector('h1');
const form = document.querySelector('form');
const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clearList');
const input = document.getElementById('inputList');
const unOrderList = document.getElementById('unOrderList');
//submitBtn.addEventListener(alert('input.value'));
//console.log(unOrderList);

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
     if(input.value=="")alert('give an item');
     else{

        const newElement = document.createElement('li');
        unOrderList.appendChild(newElement);
        const newElementText = document.createTextNode("* "+input.value);
        
        //console.log(input.value);
        newElement.appendChild(newElementText);
        newElement.style.color="white"
        const removeButton = document.createElement('button');
        removeButton.style.backgroundColor ='rgb(191, 24, 224)';
        newElement.appendChild(removeButton);
        const removeButtonText = document.createTextNode('X');
        removeButton.appendChild(removeButtonText);
        removeButton.addEventListener('click',()=>{
            newElement.remove();
        })
    // console.log(newElement);
        //console.log(newElementText);
    }
});
clearBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    unOrderList.innerHTML='';
})