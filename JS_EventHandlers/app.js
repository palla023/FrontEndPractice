// document.querySelector("#btn").onclick = function() {
//     alert("Add")
// }

// document.querySelector("#btn_1").onclick = function() {
//     alert("Delete")
// }

// document.querySelector("#btn_2").onclick = function() {
//     alert("Reset")
// }

// document.querySelectorAll("button")[0].onclick = function() {
//     alert("Common Method")
// }


/**
 * click
 * doubeClick
 * rightClick
 * input
 *  change
 *  focus
 *  blur
 *  keyup
 *  keydown
 * mouseover
 * mouseout
 * 
 */

const ct = document.querySelector("#count");
let count = 0;

updateElement(0)

// document.querySelector("#btn").dblclick = function () {
//     updateElement(count, "add")
// }

document.querySelector("#btn").addEventListener("dblclick", function () {
        updateElement(count, "add")
    }) 

document.querySelector("#decrement").onclick = function (event) {
    console.log(event)

    updateElement(count, "delete")
}

function updateElement(currentCount, action) {
    switch (action) {
        case "add":
            count = currentCount + 1;
            break;
        case "delete":
            if (count > 0) {
                count = currentCount - 1;
            }
            break;
        default:
            count = 0;
    }

    ct.innerText = count;
}


document.querySelector("#inpt").onfocus = function() {
    console.log("Input Focused!")
}

document.querySelector("#inpt").onblur= function() {
    console.log("Input Leaving!")
}

document.querySelector("#inpt").onkeyup= function(event) {
    console.log(event)
    // if(event.keyCode === 13){
    //     alert("You pressed enter key in Keboard!")
    // }
    // console.log("KeyCode: ", event.keyCode)
}

document.querySelector("#block").onmouseover = function(event) {
    console.log(event)
    event.target.style.backgroundColor = "blue"
}

document.querySelector("#block").onmouseleave = function(event) {
    event.target.style.backgroundColor = "red"
}

//Event Bubling

// function test() {
//     console.log("hi")
// }

// function test() {
//     console.log("hello")
// }

// test();



