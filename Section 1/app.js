const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');

function addGoal(){
    const value = inputElement.value;
    const listItem = document.createElement('li');
    listItem.textContent = value;
    listElement.append(listItem);
    inputElement.value="";
}

buttonElement.addEventListener('click', addGoal());