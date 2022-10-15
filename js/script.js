let nodeDetails = [];
let id = 0;

function validateForm(){
    let tt  = document.querySelector("#titleName").value;
    let nn = document.querySelector("#notesName").value;
    if(tt == null || tt == ""){
        let ttElement = document.querySelector("#titleName");
        ttElement.style.border = "2px solid red";
        document.querySelector("#titlespan").innerHTML = "Title can not be blank";
        return false;
    }
    else if(nn == null || nn == ""){
        let nnElement = document.querySelector("#notesName");
        nnElement.style.border = "2px solid red";
        document.querySelector("#notespan").innerHTML = "Notes can not be blank";
        return false;
    }
    else{
        let note = {
            "id": id,
            "title": tt,
            "notes": nn

        };
        id ++;
        nodeDetails.push(note);
        console.log(nodeDetails);
        alert("form submitted");
        document.querySelector("form").reset();
        return false; //to not let page refresh
    }
}
function displayNotes(){
    
    let section = document.querySelector("section");
    if(section != null){
    section.remove();
    }
    nodeDetails.forEach(note=>{
        let section = document.createElement("section");
        let body = document.querySelector(".accordion-body");
        body.appendChild(section);
        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode(note.title);
        h2.appendChild(h2Text);
        section.appendChild(h2);

        let p = document.createElement("p"); 
        let pText = document.createTextNode(note.notes);
        p.appendChild(pText);
        section.appendChild(p);
        let btn = document.createElement("button");
        let btntext = document.createTextNode("Delete Note");
        btn.appendChild(btntext);
        btn.addEventListener("click", function(){ //add event is a pre defined method inside this passing anonymous function
            deleteUser(note.id);
        })
        section.appendChild(btn);

        
    });
}
function deleteUser(id){
    let sec = document.querySelectorAll("section");
   for(let i=0; i<sec.length; i++)
   {
       sec[i].remove();
   }
       nodeDetails.splice(id, 1);
       nodeDetails.forEach(note=>{
           console.log(note.id);
           let section = document.createElement("section");
           let body = document.querySelector(".accordion-body");
           body.appendChild(section);
   
           let h2 = document.createElement("h2");
           let h2Text = document.createTextNode(note.title);
           h2.appendChild(h2Text);
           section.appendChild(h2);
   
           let p = document.createElement("p");
           let pText = document.createTextNode(note.notes);
           p.appendChild(pText);
           section.appendChild(p);
   
           let btn = document.createElement("button");
          
           let btntext = document.createTextNode("Delete user");
           btn.appendChild(btntext)
           
           btn.addEventListener("click", function(){
            deleteUser(note.id);
        }) 
           section.appendChild(btn);
         
       });
   
   }