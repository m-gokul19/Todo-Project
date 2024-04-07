var counter = 0;
var counterHigh = 0;
var counterMedium = 0;
var counterLow = 0;
var counterId = 0;

function addTask(){
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var priority = document.getElementById("priority").value;

    var id = "t" + counterId;
    counterId++;
    var task = document.createElement("div");
    task.classList.add("task");
    task.id = id;
    
    var taskName = document.createElement("p");
    taskName.innerHTML = name + " on " + date;
    
    var doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-sm btn-primary";
    doneBtn.textContent = "Done";
    doneBtn.addEventListener( 'click', function() { markAsDone( id ) } );

    var delBtn = document.createElement("button");
    delBtn.className = "btn btn-sm btn-danger";
    delBtn.textContent = "Delete";
    delBtn.addEventListener( 'click', function() { deleteTask( id ) } );

    task.appendChild(taskName);
    task.appendChild(doneBtn);
    task.appendChild(delBtn);

    document.getElementById("target").appendChild(task);

    //counter increase
    counter++;
    if( priority == 1){
        counterHigh++;
        task.classList.add("task-high");
    }
    else if( priority == 2){
        counterMedium++;
        task.classList.add("task-medium");
    }
    else{
        counterLow++;
        task.classList.add("task-low");
    }
    document.getElementById("highCounter").innerHTML = counterHigh;
    document.getElementById("lowCounter").innerHTML = counterLow;
    document.getElementById("mediumCounter").innerHTML = counterMedium;
}

function markAsDone(eleementId){
    var task = document.getElementById(eleementId);
    task.classList.remove("task-high");
    task.classList.remove("task-medium");
    task.classList.remove("task-low");
    task.classList.add("task-done");
}

function deleteTask(eleementId){
    var task = document.getElementById(eleementId);
    task.remove();
    counter--;
}