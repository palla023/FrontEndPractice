const doc = document;
let count = 0;
let updateBtn = false;
//Debugging
//click event for add task button - to retrive the input value and append to ul element
doc.getElementById("addTask").onclick = function (event) {
  event.preventDefault();
  const regex = /^[A-Za-z ]+$/;
  let inputValue = doc.getElementById("inpt"); //<input />
  if (!regex.test(inputValue.value)) {
    //inputValue.style.border = "1px solid red";
    inputValue.className = "inpt inputError";
    doc.querySelector("#error").style.display = "block";
    doc.querySelector("#error").innerText =
      "Special Characters are not allowed";
    doc.querySelector("#error").style.color = "Red";
    return;
  }
  if (inputValue.value) {
    //""
    //creating a new li element to show the task in browser
    const li = doc.createElement("li"); //<li></li>
    const spanElement = doc.createElement("span");
    const editButton = doc.createElement("button"); //<button></button>
    const deleteButton = doc.createElement("button");

    li.setAttribute("id", "li_" + count);

    editButton.innerText = "Edit";
    editButton.setAttribute("data-id", "li_" + count);
    editButton.style.backgroundColor = "#008CBA"
    editButton.style.color = "#fff"

    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("data-id", "li_" + count);
    deleteButton.style.backgroundColor = "#f44336"
    deleteButton.style.color = "#fff"

    editButton.addEventListener("click", function (event) {
      editTask(event);
    });

    deleteButton.addEventListener("click", function (event) {
      deleteTask(event);
    });

    spanElement.innerText = inputValue.value;
    li.appendChild(spanElement);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    //after creating the li element, adding input field value which is retriving from input
    // li.innerText = inputValue.value; //<li> New Task </li>
    inputValue.value = ""; //

    //appending li item into ul element.
    doc.getElementById("todolist").appendChild(li);
    //After adding the List element successfully , if still Error is there we can remove those properties
    if (doc.querySelector("#error")) {
      //inputValue.style.border = "1px solid black";
      inputValue.className = "inpt";
      doc.querySelector("#error").innerText = "";
      doc.querySelector("#error").style.display = "none";
    }

    count++;
  }
};

function editTask(event) {
  const elmId = event.target;
  const elem = elmId.getAttribute("data-id"); //li_0
  if (updateBtn) {
    //Update Button functionality
    //console.log("Updated Value: " , doc.querySelector("#"+elem+"_update").value)
    if (!doc.querySelector("#" + elem + "_update")) {
      alert(
        "You can't update two fields at a time!!Please update one after one"
      );
      return;
    }
    doc.querySelector("#" + elem + " span").innerText = doc.querySelector(
      "#" + elem + "_update"
    ).value;
    //doc.querySelector("#"+elem+"_update").remove();
    elmId.innerText = "Edit";
    updateBtn = false;
  } else {
    // alert("Edit")
    //Edit Button  functionality
    const editInpt = document.createElement("input");
    editInpt.setAttribute("id", elem + "_update"); //li_0_update

    const editTask = document.querySelector("#" + elem + " span"); // #li_0 span

    editInpt.value = editTask.innerText;

    document.querySelector("#" + elem + " span").innerText = "";
    document.querySelector("#" + elem + " span").appendChild(editInpt);
    elmId.innerText = "Update";
    updateBtn = true;
  }
}
function deleteTask(event) {
  const elmId = event.target;
  const elem = elmId.getAttribute("data-id");
  document.querySelector("#" + elem).remove();
}
