document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(e.target.description.value);
  });
});

function buildToDo (todo){
  let li=document.createElement('li')
  let btn=document.createElement('button')
  btn.addEventListener('click',handeDelete)
  btn.textContent='x'
  li.textContent=`${todo} `
  li.appendChild(btn)
  document.getElementById('tasks').appendChild(li)

}

function handeDelete(e){
  e.target.parentNode.remove()
}