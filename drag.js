movePiece(document.getElementById("movePiece"));

//create function to move the piece
function movePiece(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if there is an id with the same name but with header in the name, that element will be dragged
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, the div itself will move
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    //get the position of the cursor
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    //function called when the mouse moves
    document.onmousemove = elementDrag;
  }
  //function for getting the new position of the element
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //setting the new position of the element when placed
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    //stop movement when mouse lets go
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
    //grab the document
// (function(document) {
//     'use strict';
        //grab class element
//     var movement = document.getElementsByClassName('movePiece'),
//         movementCount = movement.length, i;

        //create function for movement
//     function movePiece(evt) {
//         var diffX = evt.clientX - this.offsetLeft,
//             diffY = evt.clientY - this.offsetTop,
//             that = this;

        //function for grabbing the location of the cursor
//     function moveAlong(evt) {
//         that.style.left = (evt.clientX - diffX) + 'px';
//         that.style.top = (evt.clientY - diffY) + 'px';
//     }

        //stops the event listener
//     function stopDrag() {
//         document.removeEventListener('mousemove', moveAlong);
//         document.removeEventListener('mouseup', stopDrag);
//     }

//     document.addEventListener('mouseup', stopDrag);
//     document.addEventListener('mousemove', moveAlong);
//     }

        //apply loop
//     for(var i = 0; i<movementCount; i ++) {
//         movement[i].addEventListener('mouseDown', movePiece);
//     }

// }(document));

  //code for ID referenced from:
  //Author: w3schools
  //URL: https://www.w3schools.com/howto/howto_js_draggable.asp
  //Date: July 2, 2020

  //code for class referenced from:
  //Author: Oleg
  //URL: https://stackoverflow.com/questions/14695933/draggable-div-with-classname
  //Date: July 2, 2020