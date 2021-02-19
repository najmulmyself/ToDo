let submitBtn = document.getElementById('submit-btn');
let inputTask = document.getElementById('input-task');
let deleteBtn = document.getElementsByClassName('btn-complete');
let deleteItem = document.getElementsByClassName('completed-item')


function createTask (task){
    let listItem = document.createElement('li');
    let input = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    input.type = 'checkbox';

    listItem.appendChild(input);
    listItem.appendChild(label);
    items.appendChild(listItem);
};
submitBtn.addEventListener('click',function(){
    let listItem = document.createElement('li');
    let input = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = ' ' + inputTask.value;
    inputTask.value = '';
    input.type = 'checkbox';

    listItem.appendChild(input);
    listItem.appendChild(label);
    items.appendChild(listItem);
})

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click',function(){
            deleteItem[i].remove();
    });
    
}
