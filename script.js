function addTask() {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
      // create new HTML list item
      var item = document.createElement("li");
      // add HTML for buttons and new task text
      // use '' because of "" in HTML
      item.innerHTML = 
        '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + 
        '<input type="button" class="important" onclick="imp(this.parentNode)" value="!" />' +
     '<span>' + newTask + '</span>';
      // add new item as part of existing list
      document.getElementById("tasks").appendChild(item);  
      // remove the entered text from the input box
      input.value = "";
      input.placeholder = "Enter new task here...";
      
    }
  }
  
  
  
  // change styling used for given item
  function markDone(item) {
      if (item.classList.contains("finished")) {
          item.classList.remove("finished");
      } else {
          item.classList.add("finished");
      }
  }
  
  function remove (item) {
    // remove item completely from document if it's finished or check wether user want to delete it unfinished
    if (item.classList.contains('finished')) {
      item.remove();
    }
    else { 
      if (confirm("The task is not finished. Do you still want to delete it from the TO-DO list? Press OK to delete the task. Press Cancel to leave it in the list.")== true)
    { //remove the task if the user confirms, automatically true
            item.remove()
    }
      }
         }
  
  // removing or adding the importance backgroud color when ! button is pressed
  function imp (item) {
    if (item.classList.contains("BackGrImportant")) {
  item.classList.remove("BackGrImportant");   
    } 
    else { item.classList.add("BackGrImportant"); 
    }
  
  }
  
  function doAbout() {
      var aboutDiv = document.getElementById("divabout");
      aboutDiv.textContent = "Author is Alena C.";
    aboutDiv.className = "yellowback"; 
  }
  
  function clearAbout() {
    var aboutDiv = document.getElementById("divabout");
      aboutDiv.textContent = ""; //removes text
    aboutDiv.classList.remove("yellowback"); // removes yellow background
     aboutDiv.innerHTML = '<input type="button" value="About" onclick="doAbout()">'; // Add the "About" button HTML back
  }