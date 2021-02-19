let submitBtn = document.getElementById('submit-btn');
let inputTask = document.getElementById('input-task');
let deleteTask = document.querySelector('.btn-complete');


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
    input.type = 'checkbox';

    listItem.appendChild(input);
    listItem.appendChild(label);
    items.appendChild(listItem);
})
