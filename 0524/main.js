 // 요소 생성
 const main = document.getElementById("main");
 const h1El = document.createElement("h1");
 const inputEl = document.createElement("input");
 const btnClear = document.createElement("button");
 const ulEl = document.createElement("ul");

 main.append(h1El, inputEl, btnClear, ulEl);

 h1El.innerText = "🔔 메모";
 inputEl.setAttribute(
   "placeholder",
   `✍ 글을 입력 후 "Enter"를 눌러주세요!!`
 );
 btnClear.textContent = "전체 삭제";

 // 기능 구현
 const toDoInput = document.querySelector("input");
 const toDoList = document.querySelector("ul");
 btnClear.classList.add("total");
 const btnDelete = document.querySelector(".total");
 btnDelete.addEventListener("click", deleteTotal);

 const TODOS_LS = "toDos";

 function filterFn(toDo) {
   return toDo.id === 1;
 }

 let toDos = [];

 function deleteToDo(event) {
   const btn = event.target;
   const li = btn.parentNode;
   toDoList.removeChild(li);
   const cleanToDos = toDos.filter(function (toDo) {
     return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos;
   saveToDos();
 }

 function deleteTotal() {
   const li = document.querySelectorAll("li");
   localStorage.clear();
   toDos = [];
   li.forEach((el) => el.remove());
 }

 function saveToDos() {
   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
 }

 function paintToDo(text) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   const delBtn = document.createElement("button");
   delBtn.innerText = "❌";
   delBtn.addEventListener("click", deleteToDo);
   const newId = toDos.length + 1;
   span.innerText = text;
   li.appendChild(span);
   li.appendChild(delBtn);
   li.id = newId;
   toDoList.appendChild(li);
   const toDoObj = {
     text: text,
     id: newId,
   };
   toDos.push(toDoObj);
   saveToDos();
 }

 function handleSubmit(event) {
   const currentValue = toDoInput.value;
   if (
     event.key === "Enter" &&
     toDoInput.value != " " &&
     toDoInput.value != ""
   ) {
     event.preventDefault();
     paintToDo(currentValue);
     toDoInput.value = " ";
   }
 }

 function loadToDo() {
   const loadedtoDos = localStorage.getItem(TODOS_LS);
   if (loadedtoDos !== null) {
     const parsedToDos = JSON.parse(loadedtoDos);
     parsedToDos.forEach(function (toDo) {
       paintToDo(toDo.text);
     });
   }
 }

 function init() {
   loadToDo();
   toDoInput.addEventListener("keydown", handleSubmit);
 }
 init();