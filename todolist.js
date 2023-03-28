function newElement(){
    
      const deger= task.value.trim() //boşlukları yok sayar
      if(!deger){  
        $('.error.toast').toast("show") }

      else{
        var taskDOM= document.getElementById("task").value
        var listDOM=document.getElementById("list")
        let liDOM=document.createElement("li")
        liDOM.innerHTML=(taskDOM)
        listDOM.append(liDOM)
        localStorage.setItem("taskDOM",taskDOM)
        $('.success.toast').toast("show")

        let iDOM = document.createElement("i");
        iDOM.classList.add("fa", "fa-times","close");
        liDOM.appendChild(iDOM);
    
        liDOM.addEventListener("click", completed);
        iDOM.addEventListener("click", close);
        

        }
        
        task.value=""  

}
let liAllDOM = document.querySelectorAll("li");

for(let i = 0; i < liAllDOM.length; i++){ 
    liAllDOM[i].addEventListener("click", completed);
        
}

function completed(){
    if(this.classList.contains("checked"))
        this.classList.remove("checked");
    else
        this.classList.add("checked");
}

let iAllDOM = document.querySelectorAll("i");

for(let i = 0; i < iAllDOM.length; i++){ 
    iAllDOM[i].addEventListener("click", close);
   
}

function close() {
    this.parentElement.remove();
    localStorage.removeItem("taskDOM");
}




