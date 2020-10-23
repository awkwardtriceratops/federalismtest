var dragged;
var testList = ["Governor", "Mayor", "President", "Issues licenses (marriage, driver's)", "Prints money", "Runs school system", "Organizes emergency services (police and fire)", "Elects a senator and representatives", "City hall", "Establishes a state constitution", "The White House", "Runs parks and recreation, waste and storm water management", "Declares war", "Enter into treaties with foreign governments", "State Capitol"]
var testAnswer = [1, 2, 0, 1, 0, 2, 2, 1, 2, 1, 0, 2, 0, 0, 1]
var curAnswer = 0;
/* events fired on the draggable target */
document.getElementsByClassName("draggable")[0].innerText = testList[curAnswer]
document.addEventListener("drag", function(event) {}, false);

document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.dataTransfer.setData("text/plain", event.target.innerText);
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "one" || event.target.className == "two" || event.target.className == "three") {
        event.target.style.background = "white";
        event.target.style.color = "black";
    }

}, false);

document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "one" || event.target.className == "two" || event.target.className == "three") {
        event.target.style.background = "";
        event.target.style.color = "white";
    }

}, false);

document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    var newElement = document.createElement("div")
    newElement.textContent = testList[curAnswer + 1]
    newElement.className = "draggable"
    newElement.setAttribute("draggable", true)
    newElement.style.color = "black"
        // move dragged elem to the selected drop target
    if (event.target.className == "one" && testAnswer[curAnswer] == 0) {
        event.target.style.color = "white";
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        //event.target.appendChild( dragged );
        document.getElementsByClassName("answercheck")[0].style.background = "green"
        var data = event.dataTransfer.getData("text");
        //document.getElementById("draggable").innerText=testList[curAnswer]
        //event.target.innerText=data
        document.getElementsByClassName("spawnzone")[0].appendChild(newElement)
        document.getElementsByClassName("answercheck")[0].innerText = "Right answer! Keep going :)"
        if (curAnswer == 14) {
            document.getElementsByClassName("answercheck")[0].innerText = "ALL DONE! Secret message: Tell your teacher your favorite candy."
            document.getElementsByClassName("answercheck")[0].style.background = "yellow"
            document.getElementsByClassName("answercheck")[0].style.color = "black"
        }
        curAnswer += 1
    } else if (event.target.className == "two" && testAnswer[curAnswer] == 1) {
        event.target.style.color = "white";
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        //event.target.appendChild( dragged );
        //dragged.parentNode.appendChild( textnode );
        document.getElementsByClassName("answercheck")[0].style.background = "green"
        var data = event.dataTransfer.getData("text");
        //document.getElementById("draggable").innerText=testList[curAnswer]
        //event.target.innerText=data
        document.getElementsByClassName("spawnzone")[0].appendChild(newElement)
        document.getElementsByClassName("answercheck")[0].innerText = "Right answer! Keep going :)"
        curAnswer += 1
    } else if (event.target.className == "three" && testAnswer[curAnswer] == 2) {
        event.target.style.color = "white";
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        //event.target.appendChild( dragged );
        var textnode = document.createTextNode("Water");
        //dragged.parentNode.appendChild( textnode );
        document.getElementsByClassName("answercheck")[0].style.background = "green"
        var data = event.dataTransfer.getData("text");
        document.getElementsByClassName("spawnzone")[0].appendChild(newElement)
        curAnswer += 1
        document.getElementsByClassName("answercheck")[0].innerText = "Right answer! Keep going :)"
    } else {
        document.getElementsByClassName("answercheck")[0].style.background = "red"
        event.target.style.background = "";
        event.target.style.color = "white";
        document.getElementsByClassName("draggable")[0].style.color = "black"
        document.getElementsByClassName("answercheck")[0].innerText = "Wrong answer :( Try again!"
    }
}, false);