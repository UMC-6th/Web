<<<<<<< HEAD

function enter() {
    const plan = document.getElementById('plan');
    if(plan.value != "") {
        const new_list_div = document.createElement('div'); //div(new_list_div) 생성
        new_list_div.id='todo'; //new_list_div의 id를 todo로 지정
        const new_btn = document.createElement('button'); //button(new_btn) 생성
        new_btn.innerHTML = "완료"; new_btn.id='did_dtn'; //button에 '완료'라는 글자 삽입, id를 did_btn으로 지정
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
=======

function enter() {
    const plan = document.getElementById('plan');
    if(plan.value != "") {
        const new_list_div = document.createElement('div'); //div(new_list_div) 생성
        new_list_div.id='todo'; //new_list_div의 id를 todo로 지정
        const new_btn = document.createElement('button'); //button(new_btn) 생성
        new_btn.innerHTML = "완료"; new_btn.id='did_dtn'; //button에 '완료'라는 글자 삽입, id를 did_btn으로 지정
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
>>>>>>> c0edee7858f9b75424ea2904826dfcb9b57bde65
}