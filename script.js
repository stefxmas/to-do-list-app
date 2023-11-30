function newItem(){

    //1. Adding a new item to the list of items: 
       let li = document.createElement("li");
       let inputValue = document.getElementById("input").value;
       let text = document.createTextNode(inputValue);
       li.appendChild(text);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = document.querySelector('#list');
         list.appendChild(li);
       }
    
     // Crossing out an item from the list of items:
       function crossOut() {
             li.classList.toggle("strike");
         }
    
         li.addEventListener("dblclick",crossOut);
    
     //3-1 Adding the delete button "X": 
       let crossOutButton = document.createElement("crossOutButton");
         crossOutButton.appendChild(document.createTextNode("X"));
         li.appendChild(crossOutButton);
    
         crossOutButton.addEventListener("click", deleteListItem);
     //3-2 Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             li.classList.add("delete")
         }
     // 4. Reordering the items: 
       $('#list').sortable();
    
    }
    
    document.getElementById("input").addEventListener("keypress", function(event) {
        if (event.key === 'Enter') {
          event.preventDefault(); 
          newItem(); 
        }
      });
