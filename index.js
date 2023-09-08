const myForm = document.querySelector("form");
const inpTask = document.getElementById("task");
const prioritySelect = document.getElementById("priority");
const tbody = document.querySelector("tbody")

let AllTask =[];
myForm.addEventListener("submit",function(e){
   e.preventDefault();
   let Data =
   {
    input : inpTask.value,
    Priority : prioritySelect.value    
   }
     AllTask.push(Data)
     tbody.innerHTML = null;

     AllTask.map((ele)=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        console.log(ele.input)
        td1.innerText =ele.input;
        td2.innerText = ele.Priority ;
        tr.append(td1,td2);
        tbody.append(tr)
    })
})

