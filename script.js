let submitBtn = document.getElementById('submit-btn');
let inputTask = document.getElementById('input-task');
let deleteBtn = document.querySelectorAll('.btn-complete');
let deleteItem = document.querySelectorAll('.completed-item');
let checkbox = document.querySelectorAll('input[type="checkbox"]');
let eachItem = document.querySelectorAll('.item');
let completedItemsUl = document.getElementById('completed-items');
let getText = document.querySelectorAll('.collect-text');


// function createTask (task){
//     let listItem = document.createElement('li');
//     let input = document.createElement('input');
//     let label = document.createElement('label');

//     label.innerText = task;
//     input.type = 'checkbox';

//     listItem.appendChild(input);
//     listItem.appendChild(label);
//     items.appendChild(listItem);
// };
submitBtn.addEventListener('click',function(){
    let listItem = document.createElement('li');
    listItem.className = "item";
    let input = document.createElement('input');
    let label = document.createElement('label');
    label.className = "collect-text";

    label.innerText = ' ' + inputTask.value;
    inputTask.value = '';
    input.type = 'checkbox';

    listItem.appendChild(input);
    listItem.appendChild(label);
    items.appendChild(listItem);
})


for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click',function(){
            eachItem[i].remove()
            let comlistItem = document.createElement('li');
            comlistItem.className = "completed-item";
            comlistItem.innerText = eachItem[i].innerText;
            let button = document.createElement('button');
            button.className = "btn btn-complete";
            button.innerText = 'Delete';
            comlistItem.appendChild(button);
            completedItemsUl.appendChild(comlistItem);

    });
    
}
for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click',function(){
            deleteItem[i].remove();
    });
    
}