window.addEventListener("load",()=>{
    let AddToDo = document.getElementById("AddToDo");
    console.log("yes1");
    let ul = document.getElementById("toDoList");
    AddToDo.addEventListener('click',()=>{
        console.log("pressed");
        let li = document.createElement('li'),
            checkbox = document.createElement("input"),
            span = document.createElement("span"),
            button = document.createElement("button");
        checkbox.type = "checkbox";



        span.classList.add("ToDoText");
        span.innerText = document.getElementById("newToDo").value;
        checkbox.classList.add("DoneCheckbox");
        button.innerText = "REMOVE";
        button.addEventListener("click",()=>{
           var Parent = button.parentElement;
           console.log(Parent);
           Parent.remove();
        })
        checkbox.addEventListener("change",()=>{
            if(!checkbox.checked) {
                checkbox.parentElement.classList.remove("done");
            }else if(checkbox.checked){
                checkbox.parentElement.classList.add("done");
            }

        })












        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);


    })

});