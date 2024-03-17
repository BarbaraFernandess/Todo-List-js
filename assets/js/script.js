function addTask(){
    var inputValue = document.getElementById('task-input').value;

    if(document.getElementById('task-input').value==''){
        alert('Digite algo no campo!')
    } else{
        var inputList = document.createElement('input');
        inputList.type = 'checkbox';
        inputList.id ='input-list';

        var taskContainer = document.createElement('span');
        taskContainer.id = 'all-task';
    
        var inputLabel = document.createElement('label');
        inputLabel.htmlFor = 'input-list';
        inputLabel.id ='input-label';
    
        inputLabel.appendChild(document.createTextNode(inputValue));
    
        var deleteButton = document.createElement('button');
        deleteButton.id = 'delete-button';
        deleteButton.textContent = '🗑️';

        taskContainer.appendChild(inputList);
        taskContainer.appendChild(inputLabel);
        taskContainer.appendChild(deleteButton);


        inputList.addEventListener('change', function(){
        if(this.checked){
            inputLabel.style.textDecoration = 'line-through';
            inputLabel.style.textDecorationColor = 'red';          
        } else{
            inputLabel.style.textDecoration = 'none';
        }
    })
        
        var resultCheckBox = document.getElementById('tasks');
    
        resultCheckBox.appendChild(taskContainer);
    
    }
    document.getElementById('task-input').value='';    

    removeTask(deleteButton, taskContainer);

}

function removeTask(deleteButton, taskContainer){

    deleteButton.addEventListener('click', function(){
        taskContainer.remove();
    })
}