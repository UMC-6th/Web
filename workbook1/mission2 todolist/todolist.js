
function enter() {
    const plan = document.getElementById('plan');
    if(plan.value != "") {
        const new_list_div = document.createElement('div');
        new_list_div.id='todo';
        const new_btn = document.createElement('button');
        new_btn.innerHTML = "완료";
        new_btn.id='did_dtn';
        const new_span = document.createElement('span');
        const todo_list = document.getElementById('todo-list');
        const complete_div = document.getElementById("complete-div");
    
        new_list_div.appendChild(new_span);
        new_list_div.appendChild(new_btn);
        console.log(new_list_div);
    
        new_span.textContent = plan.value;
    
        todo_list.appendChild(new_list_div);
        console.log(todo_list);
    
        plan.value = "";
        
        new_btn.addEventListener('click', () => {
            complete_div.appendChild(new_list_div);
            new_btn.innerHTML = "삭제";
            new_btn.addEventListener('click', PlanDelete);
        });
    }
}

function PlanDelete() {
    const new_list_div = this.parentElement;
    new_list_div.remove();
}